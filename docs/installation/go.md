---
sidebar_position: 1
---

# Go Install

You can install **sloscribe** into your machine using the `go install` command.

## Requirements

To install the tool using this method you'll require:

* Go 1.18+

Present on your host machine.

## Installation

Simply run, in your terminal:

```shell
# install the latest version of sloscribe
go install github.com/slosive/sloscribe@latest
```

This will install the latest sloscribe binary under the path: `$(go env GOPATH)/bin/sloscribe`.

> You can install different versions by setting the tag to the target version: go install github.com/slosive/sloscribe@v0.1.0-alpha.2 

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

## Uninstall 😢

To uninstall the tool you can simply delete the binary from the following directory.

```shell
rm $(go env GOPATH)/bin/sloscribe
```
