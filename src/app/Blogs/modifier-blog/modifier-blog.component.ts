import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService } from './../../service.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-blog',
  templateUrl: './modifier-blog.component.html',
  styleUrls: ['./modifier-blog.component.css']
})
export class ModifierBlogComponent implements OnInit {
  blogForm:FormGroup;
  categorieData:any;
  id:number;
  blogData:any;
  constructor(private _snackBar: MatSnackBar,private activatedRoute:ActivatedRoute,private fb:FormBuilder,private formationService:ServiceService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.formationService.getCategories().subscribe(
      (res)=>{
        this.categorieData=res.data;
        
      }
    );
    this.formationService.getSingleBlog(this.id).subscribe(
      (res)=>{this.blogData=res.data;
        this.blogForm.patchValue({
          auteurBlog:res.data[0].auteurBlog,
          titreBlog:res.data[0].titreBlog,
          dateBlog:res.data[0].dateBlog,
          descriptionBlog:res.data[0].descriptionBlog,
          categorieBlog:res.data[0].categorieBlog,
          contenueBlog:res.data[0].contenueBlog,
          imageBlog:res.data[0].imageBlog,
          imageAuteur:res.data[0].imageAuteur
        });

      }
    );
    this.blogForm=this.fb.group({
      auteurBlog:[''],
      titreBlog:[''],
      dateBlog:[''],
      descriptionBlog:[''],
      categorieBlog:[''],
      contenueBlog:[''],
      imageBlog:[''],
      imageAuteur:['']
    });
    
  }
  onSubmit()
  {
 this.formationService.updateBlog(this.id,this.blogForm.value).subscribe(
   (res)=>{
     this.router.navigate(['/blog']);
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
