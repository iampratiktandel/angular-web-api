import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { faDatabase, faEnvelope, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges {
  private _user: any;

  @Input() set user(value: any) {
    this._user = value;
  }

  get user(): any {
    return this._user;
  }

  @Output() changeUser: EventEmitter<string>;

  faEnvelope = faEnvelope;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faDatabase = faDatabase;
  
  constructor() { 
    this.user = [];
    this.changeUser = new EventEmitter()
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.user);
  }

  public getUser() {
    this.changeUser.emit('');
  }

}
