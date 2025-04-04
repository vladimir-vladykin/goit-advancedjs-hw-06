/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

type StringValuesType = Pick<AllType, 'name' | 'color'>;
type NumberValuesType = Pick<AllType, 'position' | 'weight'>;

function compare(top: StringValuesType, bottom: NumberValuesType): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight
  }
}

compare({name: 'name', color: 'red'}, {position: 10, weight: 10})

export {};