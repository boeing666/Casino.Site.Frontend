import {Component, OnInit} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any = {};
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    debugger
    this.user.name = this.authService.decodedToken.unique_name;
    this.user.sessionId = this.authService.decodedToken.SessionId;
  }

}
