import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Home } from "./home/home";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule, Home, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hotel-app');
}
