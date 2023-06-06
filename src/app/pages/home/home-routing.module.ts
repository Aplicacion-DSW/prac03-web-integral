import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import {MatNativeDateModule} from '@angular/material/core';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes),
    MatNativeDateModule],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
