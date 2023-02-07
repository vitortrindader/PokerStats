function format(valor) {
  switch (valor) {
    case "11":
      return "J";
    case "12":
      return "Q";
    case "13":
      return "K";
    case "1":
      return "A";
    default:
      return valor;
  }
}
export default format;
