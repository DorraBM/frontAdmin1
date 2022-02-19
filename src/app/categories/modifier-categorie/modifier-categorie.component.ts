import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService } from './../../service.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-categorie',
  templateUrl: './modifier-categorie.component.html',
  styleUrls: ['./modifier-categorie.component.css']
})
export class ModifierCategorieComponent implements OnInit {

  categorieForm:FormGroup;
  categorieData:any;
  id:number;

  constructor(private _snackBar: MatSnackBar,private fb:FormBuilder, 
    private formationService:ServiceService,
    private router:Router,
    private activatedRoute:ActivatedRoute) 
    { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.formationService.getSingleCategorie(this.id).subscribe(
      (res)=>{
        this.categorieForm.patchValue({
          nomCategorie:res.data[0].nomCategorie
        });
      }
    )
  this.categorieForm=this.fb.group({
    nomCategorie:['']
  });
  this.formationService.getCategories().subscribe(
    (res)=>{
      this.categorieData=res.data;
    }
  );
  }
onSubmit()
{
  if(this.categorieForm.valid)
  {
    console.log(this.categorieForm.value);
    this.formationService.updateCategorie(this.id,this.categorieForm.value).subscribe(
      (res)=>{
        this.categorieForm.reset();
        this.router.navigate(['/categorie']); 
        this.SuccessSnackBar('Categorie est modifier')
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