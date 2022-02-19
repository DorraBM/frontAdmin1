import { ServiceService } from '../../service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
categorie:any
  constructor(private _snackBar: MatSnackBar,private formationService:ServiceService,private router:Router) { }

  ngOnInit(): void {
    this.formationService.getCategories().subscribe(
      (res)=>{
        this.categorie=res.data;
      }
    )
  }
  Supprimer(id:number)
  {
    this.formationService.deleteCategorie(id).subscribe(
      (res)=>{ 
             this.categorie=this.categorie.filter((elet:any)=>elet.idCategorie!=id);
             console.log("Categorie deleted");
             this.SuccessSnackBar('Categorie est supprimer')
           });
  }
  modifier(link:any,id:number)
  {
    this.router.navigate([link+ '/' + id]); 
  }
  SuccessSnackBar(message: string) {
    this._snackBar.open(message, 'SUCCEEDED', { duration: 1000});
  }
  ErrorSnackBar(message: string) {
    this._snackBar.open(message, 'ERROR', { duration: 2000 });
  }

}
