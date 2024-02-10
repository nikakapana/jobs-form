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


  calculateMatchPercentages(): void {
    for (const item of this.value2) {
      this.matchPercentages.push(this.calculateMatchPercentage(this.value1.toLowerCase(), item.toLowerCase()));
    }
  }

  calculateMatchPercentage(value1: string, value2: string): number {
    if (!value2.length) return 0;

    const dp: number[][] = Array(value1.length + 1).fill(0).map(() => Array(value2.length + 1).fill(0));
    let maxLength = 0;

    for (let i = 1; i <= value1.length; i++) {
      for (let j = 1; j <= value2.length; j++) {
        if (value1[i - 1] === value2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
          maxLength = Math.max(maxLength, dp[i][j]);
        }
      }
    }

    return (maxLength / value2.length) * 100;
  }
}
