import { Component, inject, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { OrdenesService } from '../../services/ordenes.service';
import { ordenes } from '../../interfaces/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { MakeordenComponent } from '../makeorden/makeorden.component';
import { CommonModule } from '@angular/common';



const ANGULAR_MATERIAL = [MatProgressBarModule, MatCardModule, MatChipsModule, MatIconModule, MatDividerModule,
  MatButtonModule, CommonModule
];



@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [ANGULAR_MATERIAL],
  templateUrl: './ordenes.component.html',
  styleUrl: './ordenes.component.scss'
})
export class OrdenesComponent implements OnInit {

  dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(MakeordenComponent, {
      data: {},
    });
  }

  ordenes!: ordenes[];

  private readonly _ordenesSvc = inject(OrdenesService);

  ngOnInit(): void {
    this._ordenesSvc.getOrdenes().subscribe((data) => {
      this.ordenes = data;
    })
  }


}
