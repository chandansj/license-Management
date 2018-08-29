import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import {LicenseService} from './license.service';
import { RouterModule, Routes } from '@angular/router';
import { LicenseGenerationComponent } from './license-generation/license-generation.component';
import { LicenseDecodeComponent } from './license-decode/license-decode.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/generate',
        pathMatch: 'full'
    },
    { path: 'generate', component: LicenseGenerationComponent },
    { path: 'decode', component: LicenseDecodeComponent },
    { path: '**', redirectTo: '/generate', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    FieldErrorDisplayComponent,
    LicenseGenerationComponent,
    LicenseDecodeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LicenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
