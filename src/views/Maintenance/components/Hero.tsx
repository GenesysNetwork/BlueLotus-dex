import { Button, Flex, Heading } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import Image from 'next/image'
import styled, { keyframes } from 'styled-components'
import bunnyImage from '../../../../public/images/gsys/banner1.png' // imagen
// import CompositeImage, { CompositeImageProps } from './CompositeImage'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }
`

// const fading = () => keyframes`
//   from {
//     opacity: 0.9;
//   }
//   50% {
//     opacity: 0.1;
//   }
//   to {
//     opacity: 0.9;
//   }
// `

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const BunnyWrapper = styled.div`
  width: 100%;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
  will-change: transform;
  > span {
    overflow: visible !important; // make sure the next-image pre-build blur image not be cropped
  }
`

// const StarsWrapper = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;

//   & :nth-child(2) {
//     animation: ${fading} 2s ease-in-out infinite;
//     animation-delay: 1s;
//   }

//   & :nth-child(3) {
//     animation: ${fading} 5s ease-in-out infinite;
//     animation-delay: 0.66s;
//   }

//   & :nth-child(4) {
//     animation: ${fading} 2.5s ease-in-out infinite;
//     animation-delay: 0.33s;
//   }
// `

// const starsImage: CompositeImageProps = {
//   path: '/images/home/lunar-bunny/',
//   attributes: [
//     { src: 'star-l', alt: '3D Star' },
//     { src: 'star-r', alt: '3D Star' },
//     { src: 'star-top-r', alt: '3D Star' },
//   ],
// }

const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()

  return (
    <>
      <BgWrapper>
        <InnerWrapper>{theme.isDark ? <SlideSvgDark width="100%" /> : <SlideSvgLight width="100%" />}</InnerWrapper>
      </BgWrapper>
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
        mt={[account ? '280px' : '50px', null, 0]}
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column">
          <Heading scale="xxl" color="secondary" mb="24px">
            {t('Dear Users')}
          </Heading>
          <Heading scale="md" mb="24px" color="black">
            {t(
              'as of today 01/15/2023 we begin our migration to our blockchain GChain therefore our DEX will be unavailable until further official notice all transactions such as (token swap, sales and Farms) are suspended for the moment until migration is concluded, we apologize for any inconvenience this may cause and we hope to see you soon in our new home.Thanks for the support.',
            )}
          </Heading>
          <Heading scale="xl" color="black" mb="24px">
            {t('Genesys Network Team')}
          </Heading>
        </Flex>
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
        >
          <BunnyWrapper>
            <Image src={bunnyImage} priority placeholder="blur" alt={t('Blue Lotus')} />
          </BunnyWrapper>
        </Flex>
      </Flex>
    </>
  )
}

export default Hero
