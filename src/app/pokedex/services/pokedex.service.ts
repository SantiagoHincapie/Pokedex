import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Pokemon } from '../interfaces/pokedex.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private pokemonList:Pokemon[]=[]

  private serviceURL:string='https://pokeapi.co/api/v2/pokemon'

  constructor(private http:HttpClient) { }

  searchTag(pokemon:string){


    this.http.get(`${this.serviceURL}/${pokemon}`)
    .subscribe(resp=>{
      
    })
  }
}
