import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-organizador-layout',
  imports: [RouterOutlet, RouterLink, MatToolbarModule],
  templateUrl: './organizador-layout.html',
  styleUrl: './organizador-layout.css',
})
export class OrganizadorLayout {}
