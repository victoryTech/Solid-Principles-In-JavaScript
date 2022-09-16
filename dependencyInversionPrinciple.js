// Dependency Inversion principle
// class should depend on interfaces rather than concrete classes

const shapeInterface = (state) => ({
  type: "shapeInterface",
  area: () => state.area(state),
});
const solidShapeInterface = (state) => ({
  type: "solidShapeInterface",
  volume: () => state.volume(state),
});
const cubo = (length) => {
  const proto = {
    length,
    type: "Cubo",
    area: (args) => Math.pow(args.length, 2),
    volume: (args) => Math.pow(args.length, 3),
  };
  const basics = shapeInterface(proto);
  const complex = solidShapeInterface(proto);
  const composite = Object.assign({}, basics, complex);
  return Object.assign(Object.create(composite), { length });
};
