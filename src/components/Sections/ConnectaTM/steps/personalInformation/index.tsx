import useDriversStore from "~/lib/stores/useDriversStore";
import { DatePicker, Form, Input } from "antd";
import React, { FC, ReactElement } from "react";
import InputMask from "react-input-mask";

const PersonalInformation: FC = (): ReactElement => {
  const { data, setData } = useDriversStore();

  return (
    <>
      <Form.Item
        name="name"
        label="Nome completo"
        initialValue={data.name}
        rules={[{ required: true, message: "O Nome é obrigatório." }]}
      >
        <Input onChange={(e) => setData({ name: e.target.value })} />
      </Form.Item>
      <Form.Item
        name="cpf"
        label="CPF"
        initialValue={data.cpf}
        rules={[{ required: true, message: "O CPF é obrigatório." }]}
      >
        <InputMask
          mask="999.999.999-99"
          onChange={(e) => setData({ cpf: e.target.value })}
        >
          {(inputProps) => (
            <Input
              {...inputProps}
              id="input-cpf"
              placeholder="Insira o seu cpf"
            />
          )}
        </InputMask>
      </Form.Item>
      <Form.Item
        name="birthDate"
        label="Data de nascimento"
        initialValue={data.birthDate}
        rules={[
          { required: true, message: "A data de nascimento é obrigatória." },
        ]}
      >
        <DatePicker
          format="DD/MM/YYYY"
          style={{ width: "100%" }}
          onChange={(date) =>
            setData({ birthDate: date?.format("DD/MM/YYYY") })
          }
        />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Telefone"
        initialValue={data.phone}
        rules={[{ required: true, message: "O telefone é obrigatório." }]}
      >
        <InputMask
          mask="(99)9.9999-9999"
          onChange={(e) => setData({ phone: e.target.value })}
        >
          {(inputProps) => (
            <Input
              {...inputProps}
              id="input-cellPhone"
              placeholder="Insira o seu telefone"
            />
          )}
        </InputMask>
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        initialValue={data.email}
        rules={[{ type: "email", message: "E-mail inválido." }]}
      >
        <Input
          placeholder="exemplo@email.com"
          onChange={(e) => setData({ email: e.target.value })}
        />
      </Form.Item>
    </>
  );
};

export default PersonalInformation;
