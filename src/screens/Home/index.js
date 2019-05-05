import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import styled from 'styled-components';
import Header from './Header';

const Container = styled.div`
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <Header title="Dashboard" />
    </>
  );
};

Home.propTypes = {
};

export default Home;
