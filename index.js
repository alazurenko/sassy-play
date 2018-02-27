#!/usr/bin/env node
const argv = require('minimist')(process.argv.slice(2));
const { exec } = require('child_process');
const { promisify } = require('util');
const run = promisify(exec);

const log = (...logs) => console.log(`🎨 sassy-play:`, ...logs);

const folder = argv._[0];

(async () => {
  try {
    if (!folder) {
      log(`please, specify a folder name`);
      return;
    }
    await run(`mkdir ${folder}`);
    await run(`cp -a ${__dirname}/assets/. ${process.cwd()}/${folder}`);
    log('bootstrapping a project for you...');
    const result = await run(`npm i --prefix ${folder}`);
    log(`done! ${process.uptime()} s`);
  } catch (e) {
    log(e.stderr)
  }
})();