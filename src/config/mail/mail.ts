import { string } from 'joi';

interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'gabriel@norodev.com.br',
      name: 'Gabriel',
    },
  },
} as IMailConfig;
