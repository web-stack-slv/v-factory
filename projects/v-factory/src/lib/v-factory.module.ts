import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VFactoryComponent } from './v-factory.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VFieldModule } from './directives/v-field/v-field.module';
import { VComponentsModule } from './components/v-component.module';
import { VFactoryService } from './services/v-factory.service';

@NgModule({
  declarations: [VFactoryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    VFieldModule,
    VComponentsModule
  ],
  providers: [VFactoryService],
  exports: [VFactoryComponent]
})
export class VFactoryModule {}
