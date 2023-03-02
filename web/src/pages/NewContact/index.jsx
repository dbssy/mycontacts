import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

export default function NewContact() {
  return (
    <>
      <PageHeader
        title="Novo contato"
      />

      <Input
        type="text"
        placeholder="Nome"
      />

      <Input
        type="email"
        placeholder="E-mail"
      />

      <Input
        type="number"
        placeholder="Telefone"
      />

      <Select>
        <option value="">Categoria</option>
        <option value="1">Discord</option>
        <option value="2">Facebook</option>
        <option value="3">Instagram</option>
        <option value="4">LinkedIn</option>
      </Select>

      <Button type="button">
        Salvar alterações
      </Button>
    </>
  );
}
