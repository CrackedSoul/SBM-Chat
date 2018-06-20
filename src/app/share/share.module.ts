import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroAntdModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroAntdModule
  ],
  declarations: []
})
export class ShareModule { }
