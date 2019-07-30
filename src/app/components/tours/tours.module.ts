import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourAddComponent } from './tour-add/tour-add.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';
import { TourUpdateComponent } from './tour-update/tour-update.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TourAddComponent, TourDetailComponent, TourUpdateComponent]
})
export class ToursModule { }