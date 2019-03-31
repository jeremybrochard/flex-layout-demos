import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlignmentDemoComponent } from './flex-container-demos/alignment-demo/alignment-demo.component';
import { DirectionDemoComponent } from './flex-container-demos/direction-demo/direction-demo.component';
import { FlexContainerDemosComponent } from './flex-container-demos/flex-container-demos.component';
import { FlexItemDemosComponent } from './flex-item-demos/flex-item-demos.component';
import { FlexLiveDemoComponent } from './flex-live-demo/flex-live-demo.component';
import { HighlightCodeDirective } from './highlight-code.directive';

@NgModule({
  declarations: [
    AppComponent,
    FlexContainerDemosComponent,
    DirectionDemoComponent,
    FlexItemDemosComponent,
    AlignmentDemoComponent,
    FlexLiveDemoComponent,
    HighlightCodeDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatExpansionModule,
    MatTabsModule,
    MatRadioModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
