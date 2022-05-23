# `@draft-flysystem-ts/cli`
> this project is not completed yet

## With this CLI it will be more easy to create your own adapter that will be compatible with [@draft-flysystem-ts](https://nik-selecto.github.io/draft-flysystem-ts)

## Description:
This CLI will help you to write your custom adapter for [FileSystem class](https://nik-selecto.github.io/draft-flysystem-ts/packages/flysystem). It use [Yeoman](https://yeoman.io) under the hood. So you should install it on your machine.

---
> This CLI will scaffolding the template for project to create custom adapter. It will generate class for your adapter with implementing AdapterInterface, setting eslint etc.

## Installation:
* Install yeoman generator globaly
```
npm i -g yo
```
* Clone this repository
```
git clone https://github.com/nik-selecto/generator-draft-flysystem-ts-cli.git
```
* Enter to the repository and link it
```
cd generator-draft-flysystem-ts-cli && npm link && cd ..
```
* Run cli (optionaly you may add name of the adapter(the same with project, root-folder...) add the end of below command)
```
yo draft-flysystem-ts-cli
```
* Enter to recently generated project and build awesome adapter!
