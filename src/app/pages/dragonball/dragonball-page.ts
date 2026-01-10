import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.html',
})
export class DragonballPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegetta', power: 8000 },
    // { id: 3, name: 'Piccolo', power: 3243 },
    // { id: 4, name: 'Yamcha', power: 500 },
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      alert('Escribe algo jaj');
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((prev) => [...prev, newCharacter]);

    console.log(this.name(), this.power());
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
