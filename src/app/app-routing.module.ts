import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// Imports de la 1era version
// import { ContenidoEnComponent } from './components/contenido-en/contenido-en.component';
// import { ContenidoEsComponent } from './components/contenido-es/contenido-es.component';
// import { ContenidoFrComponent } from './components/contenido-fr/contenido-fr.component';
// Imports de la segunda version
import { ContenidoComponent } from './components/contenido/contenido.component';

const routes: Routes = [
  // ruta raiz
  { path: '', pathMatch: 'full', redirectTo: 'lang/es' },

  // 1era version de resolucion
  // { path: 'es', component: ContenidoEsComponent },
  // { path: 'en', component: ContenidoEnComponent },
  // { path: 'fr', component: ContenidoFrComponent },
  
  // 2da version
  { path: 'lang/:language', component: ContenidoComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'lang/es' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
