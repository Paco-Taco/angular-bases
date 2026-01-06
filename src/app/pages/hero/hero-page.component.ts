import { Component, computed, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  styleUrl: './hero-styles.css',
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent {
  nameSignal = signal('Iron Man');
  ageSignal = signal(45);

  heroDescription = computed(() => {
    const description = `${this.nameSignal()} - ${this.ageSignal()}`;

    return description;
  });

  capitalizedName = computed(() => {
    return this.nameSignal().toUpperCase();
  });

  // getHeroDescription() {
  //   return `${this.nameSignal()} - ${this.ageSignal()}`;
  // }

  changeHero() {
    this.nameSignal.set('Spiderman');
    this.ageSignal.set(22);
  }

  resetForm() {
    this.nameSignal.update((current) => (current = 'Iron Man'));
    this.nameSignal.set('Iron Man');
    this.ageSignal.set(45);
  }

  changeAgeTo(value: number) {
    this.ageSignal.set(value);
  }
}
