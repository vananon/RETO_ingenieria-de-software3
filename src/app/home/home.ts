import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-home',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  form = new FormGroup({
    busqueda: new FormControl(''),
  });

  categorias = [
    { nombre: 'Música', total: '12 eventos' },
    { nombre: 'Teatro', total: '8 eventos' },
    { nombre: 'Tecnología', total: '6 eventos' },
    { nombre: 'Deportes', total: '9 eventos' },
    { nombre: 'Gastronomía', total: '5 eventos' },
  ];

  eventos = [
    {
      id: 1,
      categoria: 'Música',
      fecha: 'SÁB 14 DIC · 20:00',
      nombre: 'Vivo x el Rock',
      lugar: 'Explanada Monumental',
      precio: 'S/ 45',
    },
    {
      id: 2,
      categoria: 'Gastronomía',
      fecha: 'VIE 20 DIC · 19:30',
      nombre: 'Mistura',
      lugar: 'Costa Verde',
      precio: 'S/ 60',
    },
    {
      id: 3,
      categoria: 'Tecnología',
      fecha: 'SÁB 11 ENE · 21:00',
      nombre: 'Peru Game Show',
      lugar: 'Centro de Convenciones de Lima',
      precio: 'S/ 35',
    },
  ];

  pasos = [
    {
      numero: 1,
      titulo: 'Elige tu evento',
      texto: 'Busca por categoría, artista o lugar y revisa fecha, precio y ubicación.',
    },
    {
      numero: 2,
      titulo: 'Compra tus entradas',
      texto: 'Selecciona el tipo y la cantidad, y paga de forma segura.',
    },
    {
      numero: 3,
      titulo: 'Recibe tu código QR',
      texto: 'Te enviamos la entrada a tu correo para mostrarla en el ingreso.',
    },
  ];

  enlacesEventos = ['Música', 'Teatro', 'Tecnología', 'Deportes', 'Gastronomía'];

  enlacesOrganizadores = [
    { texto: 'Crear cuenta de organizador', ruta: '/registro' },
    { texto: 'Publicar un evento', ruta: '/organizador' },
    { texto: 'Panel del organizador', ruta: '/organizador' },
  ];

  enlacesAyuda = [
    'Centro de ayuda',
    'Términos y condiciones',
    'Política de privacidad',
    'Libro de reclamaciones',
  ];
}
