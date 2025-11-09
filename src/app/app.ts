import { Component, OnInit, signal } from '@angular/core';
import { Todo } from './todo/todo';
import { PrimeNG } from 'primeng/config';


@Component({
  selector: 'app-root',
  imports: [Todo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

    constructor(private primeng: PrimeNG) {}

    ngOnInit() {
        this.primeng.ripple.set(true);
    }
}