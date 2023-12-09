import { Routes } from '@angular/router';
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {StakeholdersComponent} from "./modules/stakeholders/stakeholders.component";
import {LoginComponent} from "./modules/login/login.component";
import {StakeholderPageComponent} from "./modules/stakeholder-page/stakeholder-page.component";
import {DeliveryComponent} from "./modules/delivery/delivery.component";
import {ItemsComponent} from "./modules/items/items.component";

export const routes: Routes = [
  {path: '', component : DashboardComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'stakeholders', component : StakeholdersComponent},
  {path: 'stakeholders/:id', component : StakeholderPageComponent},
  {path: 'delivery', component : DeliveryComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'login', component : LoginComponent},
];
