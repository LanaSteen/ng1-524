




export class Product{
    title! :string;
    price! : Price;
    img! : string;
    isValid!: boolean
}


export class Price {
  amount!: number;
  currency = "USD"
   
}