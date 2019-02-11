import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { NarendraComponent } from './narendra/narendra.component';
import { PraneetComponent } from './praneet/praneet.component';
import { VineetComponent } from './vineet/vineet.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IndexComponent } from './index/index/index.component';

export const routes: Routes = [
  // { path: 'app', component : AppComponent},
  // { path: '', component : EvencomponentComponent},
  { path: '', component: LoginComponent},
  { path: 'narendra', component: NarendraComponent },
  { path: 'vineet', component: VineetComponent},
  { path: 'praneet', component: PraneetComponent},
  { path: 'common', component: CommonComponent},
  { path: 'index', component: IndexComponent},
  { path: '**', component : NotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    NarendraComponent,
    PraneetComponent,
    VineetComponent,
    LoginComponent,
    NotFoundComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

