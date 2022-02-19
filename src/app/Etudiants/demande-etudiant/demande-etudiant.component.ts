import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ServiceService } from '../../service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-demande-etudiant',
  templateUrl: './demande-etudiant.component.html',
  styleUrls: ['./demande-etudiant.component.css']
})
export class DemandeEtudiantComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar, private fb: FormBuilder, private formationService: ServiceService, private router: Router) { }
  etudiant: any;
  etudiantData: any;
  etudiantForm: FormGroup;
  ngOnInit(): void {
    this.formationService.getInscription().subscribe(
      (res) => {
        this.etudiant = res.data;
      }
    );
    this.etudiantForm = new FormGroup({
      'accepter': new FormControl('')
    });
  }
  Supprimer(id: number) {
    this.formationService.deleteInscription(id).subscribe(
      (res) => {
        this.etudiant = this.etudiant.filter((elet: any) => elet.idEtudiant != id);
        console.log("Inscription deleted");
        this.SuccessSnackBar('Demande est supprimer')
      });
  }
  Ajouter(id: number, data: number) {
    this.formationService.getSingleInscription(id).subscribe(
      (res) => {
        this.etudiantData = res.data;
        this.formationService.updateInscription(id, this.etudiantForm.value).subscribe(
          (res) => { console.log(res.value); }
        )
        /*this.etudiantForm.patchValue({
          nomNosEtudiant:res.data[0].nomEtudiant,
          prenomNosEtudiant:res.data[0].prenomEtudiant,
            numeroTelNosEtudiant:res.data[0].numeroTelEtudiant,
            emailNosEtudiant:res.data[0].emailEtudiant,
            nomCategorie:res.data[0].nomCategorie
  
        })*/
        /*this.etudiantForm = new FormGroup({

          'nomNosEtudiant': new FormControl(res.data[0].nomEtudiant),
          'prenomNosEtudiant': new FormControl(res.data[0].prenomEtudiant),
          'numeroTelNosEtudiant': new FormControl(res.data[0].numeroTelEtudiant),
          'emailNosEtudiant': new FormControl(res.data[0].emailEtudiant),
          'nomCategorie': new FormControl(res.data[0].nomCategorie)
        });*/
        /*this.etudiantForm=this.fb.group({
          nomNosEtudiant:[res.data[0].nomEtudiant],
          prenomNosEtudiant:[res.data[0].prenomEtudiant],
            numeroTelNosEtudiant:[res.data[0].numeroTelEtudiant],
            emailNosEtudiant:[res.data[0].emailEtudiant],
            nomCategorie:[res.data[0].nomCategorie]
        });*/
        /*console.log(this.etudiantForm.value);*/
      }
    );
    /*this.formationService.createEtudiant(this.etudiantForm.value).subscribe(
      (res) => { console.log(res);
        this.router.navigate(['/etudiant']);
  
  
      }
    )*/
  }
  SuccessSnackBar(message: string) {
    this._snackBar.open(message, 'SUCCEEDED', { duration: 1000 });
  }
  ErrorSnackBar(message: string) {
    this._snackBar.open(message, 'ERROR', { duration: 2000 });
  }

}
