import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import {ProjectService} from "./core/services/project.service";
import {AuthService} from "./core/services/auth.service";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), ProjectService, AuthService]
};
