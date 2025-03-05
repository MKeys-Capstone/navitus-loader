import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PrepStatus, StepStatus } from '../util/constants';

@Component({
  selector: 'app-loader',
  imports: [MatProgressBarModule, MatIconModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent implements OnChanges {
  @Input('currentStepName') currentStepName: string = '';
  @Input('steps') steps: PrepStatus[] = [];
  complete: boolean = false;
  currentStepIndex: number = 0;
  progressPercentage: number = 33;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentStepName']) {
      this.currentStepIndex = this.steps.findIndex(
        (each) => each === changes['currentStepName'].currentValue
      ) + 1;
      if(this.currentStepIndex === this.steps.length) this.complete = true;
      this.progressPercentage = (this.currentStepIndex / (this.steps.length)) * 100;
    }
  }

  getHumanReadableStep(status: string): string {
    return StepStatus[status as keyof typeof StepStatus] || status;
  }
}
