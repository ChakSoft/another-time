const fadd = (fv, fv2, factor = 10000) => {
  return ((fv * factor) + (fv2 * factor)) / (factor)
}
const fsub = (fv, fv2, factor = 10000) => {
  return ((fv * factor) - (fv2 * factor)) / (factor)
}

module.exports = {
  fadd,
  fsub,
}
