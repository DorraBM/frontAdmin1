import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
    //connect frontend to backend
    URLFormation = " http://localhost:4000/formation";
    URLInstructor = " http://localhost:4000/instructor";
    URLcategorie = " http://localhost:4000/categorie";
    URLinscription = " http://localhost:4000/inscription";
    URLinscriptionAccept = " http://localhost:4000/inscriptionAccept";
    URLContact = " http://localhost:4000/contact";
    URLBlog = " http://localhost:4000/blog";
    URLComment = " http://localhost:4000/comment";
    URLEtudiant="http://localhost:4000/etudiant";
    URLFormateur= " http://localhost:4000/formateur";
    /**--------------Formation Data------------------------------------- */
     //get all Formation data
      getAllFormationData(): Observable<any> {
        return this.http.get(this.URLFormation);
      }
      //get single Formation data
      getSingleFomationData(id: number): Observable<any> {
        return this.http.get(this.URLFormation + "/" + id);
      }
      //create formation data
      createFormation(data:any):Observable<any>
      {
        return this.http.post(this.URLFormation,data);
      }
      //delete formation data
      deleteFormation(id:number):Observable<any>
      {
        return this.http.delete(this.URLFormation+"/"+id);
      }
      //update formation data
      updateFormation(id:number,data:any):Observable<any>
      {
        return this.http.put(this.URLFormation+"/"+id,data);
      }

    /**--------------Instructor Data------------------------------------- */
      //get all Instructor data
      getAllInstructorData(): Observable<any> {
        return this.http.get(this.URLInstructor);
      }
      //get single Instructor data
      getSingleInstructorData(id: number): Observable<any> {
        return this.http.get(this.URLInstructor + "/" + id);
      }
       //delete blogdata
       deleteInstructor(id:number):Observable<any>
       {
         return this.http.delete(this.URLInstructor+"/"+id);
       }

    
       /**------------demande formateur------------------------- */
        //get all formateur data
       getAllFormateurData(): Observable<any> {
        return this.http.get(this.URLFormateur);
      }
      //get single formateur data
      getSingleFormateurData(id: number): Observable<any> {
        return this.http.get(this.URLFormateur + "/" + id);
      }
       //delete formateur data
       deleteFormateur(id:number):Observable<any>
       {
         return this.http.delete(this.URLFormateur+"/"+id);
       }
      /**--------------Categorie Data------------------------------------- */
      //get categorieData
      getCategories():Observable<any> 
      { return this.http.get(this.URLcategorie);

      }
       //delete categorie data
       deleteCategorie(id:number):Observable<any>
       {
         return this.http.delete(this.URLcategorie+"/"+id);
       }
      //create categorie data
      createCategorie(data:any):Observable<any>
      {
        return this.http.post(this.URLcategorie,data);
      }
      updateCategorie(id:number,data:any):Observable<any>
      {
        return this.http.put(this.URLcategorie+"/"+id,data);
      }
      //get single categorie data
      getSingleCategorie(id:number):Observable<any>
      {
        return this.http.get(this.URLcategorie+'/'+id);
      }
      /**--------------Contact Data------------------------------------- */
      //get contact data
      getContact():Observable<any>
      { return this.http.get(this.URLContact);
      }
       //delete blogdata
       deleteContact(id:number):Observable<any>
       {
         return this.http.delete(this.URLContact+"/"+id);
       }
      /**--------------Blog Data------------------------------------- */
      //get blog data
      getBlog():Observable<any>
      { return this.http.get(this.URLBlog);
      }
       //delete blogdata
       deleteBlog(id:number):Observable<any>
       {
         return this.http.delete(this.URLBlog+"/"+id);
       }

      //get single blog data
      getSingleBlog(id:number):Observable<any>
      {
        return this.http.get(this.URLBlog+"/"+id);
      }
     // CREATE BLOG DATA
     createBlog(data:any):Observable<any>
     {
       return this.http.post(this.URLBlog,data);
     }
     //update blog data
     updateBlog(id:number,data:any):Observable<any>
     {
       return this.http.put(this.URLBlog+'/'+id,data);
     }
      /**----------Inscription data*---------------------------- */
      getInscription():Observable<any>
      {
        return  this.http.get(this.URLinscription);
      }
       //delete blogdata
       deleteInscription(id:number):Observable<any>
       {
         return this.http.delete(this.URLinscription+"/"+id);
       }
       //get single inscription
       getSingleInscription(id:number):Observable<any>
       {
         return this.http.get(this.URLinscription+"/"+id);
       }
           //delete accepter inscription
           updateInscription(id:number,data:any):Observable<any>
           {
             return this.http.put(this.URLinscriptionAccept+"/"+id,data);
           }
         /**-------Comment Data--------- */
      getComment():Observable<any>
      {
       return this.http.get(this.URLComment);
      }
     

      /**-------------etudiant data --------------------- */
     //get etudiant data
      getEtudiant():Observable<any>
     {
       return this.http.get(this.URLEtudiant);
     }

     //get Single etudiant data
     getSingleEtudiant(id:number):Observable<any>
     {
       return this.http.get(this.URLEtudiant+"/"+id);
     }
     //delete etudiant data
     deleteEtudiant(id:number):Observable<any>
     {
       return this.http.delete(this.URLEtudiant+"/"+id);
     }
     //create etudiant data
     createEtudiant(data:any):Observable<any>
     {
       return this.http.post(this.URLEtudiant,data);
     }
     //update etudiant data
     updateEtudiant(id:number,data:any):Observable<any>
     {
       return this.http.put(this.URLEtudiant+"/"+id,data);
     }


}
