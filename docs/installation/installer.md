---
sidebar_position: 4
---

# Installer script

You can install sloscribe using the installer script present in the repository.
This will install the sloscribe binary for your host machine OS and architecture (**linux and macOS**),
under `~/.sloscribe/bin` directory.

## Requirements

To install the tool using this method you'll require:

* tar
* cURL

Present on your host machine.

## Installation

Simply run, in your terminal:

```shell
curl -sfL https://raw.githubusercontent.com/slosive/sloscribe/main/install.sh | sh -
```

Then follow the instruction returned to the terminal.

## Verify Installation

```shell
sloscribe --help
```

The binary should return something similar to:

```shell
Generate Sloth SLO/SLI definitions from code annotations.

Usage:
  sloscribe [command]

Available Commands:
  completion  Generate the autocompletion script for the specified shell
  help        Help about any command
  init        Init generates the Sloth definition specification from source code comments.
  version     Returns the binary build information.

Flags:
  -h, --help               help for sloscribe
      --log-level string   Only log messages with the given severity or above. One of: [none, debug, info, warn], errors will always be printed (default "info")

Use "sloscribe [command] --help" for more information about a command.
```
