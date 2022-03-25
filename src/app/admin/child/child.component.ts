import { Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Student } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges, DoCheck, OnDestroy {

  @Input() parentValue ='';
  @Input() anotherparentValue ='';

  @Input() student: Student= {} as Student;

  @Output() newStudentEvent = new EventEmitter<Student>();
  @Output() deleteStudentEvent = new EventEmitter<Student>();
  subscription:Subscription | undefined;
  
  initialValue:string="";

  constructor() {
    console.log("child:from constructor")
   }

  ngDoCheck(): void {
    if(this.initialValue!=""){
    console.log("change detected");
    
    }
    console.log("This is in docheck")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("child: from ngonchanges"); 
    console.log("changes", changes);
    this.initialValue='Birhan'
  }

  deleteStudent(student: Student){
    return this.deleteStudentEvent.emit(student);
  }

  ngOnInit(): void {
    console.log("child:from ngOnint")
  
  }

  ngOnDestroy(): void {
    
  }

}
