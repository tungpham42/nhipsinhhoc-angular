import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiorhythmFormComponent } from './biorhythm-form/biorhythm-form.component';
import { BiorhythmChartComponent } from './biorhythm-chart/biorhythm-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [AppComponent, BiorhythmFormComponent, BiorhythmChartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HighchartsChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
