import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonResults } from '../interfaces/pokedex.interfaces';
import { Observable } from 'rxjs';
import { PokeData } from '../interfaces/PokeData.interface';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private serviceURL: string = 'https://pokeapi.co/api/v2/pokemon';
  private PokemonList!: PokemonResults[];

  constructor(private http: HttpClient) {}

  allPokemons(): Observable<PokemonResults> {
    return this.http.get<PokemonResults>(`${this.serviceURL}`);
  }

  findPockemonById(pockeName:string):Observable<PokeData>{
    return this.http.get<PokeData>(`${this.serviceURL}/${pockeName}/`)
  }
}
