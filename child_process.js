const helpers = require('./helpers');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

main();

async function main() {
  console.log('create hello.js');
  await exec('touch ./tmp/hello.js');

  const { stdout, stderr } = await exec('ls ./tmp');
  console.log('\nstdout:\n', stdout);

  await helpers.sleep(2500);

  console.log('remove hello.js');
  await exec('rm ./tmp/hello.js');
}
