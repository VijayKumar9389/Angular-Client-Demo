import { Routes } from '@angular/router';
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {StakeholdersComponent} from "./modules/stakeholders/stakeholders.component";
import {LoginComponent} from "./modules/login/login.component";
import {StakeholderPageComponent} from "./modules/stakeholder-page/stakeholder-page.component";
import {DeliveryComponent} from "./modules/delivery/delivery.component";
import {DeliveryPageComponent} from "./modules/delivery-page/delivery-page.component";
import {ProjectsComponent} from "./modules/projects/projects.component";
import {UsersComponent} from "./modules/users/users.component";
import {LogsComponent} from "./modules/logs/logs.component";
import {InventoryComponent} from "./modules/inventory/inventory.component";

export const routes: Routes = [
  {path: '', component : DashboardComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'stakeholders', component : StakeholdersComponent},
  {path: 'stakeholders/:id', component : StakeholderPageComponent},
  {path: 'delivery', component : DeliveryComponent},
  {path: 'delivery/:id', component : DeliveryPageComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'login', component : LoginComponent},
  {path: 'projects', component : ProjectsComponent},
  {path: 'users', component : UsersComponent},
  {path: 'logs', component : LogsComponent}
];
