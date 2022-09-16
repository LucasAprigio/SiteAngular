import { RouterModule } from '@angular/router';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { FormacaoComponent } from './formacao/formacao.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { PrincipalComponent } from './principal/principal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
   PrincipalComponent,
   ExperienciaComponent,
   FormacaoComponent,
   ProjetosComponent,
   HabilidadesComponent
  ]
})
export class PagesModule { }
