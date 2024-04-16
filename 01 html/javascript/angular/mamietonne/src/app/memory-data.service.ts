import { Injectable } from '@angular/core';
import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { RECETTES } from './recette/RecetteList';

@Injectable({
  providedIn: 'root'
})
export class MemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb(){
    const recettes = RECETTES;
    return {recettes};
  }
}
