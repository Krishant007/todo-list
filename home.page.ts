import { TodoService } from './../todo.service';
import { Component } from '@angular/core';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { ModalController } from '@ionic/angular';
import { UpdatePage } from '../update/update.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoList: {
    key: any;
    value: {
      itemName: string;
      itemDueDate: Date;
      itemPriority: string;
      itemCategory: string;
    };
  }[] = [];

  today: number = Date.now();

  constructor(public modalCtrl: ModalController, public todoService: TodoService) {
    this.getAllTask();
  }

  async addNewItem() {
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage,
    });
  
    modal.onDidDismiss().then((result) => {
      if (result && result.data) {
        this.getAllTask();
      }
    });
  
    return await modal.present();
  }
  

  getAllTask() {
    this.todoList = this.todoService.getAllTasks();
    console.log(this.todoList);
  }

  delete(key: any) {
    this.todoService.deleteTask(key);
    this.getAllTask();
  }

  async update(selectedTask: any) {
    const modal = await this.modalCtrl.create({
      component: UpdatePage,
      componentProps: { task: selectedTask },
    });
    modal.onDidDismiss().then(() => {
      this.getAllTask();
    });
  
    return await modal.present();
  }
}  
