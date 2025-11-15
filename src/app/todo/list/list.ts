import { Component, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';

export interface BlogPostTypes {
  name: string;
  description: string;
}
@Component({
  selector: 'app-todo-list',
  imports: [CardModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})

export class TodoList implements OnInit {
  @Input() listElement!: BlogPostTypes

  constructor() {

  }

  ngOnInit() {}

}
