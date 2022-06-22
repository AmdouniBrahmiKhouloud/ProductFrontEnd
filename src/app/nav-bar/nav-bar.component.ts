import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
@Input() isLogged!:boolean;
@Input() isAdmin!: boolean;
@Input() username!: string;
  constructor(private  loginService:LoginService) { }

  ngOnInit(): void {
  }
  public login():void{
    this.loginService.login();}
  public logout():void{
    this.loginService.logout();}
}
