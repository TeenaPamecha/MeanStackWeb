import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhotoComponent} from './photo.component';
import {AddImageComponent} from './add-image/add-image.component';
import {EditImageComponent} from './edit-image/edit-image.component';
const routes: Routes = [
    { path: '/photo',
      component: PhotoComponent,
      children: [
        {
          path: '/addimage', // child route path for addimage
          component: AddImageComponent 
        },
        {
          path: '/editimage', // child route path for editimage
          component: EditImageComponent 
        }
      ] }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
