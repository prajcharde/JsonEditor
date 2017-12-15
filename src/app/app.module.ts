import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng4JsonEditorModule } from 'angular4-jsoneditor' 
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng4JsonEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
