import { Component, signal } from '@angular/core';
import { Layout } from './layout/layout';
import { Home } from './home/home';


@Component({
  selector: 'app-root',
  imports: [Layout, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hello World');
}
