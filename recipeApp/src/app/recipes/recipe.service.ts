import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingridient('Meat', 1),
        new Ingridient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingridient('Buns', 2),
        new Ingridient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingridient[]) {
    this.slService.addIngredients(ingredients);
  }


  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    console.log(this.recipes)
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  ondeleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}


