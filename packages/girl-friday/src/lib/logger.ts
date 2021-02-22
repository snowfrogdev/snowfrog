import { Level } from "./level";
import { TransporterConfig } from "./transporter-config";

export class Logger {
  constructor(private _configs: TransporterConfig[]) {}
  info(message: string): void {
    this._logWith(Level.Info, message);
  }

  private _logWith(level: Level, message: string): void {
    for (const config of this._configs) {
      if (level <= config.level) {
        config.transporter.write(message);
      }
    }
  }
}