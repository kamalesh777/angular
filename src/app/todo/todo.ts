import { Component } from "@angular/core";
import { TodoForm } from "./form/form";

@Component ({
    selector: 'app-todo',
    templateUrl: './todo.html',
    imports: [TodoForm],
})

export class Todo {

}