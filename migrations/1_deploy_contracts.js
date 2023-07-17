/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const Crud = artifacts.require("Crud");

module.exports = async (deployer, network, accounts) => {
    await deployer.deploy(Crud);
};
