import type { ISelectItemContent } from '../../../../shared/ui/Select/Select.types';
import type { IInitialWaypoint, IWaypoint } from '../../api/types';
import React, { FC, useEffect, useRef, useState } from 'react';

import css from './FindAddress.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import { changeWaypoint, clearWaypoint } from '../../../../app/store/routeSlice';
import {
  selectPermittedAmenities,
  selectPermittedCountries,
  selectPermittedPlaces,
} from '../../../../app/store/selectors/selectors';
import { storageHelper } from '../../../../shared/helpers';
import { useClickOutside, useDebounce } from '../../../../shared/hooks';
import { Select } from '../../../../shared/ui';
import { convertOSMFeatureToWaypoint } from '../../../../widgets/MapContainer/helpers/';
import { convertWaypointDataToSelectContent } from '../../helpers/converting.helper';
import { pointFilteringHelper } from '../../helpers/pointFiltering.helper';
import { sortList } from '../../helpers/sortList';
import { useGetLastAddresses, useSearchQuery } from '../../hooks';
import { isWaypoint } from '../../utils/waypointGuards';

interface ISearchProps {
  label?: string;
  waypoint: IWaypoint | IInitialWaypoint;
  waypointId: number;
}

const FindAddress: FC<ISearchProps> = (props) => {
  const { label, waypointId, waypoint } = props;

  const [isShow, setIsShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [changedList, setChangedList] = useState<IWaypoint[]>([]);
  const [selectedValue, setSelectedValue] = useState<ISelectItemContent>();
  const [selectList, setSelectList] = useState<ISelectItemContent[]>();

  const permittedAmenities = useAppSelector(selectPermittedAmenities);
  const permittedCountries = useAppSelector(selectPermittedCountries);
  const permittedPlaces = useAppSelector(selectPermittedPlaces);

  const { lastAddresses } = useGetLastAddresses();

  const dispatch = useAppDispatch();

  const debouncedSetSearchQuery = useDebounce(1000, setSearchQuery);

  const ref = useRef(null);

  const setSelectedInputValue = (value: ISelectItemContent) => {
    value && setSelectedValue(() => value);

    if (!value) {
      setSelectedValue(() => undefined);
      dispatch(clearWaypoint({ id: waypointId, waypoint: waypoint }));
    }
  };

  useClickOutside(ref, () => {
    setIsShow(() => false);
  });

  useEffect(() => {
    if (isWaypoint(waypoint)) {
      setSelectedValue(() => convertWaypointDataToSelectContent(waypoint));
    }
  }, []);

  const {
    data: addresses,
    isFetching,
    refetch,
  } = useSearchQuery({
    lang: storageHelper('local').get('lng') || 'en',
    searchQuery,
  });

  useEffect(() => {
    searchQuery && refetch();
  }, [searchQuery, refetch]);

  useEffect(() => {
    const sortedList =
      addresses &&
      pointFilteringHelper({
        list: addresses?.features,
        permittedAmenities,
        permittedCountries,
        permittedPlaces,
      }).map((feature) => {
        return convertOSMFeatureToWaypoint(feature, waypoint);
      });

    setChangedList(() => sortedList);
  }, [addresses, waypoint]);

  useEffect(() => {
    const selectedPoint = changedList.filter((element) => {
      return element.properties?.osm_id === selectedValue?.value;
    });

    selectedValue &&
      dispatch(
        changeWaypoint({
          id: waypointId,
          waypoint: { ...waypoint, ...selectedPoint[0] },
        }),
      );
  }, [selectedValue]);

  useEffect(() => {
    const convertedList = changedList?.map((waypoint) => {
      return convertWaypointDataToSelectContent(waypoint);
    });

    const sortedList = convertedList && sortList.byOption(convertedList, 'description');

    sortedList && setSelectList(() => sortedList);
  }, [changedList]);

  return (
    <div className={css.search} ref={ref}>
      <Select
        list={searchQuery ? selectList : lastAddresses}
        // @ts-ignore
        onSetSelectedValue={setSelectedInputValue}
        selectedValue={selectedValue}
        // @ts-ignore
        onSearchValue={debouncedSetSearchQuery}
        isIcon={true}
        isSearch={true}
        isOpen={isShow}
        isFetching={isFetching}
        label={label}
        high={true}
      />
    </div>
  );
};

export { FindAddress };
