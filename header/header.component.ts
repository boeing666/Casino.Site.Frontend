import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.model.username = 'Zulu';
    this.model.password = 'Boeing666';
    this.authService.login(this.model).subscribe(next => {
      console.log('logged from header', next);
    });
  }

  loggedIn(): boolean {
    return this.authService.loggedIn();
  }

}
