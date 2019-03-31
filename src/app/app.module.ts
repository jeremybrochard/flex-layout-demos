import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlignmentDemoComponent } from './flex-container-demos/alignment-demo/alignment-demo.component';
import { DirectionDemoComponent } from './flex-container-demos/direction-demo/direction-demo.component';
import { FlexContainerDemosComponent } from './flex-container-demos/flex-container-demos.component';
import { SpacingDemoComponent } from './flex-container-demos/spacing-demo/spacing-demo.component';
import { FlexItemDemosComponent } from './flex-item-demos/flex-item-demos.component';
import { FlexLiveDemoComponent } from './flex-live-demo/flex-live-demo.component';
import { HighlightCodeDirective } from './highlight-code.directive';
import { OrderDemoComponent } from './flex-item-demos/order-demo/order-demo.component';
import { BasisGrowShrinkDemoComponent } from './flex-item-demos/basis-grow-shrink-demo/basis-grow-shrink-demo.component';
import { AlignDemoComponent } from './flex-item-demos/align-demo/align-demo.component';
import { FlexResponsiveDemosComponent } from './flex-responsive-demos/flex-responsive-demos.component';


const materialModules = [
  MatInputModule,
  MatCardModule,
  MatExpansionModule,
  MatTabsModule,
  MatRadioModule
];

@NgModule({
  declarations: [
    AppComponent,
    FlexContainerDemosComponent,
    DirectionDemoComponent,
    FlexItemDemosComponent,
    AlignmentDemoComponent,
    FlexLiveDemoComponent,
    HighlightCodeDirective,
    SpacingDemoComponent,
    OrderDemoComponent,
    BasisGrowShrinkDemoComponent,
    AlignDemoComponent,
    FlexResponsiveDemosComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    materialModules,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
