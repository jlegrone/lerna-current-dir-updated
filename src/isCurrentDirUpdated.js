import readPkgUp from 'read-pkg-up';
import isPackageUpdated from './isPackageUpdated';

export default function isCurrentDirUpdated(options) {
  try {
    const pkgName = readPkgUp.sync().pkg.name;
    const updated = isPackageUpdated(pkgName, options);
    return { package: pkgName, updated };
  } catch(e) {
    let error = e.stderr ? e.stderr.toString().replace(/\n$/, '') : e;
    return { error, updated: false };
  }
}
