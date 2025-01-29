import { Component, inject, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { OrdenesService } from '../../services/ordenes.service';
import { MatDialog } from '@angular/material/dialog';


const ANGULAR_MATERIAL = [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule, MatDatepickerModule,];


@Component({
  selector: 'app-makeorden',
  standalone: true,
  imports: [ReactiveFormsModule, ANGULAR_MATERIAL],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
  templateUrl: './makeorden.component.html',
  styleUrl: './makeorden.component.scss'
})
export class MakeordenComponent implements OnInit {

  dialog = inject(MatDialog);

  private readonly _fb = inject(FormBuilder)
  private readonly _ordenSvs = inject(OrdenesService)


  ngOnInit(): void {
    this._buidlForm();
  }


  ordenForm!: FormGroup;

  private _buidlForm(): void {
    this.ordenForm = this._fb.nonNullable.group({
      numero: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaAtencion: ['', Validators.required],
    })
  }


  async altaOrden() {
    const orden = this.ordenForm.value;
    this._ordenSvs.addOrden(orden);
    this.closeModal();
  }

  closeModal(): void {
    this.dialog.closeAll();
  }


}
