import { ProjetosComponent } from './Pages/projetos/projetos.component';
import { HabilidadesComponent } from './Pages/habilidades/habilidades.component';
import { ExperienciaComponent } from './Pages/experiencia/experiencia.component';
import { FormacaoComponent } from './Pages/formacao/formacao.component';
import { PrincipalComponent } from './Pages/principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'formacao', component: FormacaoComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'projetos', component: ProjetosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
