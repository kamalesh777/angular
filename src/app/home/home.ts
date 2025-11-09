import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  logsArr: number[] = [1]
  isVisible = false;

  toggleDetails = () => {
    this.isVisible = !this.isVisible
  }
  createLog = () => {
    console.log("====", this.logsArr)
    this.logsArr.push(this.logsArr.length + 1)
  }
}
