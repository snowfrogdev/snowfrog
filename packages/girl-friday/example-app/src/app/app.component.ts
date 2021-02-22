import { Component } from '@angular/core';
import { Logger } from 'girl-friday';
import { Level } from 'packages/girl-friday/src/lib/level';
import { ConsoleTransporter } from 'packages/girl-friday/src/lib/transporters/console.transporter';

@Component({
  selector: 'snowfrog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'girl-friday-example-app';

  constructor() {
    const logger = new Logger([{ level: Level.Trace, transporter: new ConsoleTransporter() }]);
    logger.trace('trace');
    logger.debug('debug');
    logger.info('info');
    logger.warn('warn');
    logger.error('error');
    logger.fatal('fatal');
  }
}
