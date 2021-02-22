import { Level } from './level';
import { Logger } from './logger';
import { Transporter } from './transporter';



describe('Logger', () => {
  test('#info message is passed to registered transporters when logging levels set to info', () => {
    let param1: string;
    let param2: string;
    const transporter1: Transporter = { write: (message) => param1 = message };
    const transporter2: Transporter = { write: (message) => param2 = message };

    const logger = new Logger([{ level: Level.Info, transporter: transporter1 }, { level: Level.Info, transporter: transporter2 }]);
    const message = 'This is a test';

    logger.info(message);

    expect(param1).toBe(message);
    expect(param2).toBe(message);
  });
});
