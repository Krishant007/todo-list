import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categories = ['work', 'personal', 'home']

  taskName: string | undefined;
  taskDate: Date | undefined;
  taskPriority: number | undefined;
  taskCategory: string | undefined;
  
  taskObject:any;
  
  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async dismis(){
    await this.modalCtrl.dismiss(this.taskObject)

  }

  selectedCategory(index:number){
    this.taskCategory = this.categories[index]
  }

  AddTask(){
    this.taskObject = ({itemName:this.taskName,
                        itemDueDate:this.taskDate,
                          itemPriority:this.taskPriority,
                            itemCategory:this.taskCategory})

    this.dismis()

  }

}
