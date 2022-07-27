import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 4 of MCV2) should always be at the top of the file.
   */
  {
    pid: 0, // Masterchef version 2
    v1pid: 0, // Masterchef version 1 pid=0
    lpSymbol: 'GSYS',
    lpAddresses: {
      97: '',
      56: '0xc073eb514B96cFbe470b0d23e0a620BaE73ee165', // token gsys
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2, // Masterchef version 2
    v1pid: 1, // Masterchef version 1 pid=251
    lpSymbol: 'GSYS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x30B2Ab2DEcF53F25030C784046f8038BF8DE6107', // gsys bnb lp
    },
    token: serializedTokens.gsys,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 4, // Masterchef version 2
    v1pid: 2, // Masterchef version 1 pid=252
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8e6C329820dCdd49506Ac3CB1874337f014537b9', // busd bnb lp
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 5, // Masterchef version 2
    lpSymbol: 'GSYS-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xCbCb0D46aEfd1e74D2ad2489b0b812f76bceB3C2', // gsys busd lp
    },
    token: serializedTokens.gsys,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 6, // Masterchef version 2
    lpSymbol: 'GSYS-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xA3A70Ddf8dEd09Ab29bc1e25B78169DdeC3724F8', // gsys usdt lp
    },
    token: serializedTokens.gsys,
    quoteToken: serializedTokens.usdt,
  },
  // new farms june 2022
  {
    pid: 7, // Masterchef version 2
    lpSymbol: 'GSYS-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0x1e3a9F2da1dA390584b1C0A60D3801B4c7a1b551', // gsys cake lp
    },
    token: serializedTokens.gsys,
    quoteToken: serializedTokens.cake,
  },
  {
    pid: 8, // Masterchef version 2
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x45B34dEDbdCE9A6960766D552C5cAada872912CC', // gsys cake lp
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 9, // Masterchef version 2
    lpSymbol: 'SHIB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xc90257d9687Ea252d415E67ef043dF683A16f6Cb', // shib-bnb lp
    },
    token: serializedTokens.shib,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 10, // Masterchef version 2
    lpSymbol: 'SHIB-GSYS LP',
    lpAddresses: {
      97: '',
      56: '0xD7678896A82d5E5508Fa407bD5cAD44C09eC37ff', // gsys shib lp
    },
    token: serializedTokens.shib,
    quoteToken: serializedTokens.gsys,
    isCommunity: false,
  },
].filter((f) => !!f.lpAddresses[CHAIN_ID])

export default farms
