import { Component } from '@angular/core';
import { TestService } from './test/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tmp';
  condition = true;

  constructor(private myService: TestService){}

  onChange(event: any) {
    this.title = this.myService.getName();
    this.condition = false;
    // this.title = ' new name'
  }
}
