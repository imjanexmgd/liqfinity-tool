import { loginFunc, registerFunc } from './func.js';
import crypto from 'crypto';
import path from 'path';
import boxen from 'boxen';
import fs from 'fs';
import inquirer from 'inquirer';
import logger from './logger.js';
(async () => {
  try {
    process.stdout.write('\x1Bc');
    console.log(boxen('liqfinity auto reff by janexmgd', { padding: 1 }));
    const { reffCode } = await inquirer.prompt({
      message: 'insert reff code, example U6889',
      type: 'input',
      name: 'reffCode',
    });
    const { manyReff } = await inquirer.prompt({
      message: 'how many reff you want ?',
      type: 'input',
      name: 'manyReff',
    });

    process.stdout.write('\x1Bc');
    let i = 1;
    while (i <= manyReff) {
      logger.info(`ACCOUNT # ${i} / ${manyReff}`);
      const mailname = crypto.randomBytes(4).toString('hex');
      const email = `${mailname}@1secmail.com`;
      logger.info(`using email ${mailname}`);
      const password = 'Test#123123';
      let register;
      try {
        register = await registerFunc(email, password, reffCode);
      } catch (error) {
        logger.error(`email ${email} error:(`);
        // console.log();
        continue;
      }
      logger.info(`success register userid ${register.data.user.id}`);
      const data = `${email} ${password}\n`;
      const filePath = path.join('account.txt');
      fs.appendFileSync(filePath, data, 'utf8');
      logger.info('success save register data\n');
      i++;
      // console.log('\n');
    }
  } catch (error) {
    console.log(error);
  }
})();
