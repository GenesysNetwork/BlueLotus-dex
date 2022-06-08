import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0, // version 2
    v1pid: 0, // version 1
    lpSymbol: 'GSYS',
    lpAddresses: {
      97: '',
      56: '0xc073eb514B96cFbe470b0d23e0a620BaE73ee165',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2, // version 2
    v1pid: 1, // version 1
    lpSymbol: 'GSYS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x30B2Ab2DEcF53F25030C784046f8038BF8DE6107', // gsys bnb lp
    },
    token: serializedTokens.gsys,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 3, // version 2
    v1pid: 2, // version 1
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8e6C329820dCdd49506Ac3CB1874337f014537b9', // busd bnb lp
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  // {
  //   pid: 1, // version 2
  //   v1pid: 3, // version 1
  //   lpSymbol: 'GSYS-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xCbCb0D46aEfd1e74D2ad2489b0b812f76bceB3C2', // gsys busd lp
  //   },
  //   token: serializedTokens.gsys,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 5, // version 2
  //   v1pid: 4, // version 1
  //   lpSymbol: 'GSYS-USDT LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xA3A70Ddf8dEd09Ab29bc1e25B78169DdeC3724F8', // gsys usdt lp
  //   },
  //   token: serializedTokens.gsys,
  //   quoteToken: serializedTokens.usdt,
  // },

  // //    * V3 by order of release (some may be out of PID order due to multiplier boost)
  // {
  //   pid: 38,
  //   v1pid: 386,
  //   lpSymbol: 'HOTCROSS-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xf23bad605e94de0e3b60c9718a43a94a5af43915',
  //   },
  //   token: serializedTokens.hotcross,
  //   quoteToken: serializedTokens.wbnb,
  //   auctionHostingStartSeconds: 1653649200,
  // },
  // {
  //   pid: 94,
  //   v1pid: 525,
  //   lpSymbol: 'WZRD-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xee456d906a38e10680c9d157FFf143390e9681bA',
  //   },
  //   token: serializedTokens.wzrd,
  //   quoteToken: serializedTokens.busd,
  //   isCommunity: true,
  //   auctionHostingStartSeconds: 1653649200,
  // },
  // {
  //   pid: 96,
  //   lpSymbol: '8PAY-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x92c3E2cddDb0CE886bCA864151BD4d611A86E563',
  //   },
  //   token: serializedTokens['8pay'],
  //   quoteToken: serializedTokens.busd,
  //   isCommunity: true,
  //   auctionHostingStartSeconds: 1653649200,
  // },
  // {
  //   pid: 101,
  //   lpSymbol: 'MIX-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7618fdAb208aE23690dadD3aa4a42a442313d24E',
  //   },
  //   token: serializedTokens.MIX,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 100,
  //   lpSymbol: 'METIS-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x69AFe59e88614501c3fDEb7480f12DBA0A414032',
  //   },
  //   token: serializedTokens.metis,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 99,
  //   lpSymbol: 'XCN-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xF01eD80d46759c0cf6A3e9c66856017d81284962',
  //   },
  //   token: serializedTokens.xcn,
  //   quoteToken: serializedTokens.wbnb,
  //   isCommunity: true,
  // },
  // {
  //   pid: 98,
  //   lpSymbol: 'GAL-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbe6A4f74fdDc88853612C50D7404E059b37692D8',
  //   },
  //   token: serializedTokens.gal,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 97,
  //   lpSymbol: 'RPG-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x55cdb14855220b239Cf857A03849D96736b9103f',
  //   },
  //   token: serializedTokens.rpg,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 93,
  //   v1pid: 524,
  //   lpSymbol: 'HAPPY-BNB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x008604A38cD589680F7B8f085DC2D5B4F81151dB',
  //   },
  //   token: serializedTokens.happy,
  //   quoteToken: serializedTokens.wbnb,
  //   isCommunity: true,
  // },
  // {
  //   pid: 95,
  //   lpSymbol: 'aBNBc-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x272c2CF847A49215A3A1D4bFf8760E503A06f880',
  //   },
  //   token: serializedTokens.abnbc,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 92,
  //   v1pid: 523,
  //   lpSymbol: 'CEEK-BNB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x046A9B3A9b743340eE2Bc4C6dDD35543E237C6c2',
  //   },
  //   token: serializedTokens.ceek,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 91,
  //   v1pid: 522,
  //   lpSymbol: 'TINC-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0d5b9A0f4315a4bcE36D1Ea7d6B6d3123167aFAa',
  //   },
  //   token: serializedTokens.tinc,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 90,
  //   v1pid: 520,
  //   lpSymbol: 'PEX-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x5ca96E8bDe0Bc587DaC9e02422Fd205b1102DAa4',
  //   },
  //   token: serializedTokens.pex,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 89,
  //   v1pid: 519,
  //   lpSymbol: 'GMI-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x58d4B61983Ca0aFE6E352e90719F403E24e016F4',
  //   },
  //   token: serializedTokens.gmi,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 88,
  //   v1pid: 518,
  //   lpSymbol: 'FROYO-CAKE LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1CCc3cC95c8148477Afd18a552f03835Be9D182a',
  //   },
  //   token: serializedTokens.froyo,
  //   quoteToken: serializedTokens.cake,
  // },
  // {
  //   pid: 87,
  //   v1pid: 516,
  //   lpSymbol: 'BSW-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x8ca3ff14a52b080c54a6d1a405eeca02959d39fe',
  //   },
  //   token: serializedTokens.bsw,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 86,
  //   v1pid: 515,
  //   lpSymbol: 'DUET-CAKE LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbDF0aA1D1985Caa357A6aC6661D838DA8691c569',
  //   },
  //   token: serializedTokens.duet,
  //   quoteToken: serializedTokens.cake,
  // },
  // {
  //   pid: 85,
  //   v1pid: 514,
  //   lpSymbol: 'GMT-USDC LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x007EC643C7Cc33a70C083fC305c283dd009C8b94',
  //   },
  //   token: serializedTokens.gmt,
  //   quoteToken: serializedTokens.usdc,
  // },
  // {
  //   pid: 84,
  //   v1pid: 513,
  //   lpSymbol: 'ERA-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x53a63ac301d6410915385294527f947aff616599',
  //   },
  //   token: serializedTokens.era,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 83,
  //   v1pid: 510,
  //   lpSymbol: 'BTT-BUSD',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xB7E73DaEe6A6Ca37A21f8E4bfba4DA448DFE4d92',
  //   },
  //   token: serializedTokens.btt,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 82,
  //   v1pid: 509,
  //   lpSymbol: 'ACH-USDT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x28BDb16b623176426305a70D8B475bE73Aca71f3',
  //   },
  //   token: serializedTokens.ach,
  //   quoteToken: serializedTokens.usdt,
  // },
  // {
  //   pid: 81,
  //   v1pid: 507,
  //   lpSymbol: 'RACA-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x8e744ec2795c8b836689d1b4ebe1489204357dac',
  //   },
  //   token: serializedTokens.raca,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 80,
  //   v1pid: 506,
  //   lpSymbol: 'ERTHA-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x70531B39E2Bb4d8dA59E2Ce41a98eBA2990F8497',
  //   },
  //   token: serializedTokens.ertha,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 79,
  //   v1pid: 505,
  //   lpSymbol: 'FUSE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6483F166b9E4310A165a55FEa04F867499aded06',
  //   },
  //   token: serializedTokens.fuse,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 78,
  //   v1pid: 503,
  //   lpSymbol: 'FROYO-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1Ce76390Dd210B9C9ae28373FDf79714206ECb73',
  //   },
  //   token: serializedTokens.froyo,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 77,
  //   v1pid: 502,
  //   lpSymbol: 'APX-BUSD',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xa0ee789a8f581cb92dd9742ed0b5d54a0916976c',
  //   },
  //   token: serializedTokens.apx,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 76,
  //   v1pid: 501,
  //   lpSymbol: 'BCOIN-BNB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x2Eebe0C34da9ba65521E98CBaA7D97496d05f489',
  //   },
  //   token: serializedTokens.bcoin,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 75,
  //   v1pid: 497,
  //   lpSymbol: 'AOG-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x88c9bf5E334e2591C6A866D5E20683E31226Be3d',
  //   },
  //   token: serializedTokens.aog,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 74,
  //   v1pid: 495,
  //   lpSymbol: 'WOOP-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x2AE94A6C768D59f5DDc25bd7f12C7cBE1D51dc04',
  //   },
  //   token: serializedTokens.woop,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 73,
  //   v1pid: 491,
  //   lpSymbol: 'HIGH-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xe98ac95A1dB2fCaaa9c7D4ba7ecfCE4877ca2bEa',
  //   },
  //   token: serializedTokens.high,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 72,
  //   v1pid: 489,
  //   lpSymbol: 'DPT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x141e9558f66Cc21c93628400cCa7d830c15c2c24',
  //   },
  //   token: serializedTokens.dpt,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 71,
  //   v1pid: 488,
  //   lpSymbol: 'THG-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x486697ae24469cB1122F537924Aa46E705B142Aa',
  //   },
  //   token: serializedTokens.thg,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 70,
  //   v1pid: 484,
  //   lpSymbol: 'IDIA-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x71E6de81381eFE0Aa98f56b3B43eB3727D640715',
  //   },
  //   token: serializedTokens.idia,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 69,
  //   v1pid: 481,
  //   lpSymbol: 'SANTOS-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x06043B346450BbCfdE066ebc39fdc264FdFFeD74',
  //   },
  //   token: serializedTokens.santos,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 68,
  //   v1pid: 476,
  //   lpSymbol: 'QI-BNB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xf924E642f05ACC57fc3b14990c2B1a137683b201',
  //   },
  //   token: serializedTokens.qi,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 67,
  //   v1pid: 474,
  //   lpSymbol: 'PORTO-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0A292e96ABb35297786a38fDD67Dc4f82689E670',
  //   },
  //   token: serializedTokens.porto,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 66,
  //   v1pid: 472,
  //   lpSymbol: 'XWG-USDC LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x936928146a21AfCcd30DfA84824A780572B1630B',
  //   },
  //   token: serializedTokens.xwg,
  //   quoteToken: serializedTokens.usdc,
  // },
  // {
  //   pid: 65,
  //   v1pid: 471,
  //   lpSymbol: 'DAR-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x062f88E2B4896e823ac78Ac314468c29eEC4186d',
  //   },
  //   token: serializedTokens.dar,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 64,
  //   v1pid: 470,
  //   lpSymbol: 'FINA-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6dB23b5360c9D2859fDcbf41c56494e7b8573649',
  //   },
  //   token: serializedTokens.fina,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 63,
  //   v1pid: 466,
  //   lpSymbol: 'DKT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x365c3F921b2915a480308D0b1C04aEF7B99c2876',
  //   },
  //   token: serializedTokens.dkt,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 62,
  //   v1pid: 464,
  //   lpSymbol: 'LAZIO-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x11c0b2bb4fbb430825d07507a9e24e4c32f7704d',
  //   },
  //   token: serializedTokens.lazio,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 61,
  //   v1pid: 461,
  //   lpSymbol: 'BETA-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x88a02d94f437799f06f8c256ff07aa397e6d0016',
  //   },
  //   token: serializedTokens.beta,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 60,
  //   v1pid: 457,
  //   lpSymbol: 'NFT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0ecc84c9629317a494f12bc56aa2522475bf32e8',
  //   },
  //   token: serializedTokens.nft,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 59,
  //   v1pid: 450,
  //   lpSymbol: 'SFUND-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x74fA517715C4ec65EF01d55ad5335f90dce7CC87',
  //   },
  //   token: serializedTokens.sfund,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 58,
  //   v1pid: 449,
  //   lpSymbol: 'BP-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x2bF2dEB40639201C9A94c9e33b4852D9AEa5fd2D',
  //   },
  //   token: serializedTokens.bp,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 57,
  //   v1pid: 448,
  //   lpSymbol: 'RUSD-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x59FaC9e98479fc9979aE2a0C7422Af50bCBB9B26',
  //   },
  //   token: serializedTokens.rusd,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 56,
  //   v1pid: 442,
  //   lpSymbol: 'TRX-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xb5d108578be3750209d1b3a8f45ffee8c5a75146',
  //   },
  //   token: serializedTokens.trx,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 55,
  //   v1pid: 441,
  //   lpSymbol: 'WIN-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6a445ceb72c8b1751755386c3990055ff92e14a0',
  //   },
  //   token: serializedTokens.win,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 54,
  //   v1pid: 432,
  //   lpSymbol: 'SPS-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xfdfde3af740a22648b9dd66d05698e5095940850',
  //   },
  //   token: serializedTokens.sps,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 53,
  //   v1pid: 431,
  //   lpSymbol: 'C98-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x92247860A03F48d5c6425c7CA35CDcFCB1013AA1',
  //   },
  //   token: serializedTokens.c98,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 52,
  //   v1pid: 430,
  //   lpSymbol: 'AXS-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xC2d00De94795e60FB76Bc37d899170996cBdA436',
  //   },
  //   token: serializedTokens.axs,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 51,
  //   v1pid: 429,
  //   lpSymbol: 'CHESS-USDC LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1472976e0b97f5b2fc93f1fff14e2b5c4447b64f',
  //   },
  //   token: serializedTokens.chess,
  //   quoteToken: serializedTokens.usdc,
  // },
  // {
  //   pid: 50,
  //   v1pid: 427,
  //   lpSymbol: 'ONE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x9d2296e2fe3cdbf2eb3e3e2ca8811bafa42eedff',
  //   },
  //   token: serializedTokens.harmony,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 49,
  //   v1pid: 425,
  //   lpSymbol: 'DVI-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x89ebf9cd99864f6e51bd7a578965922029cab977',
  //   },
  //   token: serializedTokens.dvi,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 48,
  //   v1pid: 423,
  //   lpSymbol: 'USDC-USDT LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xec6557348085aa57c72514d67070dc863c0a5a8c',
  //   },
  //   token: serializedTokens.usdc,
  //   quoteToken: serializedTokens.usdt,
  // },
  // {
  //   pid: 47,
  //   v1pid: 422,
  //   lpSymbol: 'CAKE-USDT LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xA39Af17CE4a8eb807E076805Da1e2B8EA7D0755b',
  //   },
  //   token: serializedTokens.cake,
  //   quoteToken: serializedTokens.usdt,
  // },
  // {
  //   pid: 46,
  //   v1pid: 421,
  //   lpSymbol: 'BSCPAD-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xba01662e978de7d67f8ffc937726215eb8995d17',
  //   },
  //   token: serializedTokens.bscpad,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 45,
  //   v1pid: 414,
  //   lpSymbol: 'WOO-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x89eE0491CE55d2f7472A97602a95426216167189',
  //   },
  //   token: serializedTokens.woo,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 44,
  //   v1pid: 409,
  //   lpSymbol: 'ETH-USDC LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xEa26B78255Df2bBC31C1eBf60010D78670185bD0',
  //   },
  //   token: serializedTokens.eth,
  //   quoteToken: serializedTokens.usdc,
  // },
  // {
  //   pid: 43,
  //   v1pid: 408,
  //   lpSymbol: 'BTCB-ETH LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xD171B26E4484402de70e3Ea256bE5A2630d7e88D',
  //   },
  //   token: serializedTokens.btcb,
  //   quoteToken: serializedTokens.eth,
  // },
  // {
  //   pid: 42,
  //   v1pid: 405,
  //   lpSymbol: 'MBOX-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x8FA59693458289914dB0097F5F366d771B7a7C3F',
  //   },
  //   token: serializedTokens.mbox,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 41,
  //   v1pid: 397,
  //   lpSymbol: 'TUSD-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x2e28b9b74d6d99d4697e913b82b41ef1cac51c6c',
  //   },
  //   token: serializedTokens.tusd,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 40,
  //   v1pid: 390,
  //   lpSymbol: 'CHR-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6045931e511ef7e53a4a817f971e0ca28c758809',
  //   },
  //   token: serializedTokens.chr,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 39,
  //   v1pid: 389,
  //   lpSymbol: 'CAKE-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x804678fa97d91B974ec2af3c843270886528a9E6',
  //   },
  //   token: serializedTokens.cake,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 37,
  //   v1pid: 376,
  //   lpSymbol: 'DOGE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xac109c8025f272414fd9e2faa805a583708a017f',
  //   },
  //   token: serializedTokens.doge,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 36,
  //   v1pid: 365,
  //   lpSymbol: 'BTCB-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xf45cd219aef8618a92baa7ad848364a158a24f33',
  //   },
  //   token: serializedTokens.btcb,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 35,
  //   v1pid: 362,
  //   lpSymbol: 'ALPACA-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7752e1fa9f3a2e860856458517008558deb989e3',
  //   },
  //   token: serializedTokens.alpaca,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 34,
  //   v1pid: 352,
  //   lpSymbol: 'TLM-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xE6b421a4408c82381b226Ab5B6F8C4b639044359',
  //   },
  //   token: serializedTokens.tlm,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 33,
  //   v1pid: 350,
  //   lpSymbol: 'EPS-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xddE420cbB3794ebD8FFC3Ac69F9c78e5d1411870',
  //   },
  //   token: serializedTokens.eps,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 32,
  //   v1pid: 346,
  //   lpSymbol: 'TKO-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xFFd4B200d3C77A0B691B5562D804b3bd54294e6e',
  //   },
  //   token: serializedTokens.tko,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 31,
  //   v1pid: 326,
  //   lpSymbol: 'BIFI-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3f1A9f3D9aaD8bD339eD4853F345d2eF89fbfE0c',
  //   },
  //   token: serializedTokens.bifi,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 30,
  //   v1pid: 322,
  //   lpSymbol: 'ALICE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xcAD7019D6d84a3294b0494aEF02e73BD0f2572Eb',
  //   },
  //   token: serializedTokens.alice,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 29,
  //   v1pid: 318,
  //   lpSymbol: 'BELT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xF3Bc6FC080ffCC30d93dF48BFA2aA14b869554bb',
  //   },
  //   token: serializedTokens.belt,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 28,
  //   v1pid: 317,
  //   lpSymbol: 'RAMP-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xE834bf723f5bDff34a5D1129F3c31Ea4787Bc76a',
  //   },
  //   token: serializedTokens.ramp,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 27,
  //   v1pid: 309,
  //   lpSymbol: 'IOTX-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc13aA76AAc067c86aE38028019F414D731b3D86A',
  //   },
  //   token: serializedTokens.iotx,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 26,
  //   v1pid: 306,
  //   lpSymbol: 'SUSHI-ETH LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x16aFc4F2Ad82986bbE2a4525601F8199AB9c832D',
  //   },
  //   token: serializedTokens.sushi,
  //   quoteToken: serializedTokens.eth,
  // },
  // {
  //   pid: 25,
  //   v1pid: 299,
  //   lpSymbol: 'SFP-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x942b294e59a8c47a0F7F20DF105B082710F7C305',
  //   },
  //   token: serializedTokens.sfp,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 24,
  //   v1pid: 298,
  //   lpSymbol: 'LINA-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xC5768c5371568Cf1114cddD52CAeD163A42626Ed',
  //   },
  //   token: serializedTokens.lina,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 23,
  //   v1pid: 293,
  //   lpSymbol: 'UST-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x05faf555522Fa3F93959F86B41A3808666093210',
  //   },
  //   token: serializedTokens.ust,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 22,
  //   v1pid: 285,
  //   lpSymbol: 'BTCST-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xB2678C414ebC63c9CC6d1a0fC45f43E249B50fdE',
  //   },
  //   token: serializedTokens.btcst,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 21,
  //   v1pid: 284,
  //   lpSymbol: 'LTC-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x71b01eBdDD797c8E9E0b003ea2f4FD207fBF46cC',
  //   },
  //   token: serializedTokens.ltc,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 20,
  //   v1pid: 283,
  //   lpSymbol: 'USDC-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1',
  //   },
  //   token: serializedTokens.usdc,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 19,
  //   v1pid: 282,
  //   lpSymbol: 'DAI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489',
  //   },
  //   token: serializedTokens.dai,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 18,
  //   v1pid: 276,
  //   lpSymbol: 'VAI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x133ee93FE93320e1182923E1a640912eDE17C90C',
  //   },
  //   token: serializedTokens.vai,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 17,
  //   v1pid: 268,
  //   lpSymbol: 'SXP-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xD8E2F8b6Db204c405543953Ef6359912FE3A88d6',
  //   },
  //   token: serializedTokens.sxp,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 16,
  //   v1pid: 270,
  //   lpSymbol: 'INJ-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1BdCebcA3b93af70b58C41272AEa2231754B23ca',
  //   },
  //   token: serializedTokens.inj,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 15,
  //   v1pid: 268,
  //   lpSymbol: 'UNI-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x014608E87AF97a054C9a49f81E1473076D51d9a3',
  //   },
  //   token: serializedTokens.uni,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 14,
  //   v1pid: 265,
  //   lpSymbol: 'XRP-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x03F18135c44C64ebFdCBad8297fe5bDafdBbdd86',
  //   },
  //   token: serializedTokens.xrp,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 13,
  //   v1pid: 264,
  //   lpSymbol: 'USDT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
  //   },
  //   token: serializedTokens.usdt,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 12,
  //   v1pid: 263,
  //   lpSymbol: 'ALPHA-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xACF47CBEaab5c8A6Ee99263cfE43995f89fB3206',
  //   },
  //   token: serializedTokens.alpha,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 11,
  //   v1pid: 262,
  //   lpSymbol: 'BTCB-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
  //   },
  //   token: serializedTokens.btcb,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 10,
  //   v1pid: 261,
  //   lpSymbol: 'ETH-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
  //   },
  //   token: serializedTokens.eth,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 9,
  //   v1pid: 260,
  //   lpSymbol: 'XVS-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7EB5D86FD78f3852a3e0e064f2842d45a3dB6EA2',
  //   },
  //   token: serializedTokens.xvs,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 8,
  //   v1pid: 259,
  //   lpSymbol: 'TWT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3DcB1787a95D2ea0Eb7d00887704EeBF0D79bb13',
  //   },
  //   token: serializedTokens.twt,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 7,
  //   v1pid: 258,
  //   lpSymbol: 'USDT-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
  //   },
  //   token: serializedTokens.usdt,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 6,
  //   v1pid: 257,
  //   lpSymbol: 'LINK-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x824eb9faDFb377394430d2744fa7C42916DE3eCe',
  //   },
  //   token: serializedTokens.link,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 5,
  //   v1pid: 255,
  //   lpSymbol: 'DOT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF',
  //   },
  //   token: serializedTokens.dot,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 4,
  //   v1pid: 253,
  //   lpSymbol: 'ADA-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x28415ff2C35b65B9E5c7de82126b4015ab9d031F',
  //   },
  //   token: serializedTokens.ada,
  //   quoteToken: serializedTokens.wbnb,
  // },
].filter((f) => !!f.lpAddresses[CHAIN_ID])

export default farms
