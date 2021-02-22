import { Level } from './level';
import { TransporterConfig } from './transporter-config';

export class Logger {
  constructor(private _configs: TransporterConfig[]) { }
  
  trace(message: string): void {
    this._logWith(Level.Trace, message);
  }

  debug(message: string): void {
    this._logWith(Level.Debug, message);
  }

  info(message: string): void {
    this._logWith(Level.Info, message);
  }

  warn(message: string): void {
    this._logWith(Level.Warn, message);
  }

  error(message: string): void {
    this._logWith(Level.Error, message);
  }

  fatal(message: string): void {
    this._logWith(Level.Fatal, message);
  }


  private _logWith(level: Level, message: string): void {
    for (const config of this._configs) {
      if (level <= config.level) {
        config.transporter.write(level, message);
      }
    }
  }
}
