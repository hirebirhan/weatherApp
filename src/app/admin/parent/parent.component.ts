import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from '../services/message.service';
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

  currentMessageValue: string='';
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
  
  isChecked : boolean = false;
  

  sampleForm: FormGroup= this.fb.group({
    userName: []
  });

  constructor(private messageService: MessageService, private fb: FormBuilder) { }

  ngOnInit(): void {


    this.sampleForm.get("userName")?.valueChanges.subscribe(change=>{
      this.messageService.SetMessageValue(change)
    })

    this.messageService.getCurrentMessage().subscribe(res=>{
      this.currentMessageValue= res;
    })
    const _student: Student = {
      fullName: 'getachew molla', age: 18, gender: "male"
    };
    const { fullName } = _student;

    this.students.push(...this.students, _student)
  }

  AddNewStudent(Event: Event) {
    this.students.push({
      gender: 'male', age: 35, fullName: "Hassen Ali"
    })

    /// check event.target.checked  ==  true  
  // this.isChecked = !event?.target.checked;
  }

  updateMessage() {
    this.messageService.SetMessageValue("This is value from parent component")
  }

  deleteStudent(student: Student) {
    // this.students.pop(student)
    this.students = this.students.filter(x => x.fullName !== student.fullName)
  }


}
