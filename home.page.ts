import { Component } from '@angular/core';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

todoList = [{
itemName : 'Coding',
itemDueDate: '1-10-21',
itemPriority: 'high',
itemCategory: 'Word'
},
{
  itemName : 'Design',
  itemDueDate: '2-10-21',
  itemPriority: 'low',
  itemCategory: 'Word'
  },
  {
    itemName : 'Shopping',
    itemDueDate: '7-10-21',
    itemPriority: 'middle',
    itemCategory: 'Personal'
    },
    {
    itemName : 'Workout',
    itemDueDate: '5-10-21',
    itemPriority: 'high',
    itemCategory: 'Personal'
  }
]

today : number = Date.now()

  constructor(public modalCtrl: ModalController) {}

  async addTask(){
    const modal = await this.modalCtrl.create({
      component:AddNewTaskPage
    })

    modal.onDidDismiss () .then (newTaskObj =>{
      console. log (newTaskObj.data) ;
      })

    return await modal.present()
  }


}
