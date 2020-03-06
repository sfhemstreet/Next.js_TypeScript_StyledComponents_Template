import Head from 'next/head';
import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #111;
  color: white;
`;

const Home = (): JSX.Element => (
  <HomeContainer>
    Hello World
  </HomeContainer>
)

export default Home
