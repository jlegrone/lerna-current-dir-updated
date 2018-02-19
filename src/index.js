import isCurrentDirUpdated from './isCurrentDirUpdated';
import { updatedMessage, notUpdatedMessage } from './messages';

function lernaCurrentDirUpdated(options = {}) {
  const result = isCurrentDirUpdated(options);

  if (result.error) {
    console.error(result.error);
    process.exit(1);
  }

  if (result.updated) {
    console.log(updatedMessage(result.package));
    if (options.exitIfUpdated) {
      process.exit(1);
    }
  } else {
    console.log(notUpdatedMessage(result.package));
    if (!options.exitIfUpdated) {
      process.exit(1);
    }
  }
}

module.exports = lernaCurrentDirUpdated;
