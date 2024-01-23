import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileViewComponent } from './mobile-view/mobile-view.component';
import { DesktopViewComponent } from './desktop-view/desktop-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapSamplesComponent } from './_components/bootstrap-samples/bootstrap-samples.component';
import { MobileHeaderComponent } from './mobile-view/_components/mobile-header/mobile-header.component';
import { MobileLoginComponent } from './mobile-view/mobile-login/mobile-login.component';
import { LoginComponent } from './_components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileViewComponent,
    DesktopViewComponent,
    BootstrapSamplesComponent,
    MobileHeaderComponent,
    MobileLoginComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
