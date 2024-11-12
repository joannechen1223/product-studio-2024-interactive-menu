import React, { useState } from "react";
import { Menu as MenuContainer, MenuItem } from "semantic-ui-react";
import styled from "styled-components";

import BottomBar from "../components/BottomBar";
import MenuItemCard from "../components/MenuItemCard";
import TopBar from "../components/TopBar";
import menuData from "../data/menu";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 130px;
`;

const StyledMenu = styled(MenuContainer)`
  &.ui.secondary.pointing.menu {
    padding: 0 23px;
    border-bottom: 4px solid #c5c5c5 !important;
    margin-bottom: 0;

    /* Style for menu items */
    .item {
      font-family: Newsreader;
      color: #593c0a;
      font-size: 24px;
      font-weight: 500;
      margin: 0 16px;
      padding: 8px 0;
      border-bottom: 4px solid transparent !important;
      margin-bottom: -4px !important; /* This makes the borders overlap */

      /* Style for active state */
      &.active {
        color: #593c0a !important;
        border-bottom: 4px solid #593c0a !important;
      }
    }
  }
`;

const ListMenu = () => {
  const [activeItem, setActiveItem] = useState(menuData[0].groupId);

  return (
    <>
      <TopBar menuType="list" />
      <Container>
        <StyledMenu
          pointing
          secondary
          style={{ minWidth: "100%", padding: "0 23px" }}
        >
          {menuData.map((item) => (
            <MenuItem
              key={item.groupId}
              content={item.groupName}
              active={activeItem === item.groupId}
              onClick={() => setActiveItem(item.groupId)}
            />
          ))}
        </StyledMenu>
        {menuData
          .find((item) => item.groupId === activeItem)
          ?.items.map((item) => (
            <MenuItemCard key={item.itemId} item={item} />
          ))}
      </Container>
      <BottomBar />
    </>
  );
};

export default ListMenu;
