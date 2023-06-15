---
sidebar_position: 4
---

# Installer script

You can install slotalk using the installer script present in the repository.
This will install the slotalk binary for your host machine OS and architecture (**linux and macOS**),
under `~/.slotalk/bin` directory.

## Requirements

To install the tool using this method you'll require:

* tar
* cURL

Present on your host machine.

## Installation

Simply run, in your terminal:

```shell
curl -sfL https://raw.githubusercontent.com/tfadeyi/slotalk/main/install.sh | sh -
```

Then follow the instruction returned to the terminal.

## Verify Installation

```shell
slotalk --help
```

The binary should return something similar to:

```shell
Generate Sloth SLO/SLI definitions from code annotations.

Usage:
  slotalk [command]

Available Commands:
  completion  Generate the autocompletion script for the specified shell
  help        Help about any command
  init        Init generates the Sloth definition specification from source code comments.
  version     Returns the binary build information.

Flags:
  -h, --help               help for slotalk
      --log-level string   Only log messages with the given severity or above. One of: [none, debug, info, warn], errors will always be printed (default "info")

Use "slotalk [command] --help" for more information about a command.
```
