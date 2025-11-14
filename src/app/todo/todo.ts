import { Component } from "@angular/core";
import { TodoForm } from "./form/form";
import { TodoList } from "./list/list";

@Component ({
    selector: 'app-todo',
    imports: [TodoForm, TodoList],
    templateUrl: './todo.html',
    styleUrl: './todo.css',
})

export class Todo {

}