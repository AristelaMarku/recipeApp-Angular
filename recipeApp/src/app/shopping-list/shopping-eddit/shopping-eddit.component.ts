import { Component, ElementRef, OnInit, ViewChild,EventEmitter, Output} from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-eddit',
  templateUrl: './shopping-eddit.component.html',
  styleUrls: ['./shopping-eddit.component.css']
})
export class ShoppingEdditComponent implements OnInit {
 @ViewChild("nameInput",{static: false}) nameInputRef: ElementRef
 @ViewChild("amountInput",{static: false}) amountInputRef: ElementRef

 @Output()ingridientAdded = new EventEmitter<{name: string, amount: number}>()

  constructor(private slService: ShoppingListService ) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingridient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient)
  }

}
