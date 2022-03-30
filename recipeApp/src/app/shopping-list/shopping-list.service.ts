import { EventEmitter } from "@angular/core";
import { Ingridient } from "../shared/ingridient.model";

export class ShoppingListService{
  ingridientsChanged = new EventEmitter<Ingridient[]>()
  ingridients: Ingridient[] = [
    new Ingridient('apples', 5),
    new Ingridient('tomatos', 10)
  ];

  getIngredient(){
    return this.ingridients.slice()
  }

  addIngredient(ingredient: Ingridient){
   this.ingridients.push(ingredient)
   this.ingridientsChanged.emit(this.ingridients.slice())
  }
}
