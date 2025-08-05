import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GeneralModule } from '../../modules/general/general-module';

@Component({
  selector: 'app-alerts',
  imports: [MatDialogModule,GeneralModule],
  templateUrl: './alerts.html',
  styleUrl: './alerts.scss'
})
export class Alerts {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { titulo: string; mensaje: string },
    public dialogRef: MatDialogRef<Alerts>
  ) { }

}
