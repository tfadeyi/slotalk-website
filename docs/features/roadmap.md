---
sidebar_position: 1
---

# Roadmap

## v0.1.0-alpha.2 ✅

* Add support for multiple Sloth service specifications. ✅
* Improve test coverage. ✅
* Update documentation. ✅
* Add support for saving specifications to file, `--to-file` flag. ✅
* Add support for specifying the service specification to output, with `--service` flag. ✅

## v0.1.0-alpha.3 ✅

* Add installation script. ✅
* Add github action. ✅
* Fix build information injection for version command. ✅
* Improve documentation. ✅
* Launch documentation website. ✅
* Update the service flag to handle multiple services as input. ✅
* Add the `--specification` flag to allow sloscribe to parse for different specifications other than Sloth. ✅
* Add support to parse `sloth` annotations and return Sloth kubernetes objects by passing `sloth-k8s` the `--specification` flag. ✅

## v0.1.0-alpha.4
* Add support to allow multiple SLO definitions per comment group.
* Better docs.
* Better error handling.

## v0.1.0-beta.1
* Improve tests coverage
* Add support to generate SLOs for Prometheus alert groups without Sloth.
  * Introduce a new annotation `@prometheus`.