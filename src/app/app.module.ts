import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { getFromLocal } from './core/services/functions.service';
import { GeneralsService } from './core/services/generals.service';
import { HelpersService } from './core/services/helpers.service';
import { NotificationService } from './core/services/notification.service';
import { AuthGuardService } from './modules/auth/services/auth-guard.service';
import { AuthService } from './modules/auth/services/auth.service';
import { SharedModule } from './modules/shared/shared.module';
import { AppComponent } from './views/app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule, SharedModule, HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return getFromLocal(environment.COOKIE_TOKEN)
        },
        authScheme: "Bearer",
        allowedDomains: environment.allowedDomains,//Rutas a las que siempre se enviará el token
        disallowedRoutes: environment.disallowedRoutes,//Rutas a las que no se debe enviar el token

      },

    }),
  ],
  exports: [SharedModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AuthService, AuthGuardService, HelpersService, NotificationService, GeneralsService,],
  bootstrap: [AppComponent],
})
export class AppModule { }
