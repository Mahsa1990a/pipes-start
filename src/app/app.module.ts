import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// imports of the TypeScript types
import { AppComponent } from './app.component';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [ // components, directives, pipes for this module
    AppComponent,
    ShortenPipe,
    FilterPipe
  ],
  imports: [ // module packages providing Angular functionalities
            // (BrowserModule, FormsModule ...)and custom modules (MyFeatureModule, SharedModule  ... )
    BrowserModule,
    FormsModule,
  ],
  providers: [], // services with app-wide scope(if not provided via their own @Injectable({...}) decorator)
  exports: [], // things which are meant to be reused in other modules(by importing them there)
  bootstrap: [AppComponent]
})
export class AppModule { }
