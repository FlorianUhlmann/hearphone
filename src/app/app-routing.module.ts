import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home',
    loadChildren: () => import('./modules/home/home.module').then((mod) => mod.HomeModule),
  },
  { path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((mod) => mod.AuthModule),
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

