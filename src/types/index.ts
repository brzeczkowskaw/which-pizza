export interface PizzaState {
  pizzas: Pizza[];
  isComparingPizzas: Boolean;
  isResultShown: Boolean;
  cheaperPizzaIndex: number | null;
  units: Units;
  currencies: any;
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
  currency: Currency;
  measure: string;
}

export interface Currency {
  code: string;
  country: string;
}
