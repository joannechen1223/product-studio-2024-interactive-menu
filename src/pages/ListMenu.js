import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Menu as MenuContainer, MenuItem } from "semantic-ui-react";
import styled from "styled-components";

import BottomBar from "../components/BottomBar";
import { HorizontalLine } from "../components/HorizontalLine";
import MenuItemCard from "../components/MenuItemCard";
import { ScrollableContainer } from "../components/ScrollableContainer";
import TopBar from "../components/TopBar";

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 130px;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 80px;
`;

const MenuWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-x: hidden;
  scrollbar-width: none;
`;

const StyledMenu = styled(MenuContainer)`
  &.ui.secondary.pointing.menu {
    padding: 0 23px;
    border-bottom: 4px solid #c5c5c5 !important;
    margin-bottom: 0;
    display: inline-flex;
    width: auto !important;

    .item {
      font-family: Newsreader;
      color: #593c0a;
      font-size: 24px;
      font-weight: 500;
      margin: 0 16px;
      padding: 8px 0;
      white-space: nowrap;
      border-bottom: 4px solid transparent !important;
      margin-bottom: -4px !important;

      &.active {
        color: #593c0a !important;
        border-bottom: 4px solid #593c0a !important;
      }
    }
  }
`;

const ContentWrapper = styled.div`
  overflow-x: hidden; /* Add this */
  width: 100%;
`;

const ListMenu = () => {
  const { groups, items } = useSelector((state) => state.menu);
  const [activeItem, setActiveItem] = useState(groups[0].groupId);

  return (
    <>
      <TopBar />
      <div style={{ height: "130px", width: "100%" }}></div>
      <ScrollableContainer>
        <MenuContent>
          <MenuWrapper>
            <StyledMenu
              pointing
              secondary
              style={{ minWidth: "100%", padding: "0 23px" }}
            >
              {groups.map((group) => (
                <MenuItem
                  key={group.groupId}
                  content={group.groupName}
                  active={activeItem === group.groupId}
                  onClick={() => setActiveItem(group.groupId)}
                />
              ))}
            </StyledMenu>
          </MenuWrapper>
          <ContentWrapper>
            {groups
              .find((item) => item.groupId === activeItem)
              ?.itemIds.map((itemId) => (
                <>
                  <MenuItemCard key={itemId} item={items[itemId]} />
                  <HorizontalLine />
                </>
              ))}
          </ContentWrapper>
        </MenuContent>
      </ScrollableContainer>
      <BottomBar />
    </>
  );
};

export default ListMenu;
