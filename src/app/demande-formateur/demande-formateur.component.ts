import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demande-formateur',
  templateUrl: './demande-formateur.component.html',
  styleUrls: ['./demande-formateur.component.css']
})
export class DemandeFormateurComponent implements OnInit {
  instructor:any
  constructor(private _snackBar: MatSnackBar,private formationService:ServiceService) { }

  ngOnInit(): void {
    this.formationService.getAllFormateurData().subscribe(
      (res)=>{
        this.instructor=res.data;
      }
    );
  }
  Supprimer(id:number)
{
  this.formationService.deleteFormateur(id).subscribe(
    (res)=>{ 
           this.instructor=this.instructor.filter((elet:any)=>elet.idFormateur!=id);
           console.log("Instructor deleted");
           this.SuccessSnackBar('Demande est supprimer')
         });
}
Ajouter(id:number)
{

}
SuccessSnackBar(message: string) {
  this._snackBar.open(message, 'SUCCEEDED', { duration: 1000});
}
ErrorSnackBar(message: string) {
  this._snackBar.open(message, 'ERROR', { duration: 2000 });
}

}
