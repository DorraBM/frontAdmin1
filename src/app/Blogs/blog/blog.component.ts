import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService } from '../../service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
 blog:any;
 blogData:any;
  constructor(private _snackBar: MatSnackBar,private router: Router,private formationService:ServiceService) { }

  ngOnInit(): void {
    this.formationService.getBlog().subscribe(
      (res)=>{
        this.blog=res.data;
      }
    )
  }
 Detail(link:any,id:number)
 {this.router.navigate([link + '/' + id]); 

 }
 Modifier(link:any,id:number)
 { this.router.navigate([link + '/' + id]); 

 }
 Supprimer(id:number)
 {
  this.formationService.deleteBlog(id).subscribe(
    (res)=>{ 
           this.blog=this.blog.filter((elet:any)=>elet.idBlog!=id);
           console.log("blog deleted");
         });
 }
 SuccessSnackBar(message: string) {
  this._snackBar.open(message, 'SUCCEEDED', { duration: 1000});
}
ErrorSnackBar(message: string) {
  this._snackBar.open(message, 'ERROR', { duration: 2000 });
}

}
