# :clipboard: erc1820-ethers-registry

Simple script to deploy an ERC1820 registry in a testing environment that uses ethers.js

&nbsp;

***

&nbsp;

## :boom: Installation

```
npm install erc1820-ethers-registry
```

&nbsp;

***

&nbsp;

## :rocket: Usage

```js
const singletons = require('erc1820-ethers-registry')
const accounts = await ethers.getSigners()
await singletons.ERC1820Registry(accounts[0])
```