import { Injectable } from '@angular/core';
import { Tag } from 'src/app/_models/product/tags.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor() { }

  tagArray: Tag[]=[
    {id:1, name:'food'},
    {id:2, name:'electrical'},
    {id:3, name:'books'},
    {id:4, name:'baby'},
    {id:5, name:'clothes'},
    {id:6, name:'sports'},
    {id:7, name:'healthy'}
  ];
  
  getAllTags():Tag[]{
    return this.tagArray;
  }
  getById(){}
  addTag(){}
  editTag(){}
  deleteTag(){}
}
