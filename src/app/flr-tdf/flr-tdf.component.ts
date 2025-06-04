import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-flr-tdf',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './flr-tdf.component.html',
  styleUrl: './flr-tdf.component.css'
})
export class FlrTdfComponent {
   isFlipped = false;

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
  login(form: NgForm) {
  if (form.valid) {
    console.log('Login Data:', form.value);
    alert('Login successfully');
  }
}

register(form: NgForm) {
  if (form.valid) {
    console.log('Register Data:', form.value);
    alert('Registered successfully');
  }
}

}
