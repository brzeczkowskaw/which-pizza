export interface PizzaState {
  pizzas: Pizza[];
  isComparingPizzas: Boolean;
  isResultShown: Boolean;
  cheaperPizzaIndex: number | null;
}

export interface Pizza {
  diameter: number;
  amount: number;
  pricePerPizza: number;
  pricePerCentimeter: number;
  totalArea: number;
  totalPrice: number;
}
