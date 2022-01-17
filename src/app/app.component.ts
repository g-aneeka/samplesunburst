import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  public graph = {
    data : [{
      type: "sunburst",
      labels: ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
      parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve" ],
      values:  [10, 14, 12, 10, 2, 6, 6, 4, 4],
      outsidetextfont: {size: 20, color: "#377eb8"},
      leaf: {opacity: 0.4},
      marker: {line: {width: 2}},
    }],
    
    layout : {
      margin: {l: 0, r: 0, b: 0, t: 0},
      width: 500,
      height: 500
    }
};

}

