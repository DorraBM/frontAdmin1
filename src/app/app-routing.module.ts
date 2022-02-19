import { ModifierEtudiantComponent } from './Etudiants/modifier-etudiant/modifier-etudiant.component';
import { AjouterEtudiantComponent } from './Etudiants/ajouter-etudiant/ajouter-etudiant.component';
import { ModifierCategorieComponent } from './categories/modifier-categorie/modifier-categorie.component';
import { AjouterCategorieComponent } from './categories/ajouter-categorie/ajouter-categorie.component';

import { ModifierBlogComponent } from './Blogs/modifier-blog/modifier-blog.component';
import { AjouterBlogComponent } from './Blogs/ajouter-blog/ajouter-blog.component';
import { DetailBlogComponent } from './Blogs/detail-blog/detail-blog.component';
import { DemandeEtudiantComponent } from './Etudiants/demande-etudiant/demande-etudiant.component';
import { DemandeFormateurComponent } from './demande-formateur/demande-formateur.component';
import { InstructorComponent } from './instructor/instructor.component';
import { ModifierFormationComponent } from './Formations/modifier-formation/modifier-formation.component';
import { AjouterFormationComponent } from './Formations/ajouter-formation/ajouter-formation.component';
import { EtudiantComponent } from './Etudiants/etudiant/etudiant.component';
import { BlogComponent } from './Blogs/blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './Formations/detail/detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './Formations/formation/formation.component';
import { MenuComponent } from './menu/menu.component';
import { CategorieComponent } from './categories/categorie/categorie.component';

const routes: Routes = [
  { path: 'formation', component: FormationComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'categorie', component: CategorieComponent },
  { path: 'ajouter-categorie', component: AjouterCategorieComponent },
  {path:'modifier-categorie/:id',component:ModifierCategorieComponent},
  { path: 'blog', component: BlogComponent },
  { path: 'etudiant', component: EtudiantComponent },
  {path:'ajouter-etudiant',component:AjouterEtudiantComponent},
  {path:'modifier-etudiant/:id',component:ModifierEtudiantComponent},
  { path: 'demandeEtudiant', component: DemandeEtudiantComponent },
  { path: 'formation', component: MenuComponent },
  { path: 'ajouter-formation', component: AjouterFormationComponent },
  { path: 'ajouter-blog', component: AjouterBlogComponent },
  { path: 'modifier-formation/:id', component: ModifierFormationComponent },
  { path: 'modifier-blog/:id', component: ModifierBlogComponent },
  { path: "detail-blog/:id", component: DetailBlogComponent },
  { path: 'formateur', component: InstructorComponent },
  { path: 'demandeFormateur', component: DemandeFormateurComponent },
  { path: '', redirectTo: 'formation', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
