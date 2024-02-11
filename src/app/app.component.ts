import { Component, OnInit, Optional } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  NgControl,
  Validators,
} from '@angular/forms';
import { NotificationService } from './common';
import { FormHelper, urlValidator } from './form/utils';
import { positionLevel } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  positionLevels$ = positionLevel;
  jobForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    public readonly formHelper: FormHelper,
  ) {}

  ngOnInit() {
    this.jobForm = this.fb.group({
      jobs: this.fb.array([]),
    });
  }

  get jobs(): FormArray {
    return this.jobForm.get('jobs') as FormArray;
  }

  addJob(): void {
    const jobFormGroup = this.fb.group({
      companyName: ['', Validators.required],
      companyUrl: ['', [urlValidator()], []],
      companyDescription: ['', Validators.required],
      positions: this.fb.array([]),
    });
    setTimeout(() => {
      jobFormGroup.markAsUntouched();
    }, 0);
    this.jobs.push(jobFormGroup);
  }

  removeJob(index: number): void {
    this.jobs.removeAt(index);
  }

  addPosition(jobIndex: number): void {
    if (this.jobForm.invalid) {
      this.formHelper.markFormDirty(this.jobForm);
      const jobFormGroup = this.jobForm.get(['jobs', jobIndex]) as FormGroup;
      const urlControl = jobFormGroup.get('companyUrl')?.hasError('invalidUrl');

      if (urlControl) {
        return this.notificationService.warning(
          'The URL provided is invalid. Please enter valid URL and continue.',
        );
      } else {
        return this.notificationService.warning('Please fill up all fields');
      }
    }
    const positions = this.jobs.at(jobIndex).get('positions') as FormArray;
    const positionFormGroup = this.fb.group({
      positionName: ['', Validators.required],
      positionLevel: ['', Validators.required],
      startDate: ['', Validators.required],
      currWorking: [false],
      endDate: [''],
    });
    setTimeout(() => {
      positionFormGroup.markAsUntouched();
    }, 0);
    positions.push(positionFormGroup);
  }

  removePosition(jobIndex: number, positionIndex: number): void {
    const positions = this.jobs.at(jobIndex).get('positions') as FormArray;
    positions.removeAt(positionIndex);
  }

  getPositions(jobIndex: number): FormArray {
    return this.jobs.at(jobIndex).get('positions') as FormArray;
  }
}
