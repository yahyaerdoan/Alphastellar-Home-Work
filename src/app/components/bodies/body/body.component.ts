import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
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
