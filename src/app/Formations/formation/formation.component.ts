import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService } from '../../service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  constructor( private _snackBar: MatSnackBar,private router: Router,private formationService:ServiceService) { }
  formationData:any;
  instructorData:any;
  formationForm:FormGroup;
  commentData:any;
  i:number=0;
  ngOnInit(): void {
    /*get all formations data*/ 
    this.formationService.getAllFormationData().subscribe(
      (res)=>{
        this.formationData=res.data;
        this.formationService.getAllInstructorData().subscribe(
          (res)=>
          {
            this.instructorData=res.data;
            console.log(this.instructorData,"ins");
          });

          
        });

    this.formationForm=new FormGroup({
      'titreFormation':new FormControl(''),
      'prixFormation':new FormControl(''),
      'dureeHeure':new FormControl(''),
      'dureeSemaine':new FormControl(''),
      'idInstructor':new FormControl(''),
      'categorieFormation':new FormControl(''),
      'description':new FormControl(''),
      'program':new FormControl(''),
      'nbEtoiles':new FormControl(''),
      'image':new FormControl(''),
      'populaire':new FormControl(''),
      'paiementParMois':new FormControl(''),
    });
    this.formationService.getComment().subscribe(
      (res)=>{
        this.commentData=res.data;
        console.log(this.commentData,"comment");
      }
    );
    
    }
    Modifier(link:any,id:number)
    {
      this.router.navigate([link + '/' + id]); 
    }
    Supprimer(id:number)
    { this.formationService.deleteFormation(id).subscribe(
      (res)=>{ 
             this.formationData=this.formationData.filter((elet:any)=>elet.idFormation!=id);
             console.log("formation deleted");
             this.SuccessSnackBar('Formation est supprimé')
           });
    }

    
    Detail(link:any,id:number)
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
