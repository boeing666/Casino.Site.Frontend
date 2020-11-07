import {Component, OnInit} from '@angular/core';
import {SignalrService} from '../../../services/signalr.service';
import {datepickerAnimation} from 'ngx-bootstrap/datepicker/datepicker-animations';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css']
})
export class RouletteComponent implements OnInit {

  constructor(public signalrHub: SignalrService) {
  }

  ngOnInit(): void {
    this.signalrHub.startConnection();
    this.addListeners();
  }

  public addListeners(): void {
    this.signalrHub.hubConnection.on('joinRoulette', (data) => {
      console.log(data);
    });

    this.signalrHub.hubConnection.on('JoinRoulette', (data) => {
      console.log(data);
    });
    this.signalrHub.hubConnection.on('BettingTimeStart', (data) => {
      console.log(data);
    });
    this.signalrHub.hubConnection.on('bettingTimeStart', (data) => {
      console.log(data);
    });
  }
}
