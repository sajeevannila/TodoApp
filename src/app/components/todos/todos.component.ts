import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todos'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos:Todo[] | undefined;
  inputTodo:string = '';
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'second todo',
        completed: false
      },
    ]
  }
  toggleDone ( id: number ) {
    this.todos?.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo (id: number) {
    this.todos = this.todos?.filter((v, i) => i !== id);
  }

  addTodo () {
    this.inputTodo.length != 0 ?
    this.todos?.push({
      content: this.inputTodo,
      completed: false
    }):alert('ENTER YOUR TODO LIST')
    this.inputTodo = "";
  }
  // if(this.inputTodo.length != 0){
  //   this.todos?.push({
  //     content: this.inputTodo,
  //     completed: false
  //   })
  // }else{
  //   alert('Not Empty')
  // }
}
