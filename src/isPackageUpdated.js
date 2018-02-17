import { execSync } from 'child_process';

export default function isPackageUpdated(pkgName, options = {}) {
  const args = options.arguments || [];
  return execSync(`lerna updated ${args.join(' ')}`, { stdio: 'pipe' })
    .toString()
    .includes(pkgName);
}
