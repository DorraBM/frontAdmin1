import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService } from './../../service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-blog',
  templateUrl: './ajouter-blog.component.html',
  styleUrls: ['./ajouter-blog.component.css']
})
export class AjouterBlogComponent implements OnInit {
  blogForm:FormGroup;
  categorieData:any;
  constructor(private _snackBar: MatSnackBar,private formationService:ServiceService,private router:Router) { }

  ngOnInit(): void {
    this.formationService.getCategories().subscribe(
      (res)=>{
        this.categorieData=res.data;
        
      }
    );
    this.blogForm=new FormGroup({
      'auteurBlog':new FormControl(''),
      'titreBlog':new FormControl(''),
      'dateBlog':new FormControl(''),
      'descriptionBlog':new FormControl(''),
      'categorieBlog':new FormControl(''),
      'contenueBlog':new FormControl(''),
      'imageBlog':new FormControl(''),
      'imageAuteur':new FormControl('')
    });
    
  }
  onSubmit()
  {
    if(this.blogForm.valid)
    {
      console.log(this.blogForm.value);
      this.formationService.createBlog(this.blogForm.value).subscribe(
        (res)=>{
          this.blogForm.reset();
          this.router.navigate(['/blog']); 
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
