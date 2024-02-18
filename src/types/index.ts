export interface PizzaState {
  pizzas: Pizza[];
  isComparingPizzas: boolean;
  isResultShown: boolean;
  cheaperPizzaIndex: number | null;
  units: Units;
  currencies: Currency[];
}

export interface Pizza {
  diameter: number;
  amount: number;
  pricePerPizza: number;
  pricePerCentimeter: number;
  totalArea: number;
  totalPrice: number;
}

export interface Units {
  currency: string;
  measure: string;
}

export interface Currency {
  code: string;
  country: string;
}
