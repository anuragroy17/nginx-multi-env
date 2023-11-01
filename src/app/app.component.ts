import { Component, OnInit } from '@angular/core';
import { Environment } from './environment.interface';

declare let __config: Environment;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'nginx-multi-env';
  apiUrl = __config.apiUrl;
  environment = __config.environment;

  ngOnInit(): void {
    console.log('ApiUrl: ' + this.apiUrl);
  }
}
