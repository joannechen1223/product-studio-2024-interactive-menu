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
