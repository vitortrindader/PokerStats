import odds from "../public/data/odds.json";

function queryOdds(input1, input2) {
  console.log(input1);
  console.log(input2);
  let value = odds.filter(
    (object) =>
      object.carta1.valor === input1.valor &&
      object.carta1.tipo === input1.tipo &&
      object.carta2.valor === input2.valor &&
      object.carta2.tipo === input2.tipo
  );
  console.log(value);
  if (value.length === 0) {
    value = odds.filter(
      (object) =>
        object.carta1.valor === input2.valor &&
        object.carta1.tipo === input2.tipo &&
        object.carta2.valor === input1.valor &&
        object.carta2.tipo === input1.tipo
    );
  }
  return value[0].valores;
}

export { queryOdds };
