import { Heading, Flex, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
// import useTheme from 'hooks/useTheme'
// import { formatLocalisedCompactNumber } from 'utils/formatBalance'
// import useSWRImmutable from 'swr/immutable'
// import IconCard, { IconCardData } from '../IconCard'
// import StatCardContent from './StatCardContent'
import GradientLogo from '../GradientLogoSvg'

const Stats = () => {
  const { t } = useTranslation()
  // const { theme } = useTheme()

  // const { data: tvl } = useSWRImmutable('tvl')
  // const { data: txCount } = useSWRImmutable('totalTx30Days')
  // const { data: addressCount } = useSWRImmutable('addressCount30Days')
  // const trades = formatLocalisedCompactNumber(txCount)
  // const users = formatLocalisedCompactNumber(addressCount)
  // const tvlString = tvl ? formatLocalisedCompactNumber(tvl) : '-'

  // const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
  // const tvlText = t('Blue Lotus (BLUEG), the Governance token of the Future, Genesys (GSYS), the most valuable token on the Market.')
  // const [entrusting, inFunds] = tvlText.split(tvlString)

  // const UsersCardData: IconCardData = {
  //   icon: <CommunityIcon color="secondary" width="36px" />,
  // }

  // const TradesCardData: IconCardData = {
  //   icon: <SwapIcon color="primary" width="36px" />,
  // }

  // const StakedCardData: IconCardData = {
  //   icon: <ChartIcon color="failure" width="36px" />,
  // }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <GradientLogo height="48px" width="48px" mb="24px" />
      <Heading textAlign="center" scale="xl">
        {t('The Number ONE DAO in the Multichain.')}
      </Heading>
      <Heading textAlign="center" scale="xl" mb="32px">
        {t('Multichain. Easy and Fast.')}
      </Heading>
      <Text textAlign="center" color="textSubtle">
        {t('LOTUS DAO – APYs that makes you Fly .')}
      </Text>
      <Flex flexWrap="wrap">
        <Text display="inline" textAlign="center" color="textSubtle" mb="20px">
          {t(
            'Blue Lotus (BLUEG), the Governance token of the Future, Genesys (GSYS), the most valuable token on the Market.',
          )}
          {/* {entrusting}
          <>{tvl ? <>{tvlString}</> : <Skeleton display="inline-block" height={16} width={70} mt="2px" />}</>
          {inFunds} */}
        </Text>
      </Flex>
      {/* <Text textAlign="center" color="textSubtle" bold mb="32px">
        {t('Will you join them?')}
      </Text> */}
      <img src="/images/gsys/usedbymillons.png" alt="used-by-millons" width="1000px" />

      {/* <Flex flexDirection={['column', null, null, 'row']}>
        <IconCard {...UsersCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('%users% users', { users })}
            bodyText={t('in the last 30 days')}
            highlightColor={theme.colors.secondary}
          />
        </IconCard>
        <IconCard {...TradesCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('%trades% trades', { trades })}
            bodyText={t('made in the last 30 days')}
            highlightColor={theme.colors.primary}
          />
        </IconCard>
        <IconCard {...StakedCardData}>
          <StatCardContent
            headingText={t('$%tvl% staked', { tvl: tvlString })}
            bodyText={t('Total Value Locked')}
            highlightColor={theme.colors.failure}
          />
        </IconCard>
      </Flex> */}
    </Flex>
  )
}

export default Stats
