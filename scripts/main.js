import { series } from './dataSeries.js';
var seasonsAverage = document.getElementById("average");
var seriesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="courses"
renderSeriesInTable(series);
seasonsAverage.innerHTML = "".concat(getSeasonsAverage(series));
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td><strong>".concat(c.id, "</strong></td>\n                           <td style=\"color:blue\">").concat(c.name, "</td>\n                           <td>").concat(c.cadena, "</td>\n                           <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getSeasonsAverage(series) {
    var totalSeasons = 0;
    var contador = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    series.forEach(function (serie) { return contador = contador + 1; });
    return totalSeasons / contador;
}
