import { Transporter } from "./transporter";

export class GirlFriday {
  constructor(private _transporters: Transporter[]) {}
  info(message: string): void {
    this._transporters.forEach(transporter => transporter.write(message));
  }
}