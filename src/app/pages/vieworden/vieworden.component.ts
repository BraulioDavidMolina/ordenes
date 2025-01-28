import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { MatChipsModule } from '@angular/material/chips';




const ANGULAR_MATERIAL = [MatCardModule, MatChipsModule,
];

@Component({
  selector: 'app-vieworden',
  standalone: true,
  imports: [ANGULAR_MATERIAL],
  templateUrl: './vieworden.component.html',
  styleUrl: './vieworden.component.scss'
})
export class ViewordenComponent {

}
