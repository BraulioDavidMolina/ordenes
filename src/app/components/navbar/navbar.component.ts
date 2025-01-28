import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';


const ANGULAR_MATERIAL = [MatIconModule, MatButtonModule, MatToolbarModule, MatMenuModule];

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ANGULAR_MATERIAL, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
