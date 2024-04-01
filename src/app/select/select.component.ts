import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Olona } from '../model/Olona'; 
import { Router } from '@angular/router'; 
import { OlonaService } from '../service/OlonaService'; 

@Component({
  templateUrl: 'select.component.html'
})
export class SelectComponent {
  listOlona !: Observable<Olona[]>;

  constructor(private router: Router,private service: OlonaService) {}



  getAllOlona() {
    this.listOlona = this.service.getAll();
  }
}
