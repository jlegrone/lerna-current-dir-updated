# lerna-current-dir-updated

[![npm version](https://badge.fury.io/js/lerna-current-dir-updated.svg)](https://badge.fury.io/js/lerna-current-dir-updated)

`lerna-current-dir-updated` provides a simple way to check whether the current working directory is part of a [lerna](https://lernajs.io) package that has been updated.

This can be especially useful when you wish to naively determine whether to run tests from a given directory in CI environments.

## Installation

```bash
$ npm install --global lerna-current-dir-updated
```

**Note**: [lerna](https://lernajs.io) must already be in your path (installed globally) in order for this package to work.

## Usage

`lerna-current-dir-updated` and `lerna-current-dir-not-updated` accept the same flags as the [lerna list](https://github.com/lerna/lerna/tree/master/commands/list) command.

### `lerna-current-dir-updated`

Exits non-zero if the current directory *has not* been updated.

```bash
$ cd packages/my-package-name
$ lerna-current-dir-updated --since develop && npm test
my-package-name is not updated.
```

### `lerna-current-dir-not-updated`

Exits non-zero if the current directory *has* been updated.

This command can be chained with another using an OR operator in order to avoid exiting non-zero in CI environments. In the below example tests are only run if the package has been updated, and nothing will show as a failure in CI unless `npm test` fails to pass.

```bash
$ cd packages/my-package-name
$ lerna-current-dir-not-updated --since master || npm test
my-package-name is updated.
... # npm test output
```
