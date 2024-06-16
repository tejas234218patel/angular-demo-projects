import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { CreateBinComponent } from './components/create-bin/create-bin.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { ViewSnippetComponent } from './components/view-snippet/view-snippet.component';
import { DefferableViewsHeavyloadComponent } from './components/defferable-views-heavyload/defferable-views-heavyload.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  // auth guard providing for Create page.
  { path: 'create', component: CreateBinComponent, canActivate: [authGuard] },
  {path:'defferable-view-demo', component:DefferableViewsHeavyloadComponent},
  // Following is lazy loading of component Time stamp: 3:27:36
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (com) => com.AboutComponent
      ),
  },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'snippet/:id', component: ViewSnippetComponent },
  { path: '**', component: NotFoundComponent },
];
