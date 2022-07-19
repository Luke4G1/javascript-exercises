const ftoc = function (grades) {
  let toc = ((grades - 32) / 1.8)
  return parseFloat(toc.toFixed(1))
};

const ctof = function (grades) {
  let tof = (grades * 1.8 + 32)
  return parseFloat(tof.toFixed(1))

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
