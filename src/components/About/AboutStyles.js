import styled from 'styled-components'

export const SectionRow = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: auto;
  max-width: 1040px;
  box-sizing: content-box;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: calc(100vw - 32px);
    row-gap: 2rem;
  }
`

export const Img = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
  justify-self: center;
`