export class Account{
  public name: string;
  public products: Variant[];

  constructor(){
    this.name = '';
    this.products = [];
  }
}

export class Product{
  public name: string;
  public price: number;
  public counter: number;
  public variants: Variant[];
  public complements: Variant[];
  public vSelected: number;

  constructor(){
    this.name = '';
    this.variants = [];
    this.complements = [];
  }
}

export class Variant{
  public name: string;
  public price: number;
}
