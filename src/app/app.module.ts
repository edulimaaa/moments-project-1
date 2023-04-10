import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // rotas na aplicação
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // icones fontawesome
import { HttpClientModule } from '@angular/common/http'; // realizar requisições HTTP para uma API ou servidor web.
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // fornece suporte para recursos de formulários / suporte para recursos de formulários reativos

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/pages/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ShareMomentComponent } from './components/pages/share-moment/share-moment.component';
import { MomentFormComponent } from './components/functionalities/moment-form/moment-form.component';
import { AllMomentsComponent } from './components/functionalities/all-moments/all-moments.component';
import { DetailsMomentComponent } from './components/functionalities/details-moment/details-moment.component';
import { EditMomentComponent } from './components/functionalities/edit-moment/edit-moment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ShareMomentComponent,
    MomentFormComponent,
    AllMomentsComponent,
    DetailsMomentComponent,
    EditMomentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
