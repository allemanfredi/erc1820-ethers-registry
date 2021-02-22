const { ERC1820_REGISTRY_ABI, ERC1820_REGISTRY_ADDRESS, ERC1820_REGISTRY_DEPLOY_TX } = require('./data')

const ERC1820Registry = async (_wallet) => {
  if ((await ethers.provider.getCode(ERC1820_REGISTRY_ADDRESS)).length > '0x0'.length) {
    return getDeployedERC1820Registry()
  }

  await _wallet.sendTransaction({
    from: _wallet.address,
    to: '0xa990077c3205cbDf861e17Fa532eeB069cE9fF96',
    value: '0x31250000000000000',
    gasPrice: 0,
  })

  await ethers.provider.sendTransaction(ERC1820_REGISTRY_DEPLOY_TX)
  return getDeployedERC1820Registry()
}

const getDeployedERC1820Registry = () =>
  new ethers.Contract(ERC1820_REGISTRY_ADDRESS, ERC1820_REGISTRY_ABI, ethers.getDefaultProvider())

module.exports = {
  ERC1820Registry,
}
