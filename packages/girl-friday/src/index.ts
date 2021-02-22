export * from './lib/level';
export * from './lib/logger';
export * from './lib/transporter';
export * from './lib/transporter-config';
export { Transporters };

import { ConsoleTransporter } from './lib/transporters/console.transporter';

const Transporters = { ConsoleTransporter: ConsoleTransporter };
