import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DUMMY_USERS} from "../dummy-users";


const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// interface User{
//   id:string;
//   avatar:string;
//   name:string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required:true}) user!: User
  @Output() select = new EventEmitter();
  // get imagePath(){
  //   return 'assets/users/' + this.user.avatar;
  // }
  //
  // onSelectUser(){
  //   this.select.emit(this.user.id);
  // }
  //old code soon to be removed
   @Input({required:true}) id !: string;
   @Input({required: true}) avatar !: string;
   @Input({required:true }) name !: string;
   @Input({required:true }) selected !:boolean;

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() =>{
  //   return 'assets/users/' + this.avatar();
  // })

  get imagePath(){
    return 'assets/users/' + this.avatar;
  }

  onSelectUser(){
    this.select.emit(this.id);
  }
}
