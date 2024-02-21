import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapSamplesComponent } from './_components/bootstrap-samples/bootstrap-samples.component';
import { LoginComponent } from './_components/login/login.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { CreateAccountComponent } from './_components/create-account/create-account.component';
import { AboutComponent } from './_components/about/about.component';

const routes: Routes = [
  { path: 'bootstrap-samples', component: BootstrapSamplesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
