import PropTypes from 'prop-types';

import { ButtonContainer, Form } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input
          type="text"
          placeholder="Nome"
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="email"
          placeholder="E-mail"
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="text"
          placeholder="Telefone"
        />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="">Categoria</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};