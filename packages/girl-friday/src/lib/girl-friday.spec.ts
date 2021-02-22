import { GirlFriday } from './girl-friday';
import { Transporter } from './transporter';



describe('girlFriday', () => {
  test('#info message is passed to registered transporters', () => {
    let param1: string;
    let param2: string;
    const transporter1: Transporter = { write: (message) => param1 = message }
    const transporter2: Transporter = { write: (message) => param2 = message }

    const logger = new GirlFriday([transporter1, transporter2]);
    const message = 'This is a test';
    
    logger.info(message);

    expect(param1).toBe(message);
    expect(param2).toBe(message);
  });
});
