import { MatTableModule, MatToolbarModule, MatDialogModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ MatTableModule, MatToolbarModule],
  exports: [ MatTableModule, MatToolbarModule],
})
export class MyOwnCustomMaterialModule { }
