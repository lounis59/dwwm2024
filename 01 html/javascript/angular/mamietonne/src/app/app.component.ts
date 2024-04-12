import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RECETTES } from './RecetteList';
import { Recette } from './Recette';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { TypeColorPipe } from './type-color.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'mamietonne';
  
}
