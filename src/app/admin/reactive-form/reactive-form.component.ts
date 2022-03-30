import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface StudentInfo {
  FirstName: string;
  LastName: string;
  MiddleName: string
}
interface Country {
  name: string,
  id: number
}
interface City {
  countryid: number,
  id: number,
  name: string
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  countries: Country[] = [
    { id: 1, name: 'Ethiopia' },
    { id: 2, name: 'USA' },
    { id: 3, name: 'Canada' },
    { id: 4, name: 'Germany' },
  ];

  cities: City[] = [
    { id: 1, name: 'Addis ababa', countryid: 1 },
    { id: 2, name: 'Washington dc', countryid: 2 },
    { id: 3, name: 'Qubec', countryid: 3 },
    { id: 4, name: 'Tororonto', countryid: 3 },
    { id: 5, name: 'Berlin', countryid: 4 },
    { id: 6, name: 'Adama', countryid: 1 },

  ];

  filterdCities: City[] = [];




  addressForm: FormGroup = this.formBuilder.group({
    phone: [],
    tel: [],
    street: []
  });

  constructor(private formBuilder: FormBuilder) { }

  studentForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(5)])],
    middleName: ['', Validators.required],
    lastName: ['', Validators.required],
    country: ['', Validators.required],
    city: ['', Validators.required],
    address: this.addressForm

  })

  // get firstName() {
  //   return this.studentForm.get('firstName')
  // }

  ngOnInit(): void {


    this.studentForm.get('country')?.valueChanges.subscribe(changedCountryId => {
      console.log("changes", changedCountryId)
      //filter cities
      this.filterdCities = this.cities.filter(city => city.countryid === changedCountryId)

    })
  }


  onSubmit() {
    // getting raw value from form
    // form status
    const formdata = this.studentForm.getRawValue();
    console.log("address", formdata.address)
    console.log(this.studentForm.status);

    const student: StudentInfo = {
      FirstName: formdata.firstName,
      LastName: formdata.lastName,
      MiddleName: formdata.middleName
    }
    console.log("student", student)


  }

}
