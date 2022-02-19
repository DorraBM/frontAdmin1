import { ServiceService } from './../../service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.css']
})
export class DetailBlogComponent implements OnInit {
  constructor(private activetedRoute:ActivatedRoute,private formationService:ServiceService) { }
  identifiant:any;
  blogData:any;
  ngOnInit(): void {
    this.identifiant=this.activetedRoute.snapshot.params['id'];
    this.formationService.getSingleBlog(this.identifiant).subscribe(
      (res)=>{
        this.blogData=res.data;
        console.log(this.blogData,"blog");
             
      });
  }

}
