#!/usr/bin/env node
const argv = require('minimist')(process.argv.slice(2));
const { exec } = require('child_process');
const { promisify } = require('util');
const run = promisify(exec);

const folder = argv._[0];

(async () => {
  try {
    await run(`mkdir ${folder}`);
    await run(`cp -a ${__dirname}/assets/. ${process.cwd()}/${folder}`);
    console.log('🎨 sassy-play: bootstrapping a project for you...');
    const result = await run(`npm i --prefix ${folder}`);
    console.log(`🎨 sassy-play: done! ${process.uptime()} s`);
  } catch (e) {
    console.log(e.stderr)
  }
})();