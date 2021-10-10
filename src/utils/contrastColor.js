export const getContrastColor = (hexcolor) => {
  const r = parseInt(hexcolor.substr(1, 2), 16)
  const g = parseInt(hexcolor.substr(3, 2), 16)
  const b = parseInt(hexcolor.substr(5, 2), 16)
  const rgb = (r * 299 + g * 587 + b * 114) / 1000
  return rgb >= 128 ? 'black' : 'white'
}
