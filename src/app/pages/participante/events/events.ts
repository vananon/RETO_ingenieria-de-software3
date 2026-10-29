import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-events',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  form = new FormGroup({
    busqueda: new FormControl(''),
    categoria: new FormControl('Todos'),
  });

  categorias = ['Todos', 'Música', 'Teatro', 'Tecnología', 'Deportes', 'Gastronomía'];

  eventos = [
    {
      id: 1,
      categoria: 'Música',
      fecha: 'SÁB 14 DIC · 20:00',
      nombre: 'Neon Nights Festival',
      lugar: 'Arena Centro',
      precio: 'S/ 45',
    },
    {
      id: 2,
      categoria: 'Teatro',
      fecha: 'VIE 20 DIC · 19:30',
      nombre: 'Symphony Under Stars',
      lugar: 'Teatro Nacional',
      precio: 'S/ 60',
    },
    {
      id: 3,
      categoria: 'Tecnología',
      fecha: 'SÁB 11 ENE · 21:00',
      nombre: 'Tech & Beats Live',
      lugar: 'Club Aurora',
      precio: 'S/ 35',
    },
  ];
}
