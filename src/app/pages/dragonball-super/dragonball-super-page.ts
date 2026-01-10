import { NgClass } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { Character } from '../../interfaces/character.interface';
import { DragonballCharacterAdd } from '../../components/dragonball/dragonball-character-add/dragonball-character-add';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super-page.html',
  selector: 'dragonball-super',
  imports: [CharacterList, DragonballCharacterAdd],
})
export class DragonballSuperPageComponent {
  // * New and recommended way
  public dragonballService = inject(DragonballService);

  // * Old way
  // constructor(public dragonballService: DragonballService) {}

  // * Previous logic
  // characters = signal<Character[]>([
  //   { id: 1, name: 'Goku', power: 9001 },
  //   { id: 2, name: 'Vegetta', power: 8000 },
  // ]);

  // addCharacter(character: Character) {
  //   this.characters.update((list) => [...list, character]);
  // }
}
