import { Component, OnInit } from '@angular/core';
import { Log } from './shared/utils/log.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'init-project';

  ngOnInit(): void {
    this.testDecoratorMethod('input');
  }

  @Log({ type: 'log', inputs: true, outputs: false })
  testDecoratorMethod(input: string) {
    console.log(`Content of method testingLogDecorator`);
    return `Output : ${input}`;
  }
}
