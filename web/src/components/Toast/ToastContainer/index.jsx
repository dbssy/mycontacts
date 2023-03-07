import { Container } from './styles';

import ToastMessage from '../ToastMessage';

export default function ToastContainer() {
  return (
    <Container>
      <ToastMessage text="Default toast" />
      <ToastMessage type="success" text="Success toast" />
      <ToastMessage type="danger" text="Error toast" />
    </Container>
  );
}
