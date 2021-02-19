import styled from '@emotion/styled';

import Head from 'next/head';
import Star from '../components/star.tsx';



const Home = () => {

    const Box = styled.div({
      position: `relative`,
      width: `100vw`,
      height: `100vh`,
      background: `url('/images/фон.png')`,
      backgroundSize: `cover`,
      backgroundRepeat: `no-repeat`
    });
   
    return (
      <>
        <Head>
          <title>Next App</title>
        </Head>

        <Box>
          <Star left={170} animationDelay={0} time={2.5}/>
          <Star left={425} animationDelay={2} time={2.5}/>
          <Star left={610} animationDelay={4} time={3.5}/>
          <Star left={705} animationDelay={1} time={2.5}/>
          <Star left={1000} animationDelay={3.5} time={2}/>
        </Box>  

      </>
    );
};

export default Home;