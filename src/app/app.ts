import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Home } from "./home/home";

@Component({
  selector: 'app-root',
  imports: [RouterModule, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hotel-app');
}
