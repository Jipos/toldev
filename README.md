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
$ npm install -g @jipos/toldev
$ tol COMMAND
running command...
$ tol (-v|--version|version)
@jipos/toldev/0.0.0 darwin-x64 node-v10.15.2
$ tol --help [COMMAND]
USAGE
  $ tol COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tol autocomplete [SHELL]`](#tol-autocomplete-shell)
* [`tol commands`](#tol-commands)
* [`tol help [COMMAND]`](#tol-help-command)
* [`tol patch:init ISSUENUMBER`](#tol-patchinit-issuenumber)
* [`tol update [CHANNEL]`](#tol-update-channel)

## `tol autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ tol autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ tol autocomplete
  $ tol autocomplete bash
  $ tol autocomplete zsh
  $ tol autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.1.5/src/commands/autocomplete/index.ts)_

## `tol commands`

list all the commands

```
USAGE
  $ tol commands

OPTIONS
  -h, --help  show CLI help
  -j, --json  output in json format
  --hidden    also show hidden commands
```

_See code: [@oclif/plugin-commands](https://github.com/oclif/plugin-commands/blob/v1.2.3/src/commands/commands.ts)_

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

## `tol patch:init ISSUENUMBER`

describe the command here

```
USAGE
  $ tol patch:init ISSUENUMBER

ARGUMENTS
  ISSUENUMBER  The number of the issue which describes the patch

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/patch/init.ts](https://github.com/Jipos/toldev/blob/v0.0.0/src/commands/patch/init.ts)_

## `tol update [CHANNEL]`

update the tol CLI

```
USAGE
  $ tol update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.3.9/src/commands/update.ts)_
<!-- commandsstop -->
