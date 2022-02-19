import { MatSnackBar } from '@angular/material/snack-bar';

import { ServiceService } from '../../service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private formationService:ServiceService,private router:Router) { }
  etudiantData:any;

  ngOnInit(): void {
    this.formationService.getEtudiant().subscribe(
      (res)=>{
        this.etudiantData=res.data;        
      }
    );
  }
  Supprimer(id:number)
  {
    this.formationService.deleteEtudiant(id).subscribe(
      (res)=>{ 
             this.etudiantData=this.etudiantData.filter((elet:any)=>elet.idNosEtudiant!=id);
             console.log("etudiant deleted");
             this.SuccessSnackBar('Etudiant supprimé')
           });
  }
  Modifier(link:any,id:number)
  {
    this.router.navigate([link + '/' + id]); 
  }
  SuccessSnackBar(message: string) {
    this._snackBar.open(message, 'SUCCEEDED', { duration: 1000});
  }
  ErrorSnackBar(message: string) {
    this._snackBar.open(message, 'ERROR', { duration: 2000 });
  }

}
