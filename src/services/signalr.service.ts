import {Injectable} from '@angular/core';
import * as signalR from '@aspnet/signalr';
import {environment} from '../environments/environment';
import {log} from 'util';
import {IHttpConnectionOptions} from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})

export class SignalrService {
  public hubConnection: signalR.HubConnection;
  private url = environment.rouletteUrl + '/roulette';

   options: IHttpConnectionOptions = {
    accessTokenFactory(): string | Promise<string> {
      return localStorage.getItem('token');
    }
  };
  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.url, this.options).build();
    this.hubConnection.start()
      .then(() => console.log('Connection Started'))
      .catch(err => console.log('error while starting connection', err));
  }
}
