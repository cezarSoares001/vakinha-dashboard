import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import * as Styles from './styles';

const Header = ({ title }) => {
  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Logo>
          <img src="/logo-vakinha.png" alt="Vakinha" />
        </Styles.Logo>
        <Styles.Title>{title}</Styles.Title>
        <Styles.UserInfo>
          Enzo da Silva
          <i className="fa fa-power-off" />
        </Styles.UserInfo>
      </Styles.Header>
    </Styles.Container>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
