import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingScreenComponent } from '../app/core/loading-screen/loading-screen.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoadingScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Encounters.Client';
}
