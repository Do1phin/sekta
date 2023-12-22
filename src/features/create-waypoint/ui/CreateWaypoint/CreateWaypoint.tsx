import cx from 'classnames';
import React, { DragEventHandler, FC, useState } from 'react';

import css from './CreateWaypoint.module.scss';
import { AddWaypointBtn, DeleteWaypointBtn, WaypointHeader } from '../../';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import { setReplacingWaypointId, swapWaypointsPosition } from '../../../../app/store/routeSlice';
import { selectReplacingWaypointId } from '../../../../app/store/selectors/selectors';
import { ChangeWaypointType } from '../../../change-waypoint-type';
import { IInitialWaypoint, IWaypoint, WaypointType } from '../../../find-address/api/types';
import { FindAddress } from '../../../find-address/ui/FindAddress/FindAddress';

interface IWaypointProps {
  distance: string;
  isExtremeWaypoint: boolean;
  isLastWaypoint: boolean;
  waypoint: IWaypoint | IInitialWaypoint;
}

const CreateWaypoint: FC<IWaypointProps> = (props) => {
  const { distance = '-', isExtremeWaypoint, isLastWaypoint = false, waypoint } = props;

  const [isDetached, setDetached] = useState(false);
  const [isEditableWaypoint, setEditableWaypoint] = useState(false);
  const replacingWaypointId = useAppSelector(selectReplacingWaypointId);

  const dispatch = useAppDispatch();

  const waypointId = waypoint.system_properties.waypoint_id;
  const waypointType = waypoint.system_properties.waypoint_type;

  const dragStartEventHandler: DragEventHandler<HTMLDivElement> = (): void => {
    dispatch(setReplacingWaypointId({ id: waypointId }));
  };

  const dragLeaveEventHandler: DragEventHandler<HTMLDivElement> = (): void => {
    setDetached(() => false);
  };

  const dragOverEventHandler: DragEventHandler<HTMLDivElement> = (event): void => {
    event.preventDefault();
    !isDetached && setDetached(() => true);

    if (isExtremeWaypoint) {
      setDetached(() => false);
      event.dataTransfer.dropEffect = 'none';
    }
  };

  const shouldBeReadyToSwap = () => {
    return (
      replacingWaypointId !== null &&
      replacingWaypointId > -1 &&
      waypointId > -1 &&
      !isExtremeWaypoint
    );
  };

  const dropEventHandler: DragEventHandler<HTMLDivElement> = (event): void => {
    event.preventDefault();
    setDetached(() => false);

    if (shouldBeReadyToSwap()) {
      dispatch(
        swapWaypointsPosition({
          replaceableWaypointId: waypointId,
          // @ts-ignore
          replacingWaypointId,
        }),
      );
    }
  };

  const waypointClasses = cx(css.waypoint, {
    [css.draggable]: !isExtremeWaypoint,
    [css.detached]: isDetached,
    [css.last]: isLastWaypoint,
    [css['type-loading']]: waypointType === WaypointType.Loading,
    [css['type-unloading']]: waypointType === WaypointType.Unloading,
    [css['type-waypoint']]: waypointType === WaypointType.Waypoint,
    [css['type-clearance']]: waypointType === WaypointType.CustomsClearance,
    [css['type-inspection']]: waypointType === WaypointType.CustomsInspection,
    [css['type-registration']]: waypointType === WaypointType.CustomsRegistration,
  });

  return (
    <>
      <div
        onDragStart={dragStartEventHandler}
        onDragLeave={dragLeaveEventHandler}
        onDragOver={dragOverEventHandler}
        onDrop={dropEventHandler}
        draggable={!isExtremeWaypoint}
        className={waypointClasses}>
        {waypoint.system_properties.active && (
          <>
            <WaypointHeader
              isExtremeWaypoint={isExtremeWaypoint}
              waypointType={waypointType}
              onChangeEditableWaypoint={setEditableWaypoint}
            />
            <div className={css.content}>
              {isEditableWaypoint ? (
                <ChangeWaypointType setEditableWaypoint={setEditableWaypoint} waypoint={waypoint} />
              ) : (
                <>
                  <FindAddress waypointId={waypointId} waypoint={waypoint} />
                  <DeleteWaypointBtn waypointId={waypointId} disabled={isExtremeWaypoint} />
                </>
              )}
            </div>
          </>
        )}
      </div>

      {!isLastWaypoint && (
        <div className={css['waypoint-info']}>
          {waypoint && 'properties' in waypoint && <span className={css.distance}>{distance}</span>}
          <AddWaypointBtn waypointId={waypointId} />
        </div>
      )}
    </>
  );
};

export { CreateWaypoint };
