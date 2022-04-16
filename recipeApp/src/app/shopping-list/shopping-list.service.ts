import { Ingridient } from "../shared/ingridient.model";
import { Subject } from "rxjs";

export class ShoppingListService{
  ingridientsChanged = new Subject<Ingridient[]>()
  startedEditing = new Subject<number>();

  ingridients: Ingridient[] = [
    new Ingridient('apples', 5),
    new Ingridient('tomatos', 10)
  ];

  getIngredients(){
    return this.ingridients.slice()
  }

  getIngredien(index: number){
    return this.ingridients[index];
  }


  addIngredient(ingredient: Ingridient) {
    this.ingridients.push(ingredient);
    this.ingridientsChanged.next(this.ingridients.slice());
  }

  addIngredients(ingredients: Ingridient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingridients.push(...ingredients);
    this.ingridientsChanged.next(this.ingridients.slice());
  }

  updateIngredient(index:number, newIngredient: Ingridient){
    this.ingridients[index] = newIngredient;
    this.ingridientsChanged.next(this.ingridients.slice())
  }
}
