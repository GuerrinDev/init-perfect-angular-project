import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDetailComponent } from './client-detail.component';
import { ClientDetailRoutingModule } from './client-detail-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { ClientInfoModule } from '@clients-ui/client-info/client-info.module';

@NgModule({
  declarations: [ClientDetailComponent],
  imports: [CommonModule, ClientDetailRoutingModule, SharedModule, ClientInfoModule],
})
export class ClientDetailModule {}
