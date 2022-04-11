import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
  // styles: ['h6 {color:red}']
})
export class GoalComponent implements OnInit {
  
  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)//creates a prompt 

      if(toDelete){
      this.goals.splice(index,1);// deletes a goal from child component
    }
  }
}
 addNewGoal(goal){
   let goalLength = this.goals.length;
   goal.id = goalLength+1;
   goal.completeDate = new Date(goal.completeDate)
   this.goals.push(goal)
 }
 
  constructor() { }

  ngOnInit(): void {
  }

}
