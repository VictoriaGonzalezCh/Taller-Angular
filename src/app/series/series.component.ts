import { Component, OnInit } from '@angular/core';
import { Serie } from './series';
import { dataSeries } from './dataSeries';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  standalone: false,
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series: Array<Serie> = [];
  selectedSerie: Serie | null = null;
  constructor() { }

  getSeriesList(): Array<Serie> {
    return dataSeries;
  }

  ngOnInit() {
    this.series= this.getSeriesList();
  }

  getAverageSeasons(): number {
    if (this.series.length === 0) return 0;
    const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / this.series.length;
  }

  selectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }

}
