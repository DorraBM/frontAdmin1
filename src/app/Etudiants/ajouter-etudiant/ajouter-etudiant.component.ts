import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from './../../service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private formationService:ServiceService,private router:Router) { }
  etudiantForm:FormGroup;
  categorieData:any;
  ngOnInit(): void {
    this.formationService.getCategories().subscribe(
      (res)=>{
        this.categorieData=res.data;
      }
    );

    this.etudiantForm=new FormGroup({

      'nomNosEtudiant':new FormControl(''),
      'prenomNosEtudiant':new FormControl(''),
      'numeroTelNosEtudiant':new FormControl(''),
      'emailNosEtudiant':new FormControl(''),
      'nomCategorie':new FormControl(''),
      'accepter':new FormControl('')
    });
    
  }
onSubmit()
{
  if(this.etudiantForm.valid)
  {
    this.formationService.createEtudiant(this.etudiantForm.value).subscribe(
      (res)=>{
        this.etudiantForm.reset();
        this.router.navigate(['/etudiant']);
        this.SuccessSnackBar('Etudiant est ajouté')
      }
    );
  }
}
SuccessSnackBar(message: string) {
  this._snackBar.open(message, 'SUCCEEDED', { duration: 1000});
}
ErrorSnackBar(message: string) {
  this._snackBar.open(message, 'ERROR', { duration: 2000 });
}

}
