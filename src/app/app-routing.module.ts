import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { ShareMomentComponent } from './components/pages/share-moment/share-moment.component';
import { AboutComponent } from './components/pages/about/about.component';
import { DetailsMomentComponent } from './components/functionalities/details-moment/details-moment.component';
import { EditMomentComponent } from './components/functionalities/edit-moment/edit-moment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'share', component: ShareMomentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'moments/:id', component: DetailsMomentComponent },
  { path: 'moments/edit/:id', component: EditMomentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
