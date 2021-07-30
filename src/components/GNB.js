import React from 'react';
import styled from 'styled-components';
import variables from "../styles/variables";
import mixins from "../styles/mixins";

const StyledGnb = styled.nav`
  display: flex;
  grid-area: gnb;

  > h2 {
    ${mixins.blind};
  }
`;

const StyledAnchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: ${variables.white};

  & + & {
      margin-left: 10px;
  }

  &.campaign-menu {
      color: ${({theme}) => theme.accentColor};
  }
`;

const menus = [
  {
    key: 6,
    name: 'campaign1',
    link: '#anchor',
    campaign: true,
  },
  {
    key: 7,
    name: 'campaign2',
    link: '#anchor',
    campaign: true,
  },
  {
    key: 1,
    name: 'menu1',
    link: '#anchor',
  },
  {
    key: 2,
    name: 'menu2',
    link: '#anchor',
  },
  {
    key: 3,
    name: 'menu3',
    link: '#anchor',
  },
  {
    key: 4,
    name: 'menu4',
    link: '#anchor',
  },
  {
    key: 5,
    name: 'menu5',
    link: '#anchor',
  },
]

const menusItem = menus.map((items) => {
    return <StyledAnchor 
        href={items.link} 
        key={items.key}
        className={items.campaign && 'campaign-menu'}
    >
        {items.name}
    </StyledAnchor>;
});

const Gnb = () => {
  return(<>
    <StyledGnb>
      <h2>Navigation Menus</h2>
      {menusItem}
    </StyledGnb>
  </>)
}

export default Gnb;