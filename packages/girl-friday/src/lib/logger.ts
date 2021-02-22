import { TransporterConfig } from "./transporter-config";

export class Logger {
  constructor(private _configs: TransporterConfig[]) {}
  info(message: string): void {
    this._configs.forEach(config => config.transporter.write(message));
  }
}