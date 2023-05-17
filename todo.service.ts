import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private storage: Storage) {
    this.init()
  }

    addTask(){

    }

    deleteTask(){

    }

    updateTask(){

    }

    getAllTasks(){

    }
    async init(){
      await this.storage.create()
    }
   
}
