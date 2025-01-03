import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recette } from '../Recette';
import { RECETTES } from '../RecetteList';
import { RecetteService } from '../recette.service';
// import { CommonModule } from '@angular/common';
// import { TypeColorPipe } from '../type-color.pipe';

@Component({
  selector: 'app-detail-recette',
  // standalone: true,
  // imports: [CommonModule, TypeColorPipe],
  templateUrl: './detail-recette.component.html',
  styleUrl: './detail-recette.component.css'
})
export class DetailRecetteComponent implements OnInit
{
  // recetteList: Recette[] = RECETTES;
  recette: Recette|undefined;

  constructor(private route: ActivatedRoute, private router: Router,
  private recetteService: RecetteService){}
  ngOnInit(): void 
  {
    const recetteId: number = parseInt(this.route.snapshot.paramMap.get("id")??"");
    console.log(recetteId);
    // this.recette = this.recetteList.find(rec=>rec.id===recetteId);
    // this.recette = this.recetteService.getRecetteById(recetteId)
    this.recetteService.getRecetteById(recetteId).subscribe(recette=>this.recette = recette)
    console.log(this.recette);
    
  }
  goToRecetteList()
  {
    this.router.navigate(["/recettes"]);
  }
  goToEditRecette(){
    this.router.navigate(["/recettes/edit",this.recette?.id])
  }
  deleteRecette()
  {
    if(!this.recette || !this.recette.id)return
    this.recetteService.deleteRecetteById(this.recette.id).subscribe(()=>this.goToRecetteList())

  }
}
