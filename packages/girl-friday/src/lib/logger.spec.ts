import { Level } from './level';
import { Logger } from './logger';
import { Transporter } from './transporter';



describe('Logger', () => {
  test('#info message is passed to registered transporter when logging level set to info', () => {
    let param: string;
    const transporter: Transporter = { write: (message) => param = message };

    const logger = new Logger([{ level: Level.Info, transporter: transporter }]);
    const message = 'This is a test';

    logger.info(message);

    expect(param).toBe(message);
  });

  test('#info message is passed to registered transporter when logging level set to debug', () => {
    let param: string;
    const transporter: Transporter = { write: (message) => param = message };

    const logger = new Logger([{ level: Level.Debug, transporter: transporter }]);
    const message = 'This is a test';

    logger.info(message);

    expect(param).toBe(message);
  });

  test('#info message is not passed to registered transporter when logging level set to error', () => {
    let hasBeenCalled = false;
    const transporter: Transporter = { write: () => hasBeenCalled = true };

    const logger = new Logger([{ level: Level.Error, transporter: transporter }]);
    const message = 'This is a test';

    logger.info(message);

    expect(hasBeenCalled).toBeFalsy();
  });
});
