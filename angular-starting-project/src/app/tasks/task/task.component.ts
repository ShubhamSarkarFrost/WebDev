import {Component, EventEmitter, Input, Output} from '@angular/core';

type TaskType =  {
  id: string,
  userId: string,
  title: string,
  summary:string,
  dueDate:string
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
   @Input({required: true}) task!: TaskType
   @Output() complete = new EventEmitter<string>();

   onCompleteTask(){
     this.complete.emit(this.task.id);
   }
}
