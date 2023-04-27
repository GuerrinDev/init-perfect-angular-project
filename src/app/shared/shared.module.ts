import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamplePipe } from './pipes/sample.pipe';
import { ButtonModule } from '@ui/button/button.module';
import { InputModule } from '@ui/input/input.module';

@NgModule({
  declarations: [SamplePipe],
  imports: [CommonModule],
  exports: [ButtonModule, InputModule],
})
export class SharedModule {}
