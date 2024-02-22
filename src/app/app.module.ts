import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapSamplesComponent } from './_components/bootstrap-samples/bootstrap-samples.component';
import { MobileHeaderComponent } from './mobile-view/_components/mobile-header/mobile-header.component';
import { LoginComponent } from './_components/login/login.component';
import { DesktopHeaderComponent } from './desktop-view/_components/desktop-header/desktop-header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { CreateAccountComponent } from './_components/create-account/create-account.component';
import { MatIconModule } from '@angular/material/icon';
import { EditModalComponent } from './_components/edit-modal/edit-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DevicesComponent } from './_components/dashboard/devices/devices.component';
import { VehiclesComponent } from './_components/dashboard/vehicles/vehicles.component';
import { GroupsComponent } from './_components/dashboard/groups/groups.component';
import { AboutComponent } from './_components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapSamplesComponent,
    MobileHeaderComponent,
    LoginComponent,
    DesktopHeaderComponent,
    FooterComponent,
    DashboardComponent,
    CreateAccountComponent,
    EditModalComponent,
    DevicesComponent,
    VehiclesComponent,
    GroupsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
