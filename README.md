toldev
======

The Toledo CLI to upgrade your development experience

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/toldev.svg)](https://npmjs.org/package/toldev)
[![Codecov](https://codecov.io/gh/Jipos/toldev/branch/master/graph/badge.svg)](https://codecov.io/gh/Jipos/toldev)
[![Downloads/week](https://img.shields.io/npm/dw/toldev.svg)](https://npmjs.org/package/toldev)
[![License](https://img.shields.io/npm/l/toldev.svg)](https://github.com/Jipos/toldev/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g toldev
$ tol COMMAND
running command...
$ tol (-v|--version|version)
toldev/0.0.0 darwin-x64 node-v10.15.2
$ tol --help [COMMAND]
USAGE
  $ tol COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tol help [COMMAND]`](#tol-help-command)
* [`tol patch:init [ISSUENUMBER]`](#tol-patchinit-file)

## `tol help [COMMAND]`

display help for tol

```
USAGE
  $ tol help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `tol patch:init [FILE]`

Initializes a new patch in the toledo-patches repo.

```
USAGE
  $ tol patch:init [ISSUENUMBER]

ARGUMENTS
  ISSUENUMBER     The number of the issue which describes the patch

OPTIONS
  -h, --help       show CLI help
```

_See code: [src/commands/patch/init.ts](https://github.com/Jipos/toldev/blob/v0.0.0/src/commands/patch/init.ts)_
<!-- commandsstop -->
