import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { BootstrapSamplesComponent } from './_components/bootstrap-samples/bootstrap-samples.component'
import { MobileHeaderComponent } from './mobile-view/_components/mobile-header/mobile-header.component'
import { MobileLoginComponent } from './mobile-view/_components/mobile-login/mobile-login.component'
import { LoginComponent } from './_components/login/login.component'
import { DesktopHeaderComponent } from './desktop-view/_components/desktop-header/desktop-header.component'
import { DesktopLoginComponent } from './desktop-view/_components/desktop-login/desktop-login.component';
import { DesktopFooterComponent } from './desktop-view/_components/desktop-footer/desktop-footer.component';
import { MobileFooterComponent } from './mobile-view/_components/mobile-footer/mobile-footer.component'

@NgModule({
  declarations: [
    AppComponent,
    BootstrapSamplesComponent,
    MobileHeaderComponent,
    MobileLoginComponent,
    LoginComponent,
    DesktopHeaderComponent,
    DesktopLoginComponent,
    DesktopFooterComponent,
    MobileFooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
