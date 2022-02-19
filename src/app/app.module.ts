import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationComponent } from './Formations/formation/formation.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './Blogs/blog/blog.component';
import { MenuComponent } from './menu/menu.component';
import { EtudiantComponent } from './Etudiants/etudiant/etudiant.component';
import { DetailComponent } from './Formations/detail/detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AjouterFormationComponent } from './Formations/ajouter-formation/ajouter-formation.component';
import { ModifierFormationComponent } from './Formations/modifier-formation/modifier-formation.component';
import { InstructorComponent } from './instructor/instructor.component';
import { DemandeFormateurComponent } from './demande-formateur/demande-formateur.component';
import { DemandeEtudiantComponent } from './Etudiants/demande-etudiant/demande-etudiant.component';
import { CategorieComponent } from './categories/categorie/categorie.component';
import { DetailBlogComponent } from './Blogs/detail-blog/detail-blog.component';
import { ModifierBlogComponent } from './Blogs/modifier-blog/modifier-blog.component';
import { AjouterBlogComponent } from './Blogs/ajouter-blog/ajouter-blog.component';
import { AjouterCategorieComponent } from './categories/ajouter-categorie/ajouter-categorie.component';
import { ModifierCategorieComponent } from './categories/modifier-categorie/modifier-categorie.component';
import { ModifierEtudiantComponent } from './Etudiants/modifier-etudiant/modifier-etudiant.component';
import { AjouterEtudiantComponent } from './Etudiants/ajouter-etudiant/ajouter-etudiant.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    ContactComponent,
    BlogComponent,
    MenuComponent,
    EtudiantComponent,
    DetailComponent,
    AjouterFormationComponent,
    ModifierFormationComponent,
    InstructorComponent,
    DemandeFormateurComponent,
    DemandeEtudiantComponent,
    CategorieComponent,
    DetailBlogComponent,
    ModifierBlogComponent,
    AjouterBlogComponent,
    AjouterCategorieComponent,
    ModifierCategorieComponent,
    ModifierEtudiantComponent,
    AjouterEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
