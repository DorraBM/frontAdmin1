import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from './../../service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-etudiant',
  templateUrl: './modifier-etudiant.component.html',
  styleUrls: ['./modifier-etudiant.component.css']
})
export class ModifierEtudiantComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private formationService:ServiceService,private activatedRoute:ActivatedRoute,private fb:FormBuilder,private router:Router) { }
 etudiantForm:FormGroup;
 etudiantData:any;
 id:number;
 categorieData;
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.formationService.getCategories().subscribe(
      (res)=>{
        this.categorieData=res.data;
        
      }
    );

    this.formationService.getSingleEtudiant(this.id).subscribe(
      (res)=>{
        this.etudiantData=res.data;
        this.etudiantForm.patchValue({
          nomNosEtudiant:res.data[0].nomNosEtudiant,
          prenomNosEtudiant:res.data[0].prenomNosEtudiant,
          numeroTelNosEtudiant:res.data[0].numeroTelNosEtudiant,
          emailNosEtudiant:res.data[0].emailNosEtudiant,
          nomCategorie:res.data[0].nomCategorie
        });

      }
    );
    this.etudiantForm=this.fb.group( {
      nomNosEtudiant:[''],
      prenomNosEtudiant:[''],
      numeroTelNosEtudiant:[''],
      emailNosEtudiant:[''],
      nomCategorie:[''],
      accepter:['']

    })

  }
  onSubmit()
  {this.formationService.updateEtudiant(this.id,this.etudiantForm.value).subscribe(
    (res)=>{
      this.router.navigate(['/etudiant']);
      this.SuccessSnackBar('Etudiant est modifié')

    }
  )

  }
  SuccessSnackBar(message: string) {
    this._snackBar.open(message, 'SUCCEEDED', { duration: 1000});
  }
  ErrorSnackBar(message: string) {
    this._snackBar.open(message, 'ERROR', { duration: 2000 });
  }

}
