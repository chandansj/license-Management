import { Component, OnInit } from '@angular/core';
import { LicenseService } from '../license.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-license-decode',
  templateUrl: './license-decode.component.html',
  styleUrls: ['./license-decode.component.css']
})
export class LicenseDecodeComponent implements OnInit {
  form: FormGroup;
  query;
  shareIcon: boolean = false;
  show: boolean= false;
  licenseKey: string;
  licenseData: any = {};

  constructor(private formBuilder: FormBuilder, private lincenseService: LicenseService) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      customerId: [null, Validators.compose([Validators.required, Validators.maxLength(7)])],
      customerReview: [null, Validators.compose([Validators.required, Validators.maxLength(7)])],
      totalBalance: [null, Validators.compose([Validators.required, Validators.maxLength(6)])],
      lastPayAmount: [null, Validators.compose([Validators.required, Validators.maxLength(6)])],
      licensePeriod: [null, Validators.compose([Validators.required, Validators.maxLength(6)])],
      lastPayDate: [null, Validators.compose([Validators.required])],
      licenseGenerationDate: [null, Validators.compose([Validators.required])],
      block: [null],
      licenseKey: [null],
    });
  }


  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }


  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      console.log('form submitted');
      this
        .lincenseService
        .postLicense(this.form.value)
        .subscribe((res: any) => {
          // tslint:disable-next-line:no-debugger
          debugger;
          console.log(res);
          this.licenseKey = res._body;
          this.form.controls['licenseKey'].patchValue(this.licenseKey);
        });
    } else {
      this.validateAllFormFields(this.form);
    }

  }

  onDecode() {

    this.lincenseService.getLicense(this.licenseKey)
      .subscribe((res: any) => {
        if (res.isSuccess) {
          this.show = false;
        this.licenseData =  res.licenseDetails;
      } else {
          this.show = true;
      }
        this.form.markAsDirty();
        // alert(res);
      });
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  reset() {
    this.form.reset();
  }

  toggleShareIcon() {
    this.shareIcon = !this.shareIcon;
  }
}


