import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Home = () => {
  return (
    <Container>
      <p>Vakinha Dashboard</p>
    </Container>
  );
};

Home.propTypes = {
};

export default Home;
