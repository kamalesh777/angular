import { Component } from "@angular/core";
import { TodoForm } from "./form/form";
import { TodoList } from "./list/list";
import { CommonModule } from "@angular/common";

@Component ({
    selector: 'app-todo',
    imports: [TodoForm, TodoList, CommonModule],
    templateUrl: './todo.html',
    styleUrl: './todo.css',
})

export class Todo {
        
    blogsArr = [
      {
        name: 'Post one',
        description: 'No post found for october'
      },
      {
        name: 'Post two',
        description: 'No post found for November'
      },
      {
        name: 'Post three',
        description: 'Post found for december'
      }
    ]

    handleData(event: { name: string; description: string }) {
      const result = [event, ...this.blogsArr];
        this.blogsArr = result;
    }
}