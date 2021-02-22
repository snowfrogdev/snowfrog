import { Level } from "../level";
import { Transporter } from "../transporter";

export class ConsoleTransporter extends Transporter {
  write(level: Level, message: string): void {
    switch (level) {
      case Level.Fatal:
      case Level.Error:
        console.error(message);
        break;
      case Level.Warn:
        console.warn(message);
        break;
      case Level.Info:
        console.info(message);
        break;
      case Level.Debug:
      case Level.Trace:
        console.debug(message);
    }
  }

}