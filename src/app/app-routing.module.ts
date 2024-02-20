import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapSamplesComponent } from './_components/bootstrap-samples/bootstrap-samples.component';
import { LoginComponent } from './_components/login/login.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { DevicesComponent } from './_components/dashboard/devices/devices.component';
import { VehiclesComponent } from './_components/dashboard/vehicles/vehicles.component';
import { GroupsComponent } from './_components/dashboard/groups/groups.component';
import { CreateAccountComponent } from './_components/create-account/create-account.component';

const routes: Routes = [
  { path: 'bootstrap-samples', component: BootstrapSamplesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'devices', component: DevicesComponent },
      { path: 'vehicles', component: VehiclesComponent },
      { path: 'groups', component: GroupsComponent },
      { path: '', redirectTo: 'devices', pathMatch: 'full' }, // Redirect to /dashboard/devices by default
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
