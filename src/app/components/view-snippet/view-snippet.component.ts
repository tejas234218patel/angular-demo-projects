import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ActivatedRoute } from '@angular/router';
import { Snippet } from '../../../models/snippet';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-snippet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-snippet.component.html',
  styleUrl: './view-snippet.component.css',
})
export class ViewSnippetComponent {
  codeSnippet: Snippet | undefined;
  constructor(private route: ActivatedRoute, private db: DbService) {}
  ngOnInit(): void {
    const snippetId = this.route.snapshot.paramMap.get('id');
    this.db.getSnippetById(snippetId!).then((data) => {
      console.log('snip: ', data);
      this.codeSnippet = data as Snippet;
    });
  }
  editSnippet(snippet: Snippet) {
    console.log(snippet);
  }
  deleteSnippet(Snippet: Snippet) {
    console.log(Snippet);
  }
}
