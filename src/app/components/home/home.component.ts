import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { Snippet } from '../../../models/snippet';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
items: Snippet[] = []
constructor(private db:DbService) {
}
  ngOnInit(): void {
   this.db.getAllSnippets().then(data=>{
    console.log("data: ", data);
    this.items = data;
   })
    
  }
}
