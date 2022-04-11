import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service'; 

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  providers: [GoalService]
  // styles: ['h6 {color:red}']
})
export class GoalComponent implements OnInit {

  goals:Goal[];
  alertService:AlertService;
  

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)//creates a prompt 

      if(toDelete){
      this.goals.splice(index,1);// deletes a goal from child component
      this.alertService.alertMe("The goal has been deleted")
    }
  }
}
 addNewGoal(goal){
   let goalLength = this.goals.length;
   goal.id = goalLength+1;
   goal.completeDate = new Date(goal.completeDate)
   this.goals.push(goal)
 }
 
  constructor(goalService:GoalService, alertService:AlertService) {
    this.goals = goalService.getGoals()
    this.alertService = alertService;
   }

  ngOnInit(): void {
  }

}
