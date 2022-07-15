import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-second-body',
  templateUrl: './second-body.component.html',
  styleUrls: ['./second-body.component.css']
})
export class SecondBodyComponent implements OnInit {
  isValid = false;
  isAnyValid = false;
  alphaForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.createForm();
    this.isAnyValid = true;
    this.isValid = false;

  }
  createForm() {
    this.alphaForm = this.formBuilder.group({
      talent: ["", Validators.required],
      custom: ["", Validators.required],
      cloud: ["", Validators.required],
      automation: ["", Validators.required],
    });
  }
  isFormValid() {

    if (this.alphaForm.valid) {
      this.isValid = true;
    }
  }

  isAnyInputValid() {
    if (this.alphaForm.controls['talent'].valid || this.alphaForm.controls['custom'].valid
      || this.alphaForm.controls['cloud'].valid || this.alphaForm.controls['automation'].valid) {
      this.isAnyValid = false;
      console.log("reset aktif")
    } else {
      this.isAnyValid = true;
      console.log("reset pasif")
    }
  }

  resetButton() {
    this.alphaForm.reset();
    this.isAnyValid = true;
  }

}
