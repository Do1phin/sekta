import { unitsCalc } from '../changeRouteHelper';

describe('Convert units', () => {
  // test('the kilometers to meters method should receive the number as a props', () => {});

  test('should convert kilometres to metres', () => {
    expect(unitsCalc.kilometresToMetres(0)).toEqual(0);
    expect(unitsCalc.kilometresToMetres(1)).toEqual(1000);
  });

  test('should convert metres to kilometres', () => {
    expect(unitsCalc.metresToKilometres(1000)).toEqual(1);
  });
});
