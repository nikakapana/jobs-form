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
    this.matchPercentages = this.value2.map(item => this.calculateMatchPercentage(this.value1, item));
  }

  private calculateMatchPercentage(value1: string, value2: string): number {
    if (!value2.length) return 0;
    const commonLength = this.getCommonSubstringLength(value1.toLowerCase(), value2.toLowerCase());
    return (commonLength / value2.length) * 100;
  }

  private getCommonSubstringLength(value1: string, value2: string): number {
    let maxLength = 0;
    for (let i = 0; i < value1.length; i++) {
      for (let j = i + 1; j <= value1.length; j++) {
        const substring = value1.substring(i, j);
        if (value2.includes(substring) && substring.length > maxLength) {
          maxLength = substring.length;
        }
      }
    }
    return maxLength;
  }
}
