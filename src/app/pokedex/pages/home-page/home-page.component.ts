import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import {
  PokemonName,
  PokemonResults,
} from '../../interfaces/pokedex.interfaces';

@Component({
  selector: 'pokedex-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  pokemonResults?: PokemonName[] = [];
  pokemonName?: string;

  constructor(private pokedexService: PokedexService) {}
  ngOnInit(): void {
    this.pokedexService.allPokemons().subscribe((data) => {
      this.pokemonResults = data.results;
    });
  }

  
}
