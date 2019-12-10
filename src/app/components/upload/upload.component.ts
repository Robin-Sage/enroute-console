import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadService } from './upload.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import {  IDropdownSettings } from 'ng-multiselect-dropdown';



@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  uploadForm: FormGroup;
  articleForm:FormGroup;
  type:Array<String>=["audio","video","book"]
  genre:Array<String>=["Action","Thriller","Drama","Romantic","Horror","Comedy"]
  selectedGenre = [];
  dropdownSettings : IDropdownSettings = {};
  progress: number = 0;
  showUpload:Boolean=true
  imageURL: string="";
  value=[];
  successMessage="";
  errorMessage="";
    
  constructor(private formBuilder: FormBuilder,private uploadService:UploadService ,private cd: ChangeDetectorRef) { }

  ngOnInit() {

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      enableCheckAll:false
    };
    this.uploadForm = this.formBuilder.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      genre:['', Validators.required],
      description:['',Validators.required],
      media:['',Validators.required],
     
    });
   this.articleForm=this.formBuilder.group({
    title: ['', Validators.required],
    tag: ['', Validators.required],
    description:['',Validators.required],
    image:['',Validators.required],
   })
  }
  onItemSelect(item: any) {
    this.selectedGenre.push(item)
    this.uploadForm.controls['genre'].setValue(this.selectedGenre);
  }
  onItemDeSelect(item:any){
    this.selectedGenre.splice(item,1)
    this.uploadForm.controls['genre'].setValue(this.selectedGenre);
  }
  upload(){
    
    
    this.uploadService.uploadFile(this.uploadForm.value)
    .subscribe((data) => {
      this.successMessage="Uploaded successfully"
    })
    this.uploadForm.reset();
    this.files1=[]
    this.selectedGenre=[]
  }
  // uploadFile4(event) {
  //   const file = (event.target as HTMLInputElement).files[0];
  //   console.log(file)
  //   this.uploadForm.patchValue({
  //     media: file
  //   });
  //   this.uploadForm.get('media').updateValueAndValidity()
  // }

  files1: any = [];

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      console.log(element)
      this.uploadForm.patchValue({
        media: element
      });
      this.files1.push(element.name)
    }  
    
     
     this.uploadForm.get('media').updateValueAndValidity()
    this.showUpload=false;
    this.cd.markForCheck();
   
  }
  deleteAttachment(index) {
    this.files1.splice(index, 1)
    this.showUpload=true;
  }

  // Image Preview
  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.articleForm.patchValue({
      image: file
    });
    this.articleForm.get('image').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  deleteImage(event){
    this.imageURL="";
    this.articleForm.patchValue({
      image: ''
    });
   event.target.value=''
  }
  uploadArticle(){
    console.log(this.articleForm.value)
  }

}
