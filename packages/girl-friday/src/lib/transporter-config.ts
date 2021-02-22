import { Level } from './level';
import { Transporter } from './transporter';

export interface TransporterConfig {
  level: Level;
  transporter: Transporter;
}
