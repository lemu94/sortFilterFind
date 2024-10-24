# SortFilterFind

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Description

Cette librairie sert a effectuer les operations  : filter / find / sort sur les Array

## Installation

npm i sortfilterfind 

## Example Usage in Angular

```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SortFilterFind } from 'sort-filter-find';

interface Person {
  nom: string;
  age: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appTest';
  liste_personne: Array<Person> = [
    { nom: 'lemuel', age: 14 },
    { nom: 'ange', age: 15 }
  ];

  constructor() {
    const result = new SortFilterFind(this.liste_personne, 'ASC', 'age', 15)
      .sort()
      .filter();
  }
}


