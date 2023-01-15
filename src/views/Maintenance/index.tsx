import styled from 'styled-components'
import PageSection from 'components/PageSection'
import useTheme from 'hooks/useTheme'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`
const Soon: React.FC = () => {
  const { theme } = useTheme()

  return (
    <>
      <PageMeta />
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          theme.isDark
            ? 'radial-gradient(103.12% 50% at 50% 50%, #D7CAEC 0%, #191326 100%)'
            : 'linear-gradient(139.73deg, #191326 0%, #D7CAEC 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <Hero />
      </StyledHeroSection>
    </>
  )
}

export default Soon
