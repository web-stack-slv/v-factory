import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxesFormComponent } from './boxes-form/boxes-form.component';
import { ContentFormComponent } from './content-form/content-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ExpandedFormComponent } from './expanded-form/expanded-form.component';
import { FileFormComponent } from './file-form/file-form.component';
import { ImageFormComponent } from './image-form/image-form.component';
import { JsonFormComponent } from './json-form/json-form.component';
import { ListFormComponent } from './list-form/list-form.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';


const routes: Routes = [
  {path: '', redirectTo: 'simple', pathMatch: 'full'},
  {path: 'simple', component: SimpleFormComponent},  
  {path: 'json', component: JsonFormComponent},  
  {path: 'file', component: FileFormComponent},
  {path: 'box', component: BoxesFormComponent},
  {path: 'expand', component: ExpandedFormComponent},
  {path: 'list', component: ListFormComponent},
  {path: 'dynamic', component: DynamicFormComponent},
  {path: 'content', component: ContentFormComponent},
  {path: 'image', component: ImageFormComponent},
  {path: '**', redirectTo: 'simple'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
