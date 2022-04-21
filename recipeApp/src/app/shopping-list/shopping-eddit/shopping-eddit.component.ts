import { Component, ElementRef, OnInit, ViewChild,EventEmitter, Output, OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscriber, Subscription } from 'rxjs';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-eddit',
  templateUrl: './shopping-eddit.component.html',
  styleUrls: ['./shopping-eddit.component.css']
})
export class ShoppingEdditComponent implements OnInit, OnDestroy {
   @ViewChild('f',{static:false}) slForm: NgForm

   subscription: Subscription;
  editMode = false
  editedItemIndex: number;
  editedItem: Ingridient;
  constructor(private slService: ShoppingListService ) { }

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe((index:number)=>{
      this.editedItemIndex = index;
      this.editMode = true
      this.editedItem=this.slService.getIngredien(index)
      this.slForm.setValue({
        name:this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  }

  onSubmit(form: NgForm){
    const value = form.value
    const newIngredient = new Ingridient(value.name, value.amount);
     if(this.editMode){
       this.slService.updateIngredient(this.editedItemIndex, newIngredient)
     }else{
      this.slService.addIngredient(newIngredient)
     }
     this.editMode = false
     form.reset()
  }

  onClear(){
   this.slForm.reset();
   this.editMode = false
  }

  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex)
    this.onClear()
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


}
