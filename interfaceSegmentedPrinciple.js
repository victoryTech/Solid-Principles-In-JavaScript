// **Interface Segregation Principle**
/*
    Interface should be such that client should  not implement 
    unneccesary function that they don't need.
*/

const volumeCalculator = (s) => {
  const proto = {
    type: "volumeCalculator",
  };
  const areaCalProto = Object.getPrototypeOf(areaCalculator());
  const inherit = Object.assign({}, areaCalProto, proto);
  return Object.assign(Object.create(inherit), { shapes: s });
};
