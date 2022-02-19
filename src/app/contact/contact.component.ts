import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private formationService:ServiceService) { }
contact:any;
  ngOnInit(): void {
    this.formationService.getContact().subscribe(
      (res)=>{
        this.contact=res.data;
      }
    )
  }

  Supprimer(id:number)
  {
    this.formationService.deleteContact(id).subscribe(
      (res)=>{ 
             this.contact=this.contact.filter((elet:any)=>elet.idContact!=id);
             console.log("contact deleted");
             this.SuccessSnackBar('Contact est supprimer');
           });
  }
  SuccessSnackBar(message: string) {
    this._snackBar.open(message, 'SUCCEEDED', { duration: 1000});
  }
  ErrorSnackBar(message: string) {
    this._snackBar.open(message, 'ERROR', { duration: 2000 });
  }

}
