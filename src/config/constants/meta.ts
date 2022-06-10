import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Genesys',
  description: 'The best next generation AMM on BNB Chain. Earn GSYS through yield farming.',
  image: 'https://bluelotusdao.org/logo.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Genesys')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Genesys')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Genesys')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Genesys')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Genesys')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Genesys')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Genesys')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Genesys')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Genesys')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Genesys')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Genesys')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Genesys')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Genesys')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Genesys')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Genesys')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Genesys')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Genesys')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Genesys')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Genesys Info & Analytics')}`,
        description: 'View statistics for Genesys exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Genesys Info & Analytics')}`,
        description: 'View statistics for Genesys exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('Genesys Info & Analytics')}`,
        description: 'View statistics for Genesys exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('Genesys')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('Genesys')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('Genesys')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('Genesys')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Genesys Squad')} | ${t('Genesys')}`,
      }
    default:
      return null
  }
}
