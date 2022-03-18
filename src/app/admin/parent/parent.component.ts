import { Component, OnInit } from '@angular/core';
export interface Student {
  fullName: string;
  gender: 'male' | 'female';
  age: number;
}
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {
  valueFromParent = 'This is value from parent';
  students: Student[] = [{
    fullName: "Maru abebe",
    age: 50,
    gender: "male"
  },
  {
    fullName: "Birhan Nega",
    age: 40,
    gender: "male"
  }
  ];


  constructor() { }

  ngOnInit(): void {
    const _student: Student = {
      fullName: 'getachew molla', age: 18, gender: "male"
    };
    const { fullName } = _student;

    this.students.push(...this.students, _student)
  }

  AddNewStudent(Event: Event) {
    this.students.push({
      gender:'male', age: 35, fullName:"Hassen Ali"
    })
  }

  deleteStudent(student: Student) {
   // this.students.pop(student)
   this.students= this.students.filter(x=>x.fullName!== student.fullName)
  }


}
