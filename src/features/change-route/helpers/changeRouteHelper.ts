const unitsCalc = {
  kilometresToMetres: (kilometres: number): number => {
    return kilometres * 1000;
  },
  metresToKilometres: (metres: number): number => {
    return metres / 1000;
  },
};

export { unitsCalc };
