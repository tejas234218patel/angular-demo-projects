import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DbService } from '../../services/db.service';
import { Snippet } from '../../../models/snippet';

@Component({
  selector: 'app-create-bin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-bin.component.html',
  styleUrl: './create-bin.component.css',
})
export class CreateBinComponent {
  // https://www.youtube.com/watch?v=2Yq3za3qIp0&t=8468s
  constructor(private db: DbService) {}
  title = new FormControl('', [Validators.required]);
  code = new FormControl('', [Validators.required]);
  binForm = new FormGroup({
    title: this.title,
    code: this.code,
  });

  async saveBin() {
    await this.db.CreateSnippet(this.binForm.value as Snippet);
    this.resetSnippet();
  }

  resetSnippet() {
    this.binForm.reset();
  }
}
