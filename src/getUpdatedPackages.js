import { execSync } from 'child_process';

export default function getUpdatedPackages(options = {}) {
  const args = options.arguments || [];

  return JSON.parse(
    execSync(`lerna ls ${args.join(' ')} --json`, { stdio: 'pipe' }).toString()
  );
}
