import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RECETTES } from './recette/RecetteList';
import { Recette } from './recette/Recette';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './recette/border-card.directive';
import { TypeColorPipe } from './recette/type-color.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'mamietonne';
  
}
