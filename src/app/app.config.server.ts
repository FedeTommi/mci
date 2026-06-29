import { ApplicationConfig, importProvidersFrom, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { MaterialDesignIconsModule } from './shared/icons/material-design-icons.module';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    importProvidersFrom(
      MaterialDesignIconsModule
    )
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
