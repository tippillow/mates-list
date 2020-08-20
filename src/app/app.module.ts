import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatesTableComponent} from './components/dumb/mates-table/mates-table.component';
import {AggregationPipe} from './pipes/aggregation/aggregation.pipe';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CreateFormComponent} from './components/dumb/create-form/create-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        MatesTableComponent,
        AggregationPipe,
        CreateFormComponent
    ],
    imports: [
        BrowserModule,
        MatButtonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
