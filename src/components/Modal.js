import { Modal as SemanticModal } from "semantic-ui-react";
import styled from "styled-components";

const StyledModal = styled(SemanticModal)`
  &.ui.modal {
    background: #ffffff;
    width: 80%;
    max-width: 800px;
    margin: 20px auto !important;
  }
`;

const Container = styled.div`
  padding: 20px;
  max-height: 80vh;
  overflow-y: auto;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Modal = ({ children, open, setOpen, trigger }) => {
  return (
    <StyledModal
      closeIcon
      open={open}
      trigger={trigger}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <SemanticModal.Content>
        <Container>{children}</Container>
      </SemanticModal.Content>
    </StyledModal>
  );
};

export default Modal;
