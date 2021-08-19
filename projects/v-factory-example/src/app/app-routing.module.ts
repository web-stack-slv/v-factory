import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncFormComponent } from './async-form/async-form.component';
import { FileFormComponent } from './file-form/file-form.component';
import { JsonFormComponent } from './json-form/json-form.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';


const routes: Routes = [
  {path: '', redirectTo: 'simple', pathMatch: 'full'},
  {path: 'simple', component: SimpleFormComponent},  
  {path: 'json', component: JsonFormComponent},  
  {path: 'async', component: AsyncFormComponent},  
  {path: 'file', component: FileFormComponent},  
  {path: '**', redirectTo: 'simple'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
