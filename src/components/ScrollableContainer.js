import styled from "styled-components";

export const ScrollableContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  max-height: calc(100vh - 130px - 80px);

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
`;
