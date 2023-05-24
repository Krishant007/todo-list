import { TodoService } from './../todo.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  @Input() Task: any;

  categorySelectedCategory: any;
  newTaskObj: any = {};
  itemName: any;
  itemDueDate: any;
  itemPriority: any;
  itemCategory: any;

  categories: any[] = [];
  task: any;

  constructor(public modalCtlr:ModalController, public todoServive:TodoService) { }

  ngOnInit() {
    this.categories.push('work')
    this.categories.push('personal')

    this.itemName = this.task.value.itemName
    this.itemDueDate = this.task.value.itemDueDate
    this.itemPriority = this.task.value.itemPriority
    this.categorySelectedCategory = this.task.value.itemCategory
    // console.log(this.task);
    
    
  }
  selectCategory(index: any | any){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async dismis(){
    await this.modalCtlr.dismiss()
  }

  async update(){
    this.newTaskObj = ({itemName:this.itemName, itemDueDate:this.itemDueDate, itemPriority:this.itemPriority,itemCategory:this.categorySelectedCategory})
    let uid = this.task.key
    await this.todoServive.updateTask(uid,this.newTaskObj)
    this.dismis()
  }
}