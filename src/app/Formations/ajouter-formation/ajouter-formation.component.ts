import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../service.service';
@Component({
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.component.html',
  styleUrls: ['./ajouter-formation.component.css']
})
export class AjouterFormationComponent implements OnInit {
  formationForm:FormGroup;
  instructorData:any;
  categorieData:any;
  constructor(private _snackBar: MatSnackBar,private router: Router,private formationService:ServiceService) { }

  ngOnInit(): void {
    this.formationForm=new FormGroup({
      'titreFormation':new FormControl(''),
      'prixFormation':new FormControl(''),
      'dureeHeure':new FormControl(''),
      'dureeSemaine':new FormControl(''),
      'idInstructor':new FormControl(''),
      'categorieFormation':new FormControl(''),
      'nbParticipant':new FormControl(''),
      'description':new FormControl(''),
      'program':new FormControl(''),
      'nbEtoiles':new FormControl(''),
      'image':new FormControl(''),
      'populaire':new FormControl(''),
      'paiementParMois':new FormControl(''),
    });
    this.formationService.getAllInstructorData().subscribe(
      (res)=>{
        this.instructorData=res.data;
      }
    );
    this.formationService.getCategories().subscribe(
      (res)=>{
        this.categorieData=res.data
      }
    )


  }
  onSubmit()
  { if(this.formationForm.valid)
    {
      console.log(this.formationForm.value);
      this.formationService.createFormation(this.formationForm.value).subscribe(
        (res)=>{
          this.formationForm.reset();
          this.router.navigate(['/formation']); 
          this.SuccessSnackBar('Formation est ajouté')
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
