import getUpdatedPackages from './getUpdatedPackages';

export default function isPackageUpdated(pkgName, options = {}) {
  return !!getUpdatedPackages(options)
    .find(pkg => pkg.name === pkgName);
}
