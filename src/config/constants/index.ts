import { ChainId, JSBI, Percent, Token } from '@genesysnetwork/sdk'
import { BigNumber } from '@ethersproject/bignumber'
import { mainnetTokens, testnetTokens } from './tokens'

export const ROUTER_ADDRESS = {
  [ChainId.MAINNET]: '0x70D319F74090d3BB6bfEA496Bea73692C59B1AD1', // deployed by Stephany
  [ChainId.TESTNET]: '0x93fc823CfBD38025CBf1b495842f7B654E28561C',
}

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [ChainId.MAINNET]: [
    mainnetTokens.wbnb,
    mainnetTokens.gsys,
    mainnetTokens.cake,
    mainnetTokens.shib,
    mainnetTokens.busd,
    mainnetTokens.usdt,
    mainnetTokens.btcb,
    mainnetTokens.eth,
    mainnetTokens.usdc,
  ],
  [ChainId.TESTNET]: [testnetTokens.wbnb, testnetTokens.cake, testnetTokens.busd],
}

/**
 * Addittional bases for specific tokens
 * @example { [WBTC.address]: [renBTC], [renBTC.address]: [WBTC] }
 */
export const ADDITIONAL_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 * @example [AMPL.address]: [DAI, WETH[ChainId.MAINNET]]
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  [ChainId.MAINNET]: [mainnetTokens.busd, mainnetTokens.gsys, mainnetTokens.btcb],
  [ChainId.TESTNET]: [testnetTokens.wbnb, testnetTokens.cake, testnetTokens.busd],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  [ChainId.MAINNET]: [mainnetTokens.wbnb, mainnetTokens.dai, mainnetTokens.busd, mainnetTokens.usdt],
  [ChainId.TESTNET]: [testnetTokens.wbnb, testnetTokens.cake, testnetTokens.busd],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [mainnetTokens.gsys, mainnetTokens.wbnb],
    [mainnetTokens.busd, mainnetTokens.usdt],
    [mainnetTokens.dai, mainnetTokens.usdt],
  ],
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much BNB so they end up with <.01
export const MIN_BNB: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 BNB
export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), JSBI.BigInt(10000))

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

// SDN OFAC addresses
export const BLOCKED_ADDRESSES: string[] = [
  '0x7F367cC41522cE07553e823bf3be79A889DEbe1B',
  '0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b',
  '0x901bb9583b24D97e995513C6778dc6888AB6870e',
  '0xA7e5d5A720f06526557c513402f2e6B5fA20b008',
  '0x8576aCC5C05D6Ce88f4e49bf65BdF0C62F91353C',
  '0xe8B1DC0557818f32e8336122964E35cefCdC10d8', // bots
  '0x340af1569dd845ff7d18baf1e06961c95d708793', // bots
  '0x00006c45135e5be06dbbc4d5adc1cf2b7f360233', // bots
  '0x1C84183E211a7E69eE455e6c7D88cebB2AF685Cd',
  // new bots
  '0x5b74bbae030d0e58c62cdc2b608487e877460c00', // bots
  '0xD6ae230ABaE2b2D053aF417Ca8957EC58383867d', // bots
  '0x62B5b67c1bfe5A24c361F35AF0a5e23a8Ec495a3', // bots
  '0xaaa0ce46ef497c1b97e0d546070dae16585635b4', // bots
  '0xfbaebcb3c22ba9acb3a64eb0be82c9a46c56deea', // bots
  '0x0000000000008AfdAcc486225455281F614843e7', // bots
  '0x4d394E7bF612a5ad37Fa63134A228657f5cADF00', // bots
  '0xa2d335e471ed0d85a95cd16c357f38fa6dc13c46', // bots
  '0x5b74bbae030d0e58c62cdc2b608487e877460c00', // bots
  '0xccc8b3c9b7637c02a87b6ba3386cec9ec21cb2f3', // bots
  // 7 sep
  '0xccc8b3c9b7637c02a87b6ba3386cec9ec21cb2f3',
  '0xa2d335e471ed0d85a95cd16c357f38fa6dc13c46',
  '0x1c84183e211a7e69ee455e6c7d88cebb2af685cd',
  '0xaaa0ce46ef497c1b97e0d546070dae16585635b4',
  '0x5b74bbae030d0e58c62cdc2b608487e877460c00',
  '0x433449a9f3227ea11bddb0abfdd44c242870ba04',
  '0xd8eb068c95a6a74e6608b8c368cdc7bebe800956',
  '0x0000000000008afdacc486225455281f614843e7',
  '0xd6ae230abae2b2d053af417ca8957ec58383867d',
  '0x274b92e6573bd6d81abd02c80f2101eba87a1305',
  '0x4903f5f3bbc7865725a5aa811f7e7b8a2c1b9871',
  '0x9f2fdd8d7201f3c8095c53af8edced0f63539f80',
  '0x9a703326e8ac3f2a08fe012f36a1ec8b0d2d47a1',
  '0xfbaebcb3c22ba9acb3a64eb0be82c9a46c56deea',
  '0xb61d6a29496fce80a6ff97ee9758e35edd9b893a',
  '0xfa20dfae69d86a0bd64a391557bd2fb60bef8f1d',
  '0x0000000000008AfdAcc486225455281F614843e7',
  '0x1420A3939A43962480EC1b2288cC5AA27CdEAC1d',
  '0x270eb2621EB213A0600A03151af8f9bE520E56D4',
]

export { default as farmsConfig } from './farms'
export { default as poolsConfig } from './pools'
export { default as ifosConfig } from './ifo'

export const FAST_INTERVAL = 10000
export const SLOW_INTERVAL = 60000

export const NOT_ON_SALE_SELLER = '0x0000000000000000000000000000000000000000'

// BNB
export const DEFAULT_INPUT_CURRENCY = 'BNB'
// GSYS
export const DEFAULT_OUTPUT_CURRENCY = '0xc073eb514B96cFbe470b0d23e0a620BaE73ee165' // gsys token deployed by Stephany

export const FARM_AUCTION_HOSTING_IN_SECONDS = 604800

// Gelato uses this address to define a native currency in all chains
export const GELATO_NATIVE = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
// Handler string is passed to Gelato to use PCS router
export const GELATO_HANDLER = 'pancakeswap'
export const GENERIC_GAS_LIMIT_ORDER_EXECUTION = BigNumber.from(500000)

export const EXCHANGE_DOCS_URLS = 'https://docs.genesys.network/products/genesys-exchange'
export const LIMIT_ORDERS_DOCS_URL = 'https://docs.genesys.network/products/genesys-exchange/limit-orders'
export const DISCORD_URL = 'https://discord.com/invite/rnpnVDaKTn'

export const GALAXY_NFT_CAMPAIGN_ID = 'GCpp2UUxqQ'
