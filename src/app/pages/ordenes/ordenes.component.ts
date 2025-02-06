import { Component, inject, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { OrdenesService } from '../../services/ordenes.service';
import { orden } from '../../interfaces/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { MakeordenComponent } from '../makeorden/makeorden.component';
import { CommonModule } from '@angular/common';
import { ViewordenComponent } from '../vieworden/vieworden.component';
import { ConfirmationComponent } from '../../components/confirmation/confirmation.component';



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
      height: '500px',
      width: '600px',
    });
  }

  ordenes!: orden[];

  private readonly _ordenesSvc = inject(OrdenesService);

  ngOnInit(): void {
    this._ordenesSvc.getOrdenes().subscribe((data) => {
      this.ordenes = data;
    })
  }

  viewOrden(id: string) {
    //console.log('id: ', id)
    this.dialog.open(ViewordenComponent, {
      data: { id },
      height: '500px',
      width: '600px',
    });
  }


}
