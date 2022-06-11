import { ReactNode, useMemo } from 'react'
import { BLOCKED_ADDRESSES } from './config/constants'
import useActiveWeb3React from './hooks/useActiveWeb3React'
import ListsUpdater from './state/lists/updater'
import MulticallUpdater from './state/multicall/updater'
import TransactionUpdater from './state/transactions/updater'

export function Updaters() {
  return (
    <>
      <ListsUpdater />
      <TransactionUpdater />
      <MulticallUpdater />
    </>
  )
}

export function Blocklist({ children }: { children: ReactNode }) {
  const { account } = useActiveWeb3React()
  const blocked: boolean = useMemo(() => Boolean(account && BLOCKED_ADDRESSES.indexOf(account) !== -1), [account])
  if (blocked) {
    return <h1 style={container}>Blocked address</h1>
  }
  return <>{children}</>
}
// Styling
const container = {
  width: 500,
  margin: 'auto',
  color: 'red',
  fontSize: '2em',
  fontWeight: 'bold',
}
