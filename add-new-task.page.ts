import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categories: string[] = [];
  

  categorySelectedCategory:any;
  
  newTaskObj = {}
  itemName: any| any;
  itemDueDate: any |any;
  itemPriority: any | any;
  itemCategory: string = '';

  
  taskObject:any;
  todoservice: any;
  
  constructor(public modalCtrl: ModalController, public todoService: TodoService) {
    this.todoservice = todoService; 
  }
  

  ngOnInit() {
    this.categories.push ('Work')
  this.categories.push ('Personal')
    
  }
  async add(){
    this.newTaskObj = ({itemName:this.itemName, itemDueDate:this.itemDueDate, itemPriority:this.itemPriority,itemCategory:this.categorySelectedCategory})
       console.log (this.newTaskObj);
       let uid = this. itemName + this. itemDueDate
       
       if(uid){
        await this.todoService.addTask(uid,this.newTaskObj)
      }
      else
      {
      console.log ("Can't save empty task");
      }

    this.dismis()

  }

  selectCategory(index:number){
    this.categorySelectedCategory = this.categories [index]
    console. log (this.categorySelectedCategory);
  }

  async dismis(){
    await this.modalCtrl.dismiss(this.newTaskObj)

  }

}
