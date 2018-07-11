import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './bookmarks/list/list.component';
import { DetailsComponent } from './tags/details/details.component';
import { TaglistComponent } from './tags/taglist/taglist.component';
import { TagformComponent } from './tags/tagform/tagform.component';

const routes: Routes = [
  {path: 'bookmarks', component : ListComponent},
  {path: 'tags', component : TaglistComponent},
  {path: 'tag/create', component : TagformComponent},
  {path: 'tag/:id', component : DetailsComponent},
  {path: 'tag/:id/edit', component : TagformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
