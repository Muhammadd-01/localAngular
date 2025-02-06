import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hey, Affan';
  name = "Affan";

  hello(){
    let x = "Hello, " +this.name;
    return x;
  }
}
