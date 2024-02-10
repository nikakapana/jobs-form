import {Component, Inject, Input, OnInit, SimpleChanges} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NZ_MODAL_DATA} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-input-compare',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-compare.component.html',
  styleUrls: ['./input-compare.component.scss']
})
export class InputCompareComponent implements OnInit {

  matchPercentages: number[] = [];
  value1 = this.params.value1
  value2 = this.params.value2

  constructor(
    @Inject(NZ_MODAL_DATA) public params: { value1: string, value2: string[] }
  ) {
  }

  ngOnInit(): void {
    this.calculateMatchPercentages();
  }


  private calculateMatchPercentages(): void {
    this.matchPercentages = this.value2.map(sentence => {
      const words = sentence.split(' ');
      const matchScores = words.map(word => 1 - (this.levenshteinDistance(this.value1.toLowerCase(), word.toLowerCase()) / Math.max(this.value1.length, word.length)));
      const maxScore = Math.max(...matchScores);
      return maxScore * 100;
    });
  }

  private levenshteinDistance(a: string, b: string): number {
    const matrix: number[][] = [];

    for (let i = 0; i <= a.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= b.length; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const substitutionCost = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + substitutionCost
        );
      }
    }

    return matrix[a.length][b.length];
  }
}
