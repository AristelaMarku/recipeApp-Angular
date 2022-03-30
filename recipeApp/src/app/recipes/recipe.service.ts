import { EventEmitter } from "@angular/core";
import { Ingridient } from "../shared/ingridient.model";
import { Recipe } from "./recipe.model";

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
    'This is simply a test',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingridient('Meat', 1),
      new Ingridient('MeFrench Fries', 20),
    ]),
    new Recipe('A Stela Recipe',
     'Cooking byrek',
     'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
     [
      new Ingridient('Bread', 2),
      new Ingridient('Meat', 20),
     ])
  ];

  getRecipe(){
    return this.recipes.slice()
  }

}
