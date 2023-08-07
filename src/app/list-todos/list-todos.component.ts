import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  
  todos = [
    new Todo(1, "Learn to dance.", false, new Date()),
    new Todo(2, "Angular expert.", false, new Date()),
    new Todo(3, "Learn spring boot.", false, new Date()),
    
  ]
  todo = {
    id: 1,
    description: "Learn to dance."
  }

  constructor() { }

  ngOnInit(): void {
  }

}
