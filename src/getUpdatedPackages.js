import { execSync } from 'child_process';

export default function getUpdatedPackages(options = {}) {
  const args = options.arguments || [];
  try {
    return JSON.parse(
      execSync(`lerna updated ${args.join(' ')} --json`, { stdio: 'pipe' }).toString()
    );
  } catch(e) {
    if (e.stderr.toString().includes('No packages')) {
      return [];
    } else {
      throw e;
    }
  }
}
