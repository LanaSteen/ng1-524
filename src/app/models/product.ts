




export class Product{
    title! :string;
    price! : Price;
    img! : string;
    isValid!: boolean
}


export class Price implements IPrice{
  amount!: number;
  currency = valuta.euro;

   
}



export interface IPrice{
   amount : number,
   currency : string
}


// enum gender{
//   male = "male",
//   female = "female"
// }


enum valuta {
  euro ="EUR",
  usd = "USD",
  lari = "GEL"
}