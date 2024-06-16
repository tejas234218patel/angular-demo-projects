import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  // Templete driven form
  constructor(private router: Router, private authService: AuthService) {}
  register(regiForm: NgForm) {
    console.log(regiForm.value);
    this.authService.registerUser(
      regiForm.value.email,
      regiForm.value.password
    );
    //this.router.navigate(['/login']);
  }

  reset(regiForm: NgForm) {
    regiForm.reset();
  }
}
