import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActualiteComponent } from './pages/actualite/actualite.component';
import { HeaderComponent } from './pages/header/header.component';
import { UserComponent } from './pages/user/user.component';
import { InscriptionComponent } from './pages/user/inscription/inscription.component';
import { ConnexionComponent } from './pages/user/connexion/connexion.component';
import { HomeComponent } from './pages/home/home.component';
import { DescriptionComponent } from './pages/description/description.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ActualiteComponent,
    HeaderComponent,
    UserComponent,
    InscriptionComponent,
    ConnexionComponent,
    HomeComponent,
    DescriptionComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
