# lerna-current-dir-updated

[![npm version](https://badge.fury.io/js/lerna-current-dir-updated.svg)](https://badge.fury.io/js/lerna-current-dir-updated)

`lerna-current-dir-updated` provides a simple way to check whether the current working directory is part of a [lerna](https://lernajs.io) package that has been updated.

This can be especially useful when you wish to naively determine whether to run tests from a given directory in CI environments.

## Installation

```bash
$ npm install --global lerna-current-dir-updated
```

**Note**: [lerna](https://lernajs.io) must already be in your path (installed globally) in order for `lerna-current-dir-updated` to work.

## Usage

```bash
$ cd packages/my-package-name
$ lerna-current-dir-updated --since master && npm test
my-package-name is updated.
... # npm test output
```

```bash
$ cd packages/my-package-name
$ lerna-current-dir-updated --since develop && npm test
my-package-name is not updated.
```

`lerna-current-dir-updated` accepts the same flags as the [lerna updated](https://github.com/lerna/lerna#updated) command.