/**
 * Created by Marian on 14/05/2016.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IWorkout} from "./workout";
import {MdCard} from "@angular2-material/card";
import {MdButton} from "@angular2-material/button";
import {AuthService} from "../../common/services/auth.service";
import {Injectable} from "@angular/core";

@Injectable()
@Component({
  selector: 'workout-item',
  directives: [MdButton, MdCard],
  providers: [AuthService],
  styles: [`
    md-card-title {
      padding: 15px;
    }
  `,
  ],
  template: `
    <md-card>

      <md-card-header>
          <img md-card-avatar [src]="workoutItem.user.avatar">
          <md-card-title>{{ workoutItem.user.displayName }}</md-card-title>
          <!--<md-card-subtitle></md-card-subtitle>-->
      </md-card-header>

      <md-card-content>
        <div>Exercise: {{ workoutItem.content.exercises }}</div>
        <div>Muscle Group: {{ workoutItem.content.muscleGroups }}</div>
        <div>Reps: {{ workoutItem.content.reps }}</div>
        <div>Sets: {{ workoutItem.content.sets }}</div>
        <div>Weight: {{ workoutItem.content.weight }}</div>
        <div>Date: {{ workoutItem.createdAt | date }}</div>
      </md-card-content>

      <md-card-actions layout="row" layout-align="end center">
          <button md-raised-button color="warn" (click)="deleteWorkout.emit(workoutItem)">Delete</button>
          <button md-raised-button>Details</button>
      </md-card-actions>

    </md-card>

  `
})
export class WorkoutItemComponent {
  @Input() workoutItem: IWorkout;
  @Output() deleteWorkout: EventEmitter<any> = new EventEmitter(false);

  constructor(private auth:AuthService) {

  }
}
