import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment.prod';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RepositoryEffects } from './store/effects/repository.effects';
import { appReducers } from './store/reducers/app.reducers';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { RepositoryService } from './shared/services/repository.service';
import { RepositoryModule } from './repository/repository.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([RepositoryEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    RepositoryModule
  ],
  providers: [RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
