import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from '../../service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-modifier-formation',
  templateUrl: './modifier-formation.component.html',
  styleUrls: ['./modifier-formation.component.css']
})
export class ModifierFormationComponent implements OnInit {
  id: any;
  formationData:any;
  instructorData:any;
  formationForm:FormGroup;
  categorieData:any;
  constructor(private _snackBar: MatSnackBar,private router: Router,private fb:FormBuilder,private formationService:ServiceService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.formationService.getSingleFomationData(this.id).subscribe(
      (res)=>{
        this.formationData=res.data;
        console.log(this.formationData,"formation");
        this.formationForm.patchValue({
          idFormation:res.data[0].idFormation,
          titreFormation:res.data[0].titreFormation,
          prixFormation:res.data[0].prixFormation,
          dureeHeure:res.data[0].dureeHeure,
          dureeSemaine:res.data[0].dureeSemaine,
          description:res.data[0].description,
          program:res.data[0].program,
          paiementParMois:res.data[0].paiementParMois,
          image:res.data[0].image,
          populaire:res.data[0].populaire,
          nbEtoiles:res.data[0].nbEtoiles,
          nbParticipant:res.data[0].nbParticipant,
          idInstructor:res.data[0].idInstructor,
          categorieFormation:res.data[0].categorieFormation

        });
      }
    );
     //get all instructor data 
     this.formationService.getAllInstructorData().subscribe(
      (res)=>
      {
        this.instructorData=res.data; 
      });
      this.formationService.getCategories().subscribe(
        (res)=>{
          this.categorieData=res.data
        }
      );
      this.formationForm=this.fb.group({
        idFormation:[''],
      titreFormation:[''],
      prixFormation:[''],
      dureeHeure:[''],
      dureeSemaine:[''],
      description:[''],
      program:[''],
      paiementParMois:[0],
      image:[''],
      populaire:[0],
      nbEtoiles:[''],
      nbParticipant:[''],
      idInstructor:[''],
      categorieFormation:['']
      });
      
  
  }
  onSubmit()
  {
  this.formationService.updateFormation(this.id,this.formationForm.value).subscribe(
    (res)=>{this.router.navigate(['/formation']);
    this.SuccessSnackBar('Formation est modifé') 
 

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
