import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DescriptionComponent} from './pages/description/description.component';
import {ActualiteComponent} from './pages/actualite/actualite.component';
import {InscriptionComponent} from './pages/user/inscription/inscription.component';
import {ConnexionComponent} from './pages/user/connexion/connexion.component';
import {UserComponent} from './pages/user/user.component';
import {PageErrorComponent} from './page-error/page-error.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'description', component: DescriptionComponent},
  {path: 'actu', component: ActualiteComponent},
  {path: 'compte', component: InscriptionComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'inscription', component : InscriptionComponent},
  {path: 'profil', component: UserComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageErrorComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
