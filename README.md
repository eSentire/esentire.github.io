#### esentire.github.io

## Table of Contents

1. [Overview](#overview)
1. [Grafana Prototyping Enviromment (grape)](#grafana-prototyping-environment)
1. [Quantum Safe Password Manager (qspm)](#quantum-safe-password-manager)

## Overview
eSentire strives to be an active participant in the open source community because we feel that the
community driven approach to solving problems in a transparent way can lead to faster, more cost effective,
reliable and secure solutions to interesting problems.

## Grafana Prototyping Environment
The Grafana prototyping environment is a repository that provides a tool named `grape` that
enables you to easily create Grafana visualizations using Docker containers to create a Grafana server and
a PostgreSQL database on your laptop that can be saved and used in other environments without having
to install any Grafana or database specific software.

* The project is available [here](https://github.com/eSentire/grape).

## Quantum Safe Password Manager
The quantum safe password manager (`qspm`) is a single page application (SPA) demonstration
webapp that shows how to build a simple password management system using symmetric key encryption
algorithms that are safe from currently known quantum attacks.

One of the interesting features of this project is the use of the Rust programming language to
implement the algorithms that are then converted to WebAssembly for higher performance, 
secure encryption/decryption operations in the browser.

Another interesting feature is the ability to choose between different algorithms.

Yet another interesting feature is the use of the Github Workflow Actions service to
test both the Rust code and the web interface using a headless chrome browser and
[pyleniumio](https://github.com/ElSnoMan/pyleniumio).

* The webapp is available [here](https://esentire.github.io/qspm/).
* The project is available [here](https://github.com/eSentire/qspm).
