import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentValue ='';
  @Input() student: Student= {} as Student;

  @Output() newStudentEvent = new EventEmitter<Student>();
  @Output() deleteStudentEvent = new EventEmitter<Student>();

  constructor() { }


  deleteStudent(student: Student){
    return this.deleteStudentEvent.emit(student);
  }


  ngOnInit(): void {
  }

}
