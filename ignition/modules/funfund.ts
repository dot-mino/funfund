import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const funfundModule = buildModule("funfundModule", (m) => {

  const funfund = m.contract("funfund"); 

  return { funfund };
});

export default funfundModule;
