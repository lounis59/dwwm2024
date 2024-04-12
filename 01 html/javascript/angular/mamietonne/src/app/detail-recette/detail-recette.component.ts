import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recette } from '../Recette';
import { RECETTES } from '../RecetteList';
import { TypeColorPipe } from "../type-color.pipe";

@Component({
    selector: 'app-detail-recette',
    standalone: true,
    templateUrl: './detail-recette.component.html',
    styleUrl: './detail-recette.component.css',
    imports: [TypeColorPipe]
})
export class DetailRecetteComponent {
  recetteList: Recette[] = RECETTES;
  recette:Recette|undefined;
 constructor(private route:ActivatedRoute){};
 ngOnInit():void{
  const recetteId: number = parseInt(this.route.snapshot.paramMap.get("id")??"");
  console.log(recetteId);
  this.recette = this.recetteList.find(rec=>rec.id===recetteId)
  
 }
}
