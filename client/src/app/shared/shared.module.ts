import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule} from 'ngx-bootstrap/pagination';
import { CarouselModule} from 'ngx-bootstrap/carousel';

import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { BasketSummaryComponent } from './components/basket-summary/basket-summary.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { StepperComponent } from './components/stepper/stepper.component';
import { TextInputComponent } from './components/text-input/text-input.component';

@NgModule({
  declarations: [PagingHeaderComponent, 
                 PagerComponent, 
                 OrderTotalsComponent, 
                 BasketSummaryComponent, 
                 StepperComponent, TextInputComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    CdkStepperModule,
    FormsModule,
    RouterModule
  ],
  exports: [PaginationModule, 
            PagingHeaderComponent, 
            PagerComponent, 
            CarouselModule,
            OrderTotalsComponent,
            BasketSummaryComponent, 
            CdkStepperModule,
            StepperComponent,
            TextInputComponent,
            ReactiveFormsModule,
            FormsModule]
})
export class SharedModule { }
