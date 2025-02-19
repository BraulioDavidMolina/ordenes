import { Component, Inject, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { OrdenesService } from '../../services/ordenes.service';
import { orden } from '../../interfaces/interfaces';
import { from } from 'rxjs';
import { ConfirmationComponent } from '../../components/confirmation/confirmation.component';





const ANGULAR_MATERIAL = [MatCardModule, MatChipsModule, MatInputModule, MatFormFieldModule, FormsModule,
  MatButtonModule, MatDatepickerModule,
];

@Component({
  selector: 'app-vieworden',
  standalone: true,
  imports: [ReactiveFormsModule, ANGULAR_MATERIAL],
  providers: [provideNativeDateAdapter()],
  templateUrl: './vieworden.component.html',
  styleUrl: './vieworden.component.scss'
})
export class ViewordenComponent implements OnInit {

  dialog = inject(MatDialog);

  private readonly _ordenSvs = inject(OrdenesService)
  private readonly _fb = inject(FormBuilder)

  id: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: string }) {
    this.id = data.id;
  }

  ordenForm!: FormGroup;
  orden = {} as orden;


  ngOnInit(): void {
    this.ordenForm = this._fb.nonNullable.group({
      numero: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaAtencion: ['', Validators.required],
    });

    from(this._ordenSvs.getOrdenById(this.data.id)).subscribe({
      next: (orden) => {
        this.orden = orden;
        this.setFormValues(orden);
      }
    });
  }


  private _buidlForm(): void {
    this.ordenForm = this._fb.nonNullable.group({
      numero: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaAtencion: ['', Validators.required],
    })
  }

  Update(id: string) {
    id = this.id;
    const updatedOrden = this.ordenForm.value;
    this._buidlForm
    this._ordenSvs.updateOrden(id, updatedOrden);
    this.closeModal();
  }


  deleteOrden(id: string) {
    id = this.id
    const confirmed = window.confirm('Are you sure you want to delete: ' + id)
    if (confirmed) {
      this._ordenSvs.deleteOrden(id);
      alert('Borrado');
      this.closeModal();
    }
  }



  private setFormValues(orden: orden): void {
    this.ordenForm.patchValue({
      numero: orden.numero,
      descripcion: orden.descripcion,
      fechaAtencion: orden.fechaAtencion,
    });
  }

  closeModal(): void {
    this.dialog.closeAll();
  }



}





