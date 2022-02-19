import { ServiceService } from '../../service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: any;
  formationData:any;
  instructorData:any;
  constructor(private formationService:ServiceService,private activatedRoute:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.formationService.getSingleFomationData(this.id).subscribe(
      (res)=>{
        this.formationData=res.data;
      }
    );
     //get all instructor data 
     this.formationService.getAllInstructorData().subscribe(
      (res)=>
      {
        this.instructorData=res.data; 
      });

  }

}
