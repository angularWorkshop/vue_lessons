import { spawn } from 'node:child_process';

function start(name, command, args) {
  const child = spawn(command, args, {
    stdio: 'inherit',
    shell: false,
  });

  child.on('exit', code => {
    if (code && code !== 0) {
      console.error(`${name} exited with code ${code}`);
    }
  });

  return child;
}

const vite = start('vite', 'node', ['./node_modules/vite/bin/vite.js', '--host', '0.0.0.0']);
const status = start('status', 'node', ['./scripts/stackblitz-status.mjs']);

function shutdown() {
  vite.kill('SIGTERM');
  status.kill('SIGTERM');
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

