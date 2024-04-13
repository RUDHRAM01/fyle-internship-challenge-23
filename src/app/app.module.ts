import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { CardComponent } from './card/card.component';
import { RepoTagComponent } from './repo-tag/repo-tag.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProfileComponent,
    RepositoriesComponent,
    CardComponent,
    RepoTagComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
