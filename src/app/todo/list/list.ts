import { Component, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-todo-list',
  imports: [CardModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})

export class TodoList implements OnInit {

  elements = [
    {
      name: 'hello Kamlesh',
      content: 'no content'
    }
  ]

  constructor() {

  }

  ngOnInit() {}

}
