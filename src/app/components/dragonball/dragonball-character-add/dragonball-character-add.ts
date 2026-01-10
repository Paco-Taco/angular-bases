import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
  WritableSignal,
} from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './dragonball-character-add.html',
})
export class DragonballCharacterAdd {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      alert('Escribe algo jaj');
      return;
    }

    const newCharacter: Character = {
      // id: this.characters().length + 1,
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };

    // this.characters.update((prev) => [...prev, newCharacter]);

    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true,
  //   };
  // });

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
