import { FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from './../../service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ajouter-categorie',
  templateUrl: './ajouter-categorie.component.html',
  styleUrls: ['./ajouter-categorie.component.css']
})
export class AjouterCategorieComponent implements OnInit {
categorieForm:FormGroup;
  constructor(private _snackBar: MatSnackBar,private formationService:ServiceService,private router:Router) { }

  ngOnInit(): void {
    this.categorieForm=new FormGroup({
      'nomCategorie':new FormControl('')});
  }
onSubmit()
{
  if(this.categorieForm.valid)
  {
    console.log(this.categorieForm.value);
    this.formationService.createCategorie(this.categorieForm.value).subscribe(
      (res)=>{
        this.categorieForm.reset();
        this.router.navigate(['/categorie']); 
        this.SuccessSnackBar('Categorie ajouter');
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
