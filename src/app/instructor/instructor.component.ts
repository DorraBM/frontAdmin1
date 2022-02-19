import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {
 instructor:any
  constructor( private _snackBar: MatSnackBar,private formationService:ServiceService) { }

  ngOnInit(): void {
    this.formationService.getAllInstructorData().subscribe(
      (res)=>{
        this.instructor=res.data;
      }
    );
  }
Supprimer(id:number)
{
  this.formationService.deleteInstructor(id).subscribe(
    (res)=>{ 
           this.instructor=this.instructor.filter((elet:any)=>elet.idInstructor!=id);
           console.log("Instructor deleted");
           this.SuccessSnackBar('Formateur est supprimé')
         });
}
SuccessSnackBar(message: string) {
  this._snackBar.open(message, 'SUCCEEDED', { duration: 1000});
}
ErrorSnackBar(message: string) {
  this._snackBar.open(message, 'ERROR', { duration: 2000 });
}

}
