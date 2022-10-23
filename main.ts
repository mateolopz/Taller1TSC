import { Serie } from './serie.js';

import { series } from './dataSeries.js';

const seasonsAverage: HTMLElement = document.getElementById("average")!;
const seriesTbody: HTMLElement = document.getElementById('series')!; // Nodo tbody que tiene el id="courses"

renderSeriesInTable(series);
seasonsAverage.innerHTML = `${getSeasonsAverage(series)}`

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td><strong>${c.id}</strong></td>
                           <td style="color:blue">${c.name}</td>
                           <td>${c.cadena}</td>
                           <td>${c.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}


function getSeasonsAverage(series: Serie[]): number {
    let totalSeasons: number = 0;
    let contador: number = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    series.forEach((serie) => contador = contador + 1);
    return totalSeasons/contador;
  }