import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './angular-material.module';

@NgModule({
    declarations: [
    ],
    imports: [CommonModule, MaterialModule, ReactiveFormsModule],
    exports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule
    ],
})
export class SharedModule {}
