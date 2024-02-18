export function countCircleArea(decimetr: number):number {
  const radius = decimetr / 2;
  return radius * radius * Math.PI;
}

export function countCostPerSquareCm(area: number, price: number): number {
  return (price / area);
}
