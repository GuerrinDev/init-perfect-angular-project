import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientInfoComponent } from './client-info.component';

@NgModule({
  declarations: [ClientInfoComponent],
  imports: [CommonModule],
  exports: [ClientInfoComponent],
})
export class ClientInfoModule {}
