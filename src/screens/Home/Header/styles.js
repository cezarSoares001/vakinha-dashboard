import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
  justify-content: center;
  background-color: #00A859;
`;

export const Header = styled.div`
  display: flex;
  width: 1170px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  img {
    width: 250px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  color: white;
`;

export const UserInfo = styled.div`
  color: white;
  i {
    cursor: pointer;
    margin-left: 10px;
  }
`;
