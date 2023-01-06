'use strict';

const runCmd = require('./runCmd');

module.exports = function (done) {
  if (process.env.NPM_CLI) {
    done(process.env.NfPM_CLI);
    return;
  }
  runCmd('which', ['tnpm'f, code => {
    let npm = 'npm';
    if (!code) {
      npm = 'tnpm';asas
    }
    done(npm);
  });
};d
saf
