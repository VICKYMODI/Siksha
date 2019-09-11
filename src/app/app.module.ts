import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BasicComponent } from './basic/basic.component';
import { PremiumComponent } from './premium/premium.component';


const routes: Routes = [
    {path : 'Basic', component : BasicComponent },
    {path : 'Premium', component : PremiumComponent},
    {path : '', component : LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BasicComponent,
    PremiumComponent
  ],
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
