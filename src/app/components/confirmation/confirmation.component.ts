import { Component, inject, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { OrdenesService } from '../../services/ordenes.service';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { from } from 'rxjs';
import { ordenes } from '../../interfaces/interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


const Angular_Material = [MatCardModule, MatButton];

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [Angular_Material],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss'
})
export class ConfirmationComponent implements OnInit {

  private readonly _ordenSvs = inject(OrdenesService);
  private readonly _fb = inject(FormBuilder);

  idData: string;
  dialog = inject(MatDialog);
  orden = {} as ordenes;
  ordenForm!: FormGroup;


  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: string }) {
    this.idData = data.id;
  }


  ngOnInit(): void {
    this.ordenForm = this._fb.nonNullable.group({
      numero: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaAtencion: ['', Validators.required],
    });


    from(this._ordenSvs.getOrdenById(this.data.id)).subscribe({
      next: (orden) => {
        this.orden = orden;
      }
    });



  }


  delete(id: string) {
    id = this.idData
    console.log('id:', id)
    //this._ordenSvs.deleteOrden(id);
  }
  cancel() {
    this.closeModal();
  }

  closeModal(): void {
    this.dialog.closeAll();
  }

}
