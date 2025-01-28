import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';


const ANGULAR_MATERIAL = [MatProgressSpinnerModule, MatCardModule, MatSliderModule, FormsModule, MatRadioModule];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ANGULAR_MATERIAL],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  mode: ProgressSpinnerMode = 'determinate';
  value = 100;


}
