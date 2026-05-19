#!/usr/bin/env node
/**
 * notify.js — fires when a Claude Code task finishes
 *
 * Usage: add to your Claude Code hooks config or call directly:
 *   node scripts/notify.js "Task complete: tests written"
 *
 * Notification methods (tries each in order, uses first available):
 *   1. macOS system notification (osascript)
 *   2. Terminal bell + printed message (fallback — always works)
 */

const { execSync } = require('child_process');
const message = process.argv[2] || 'Claude task complete';

function notifyMac(msg) {
  execSync(`osascript -e 'display notification "${msg}" with title "Claude Code" sound name "Submarine"'`);
}

function notifyLinux(msg) {
  execSync(`notify-send "Claude Code" "${msg}"`);
}

function notifyTerminal(msg) {
  process.stdout.write('\x07'); // terminal bell
  console.log(`\n✓ ${msg}\n`);
}

const platform = process.platform;

try {
  if (platform === 'darwin') {
    notifyMac(message);
    notifyTerminal(message); // also print so it's visible in tmux/splits
  } else if (platform === 'linux') {
    notifyLinux(message);
    notifyTerminal(message);
  } else {
    notifyTerminal(message);
  }
} catch {
  // never fail silently when demoing — always show something
  notifyTerminal(message);
}
