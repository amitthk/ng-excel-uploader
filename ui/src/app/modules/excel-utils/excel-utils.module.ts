import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/utility/auth.guard';
import { ExcelUtilsRoutes } from './excel-utils-routes';
import { ExcelUploaderComponent } from './excel-uploader/excel-uploader.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    RouterModule.forChild(ExcelUtilsRoutes)
  ],
  declarations: [
    ExcelUploaderComponent,
    ModalComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class ExcelUtilsModule { }
