import { LightningElement ,track} from 'lwc';
export default class Recordcreation extends LightningElement {
Firstname;
Lastname;
 @track nameList = [];
  FirstNameChange(event){
     this.Firstname = event.target.value;
  }
  secondNameChange(event){
    this.Lastname = event.target.value;
  }
handleClick(){
  console.log('calling the method');
  this.nameList = [...this.nameList, {
                id: this.nameList.length + 1,
                Firstname: this.Firstname,
                Lastname: this.Lastname
            }];
  console.log('students'+JSON.stringify(this.nameList));
}
}