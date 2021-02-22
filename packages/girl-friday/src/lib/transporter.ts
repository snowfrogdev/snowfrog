import { Level } from "./level";

export abstract class Transporter {
  abstract write(level: Level, message: string): void;
}
