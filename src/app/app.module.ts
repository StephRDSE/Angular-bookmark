import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,
         MatButtonModule,
         MatSidenavModule,
         MatIconModule,
         MatListModule,
         MatChipsModule,
         MatInputModule } from '@angular/material';
import { ListComponent } from './bookmarks/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './tags/details/details.component';
import { TaglistComponent } from './tags/taglist/taglist.component';
import { TagformComponent } from './tags/tagform/tagform.component';
import { FormsModule } from '@angular/forms';
import { ProfilelistComponent } from './profiles/profilelist/profilelist.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    ListComponent,
    DetailsComponent,
    TaglistComponent,
    TagformComponent,
    ProfilelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatChipsModule,
    MatIconModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
