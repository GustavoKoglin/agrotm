import { DatePicker, Form, Input } from "antd";
import React, { FC, ReactElement } from "react";

const PersonalInformation: FC = (): ReactElement => {
  return (
    <>
      <Form.Item
        name="name"
        label="Nome completo"
        rules={[{ required: true, message: "O Nome é obrigatório." }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="cpf"
        label="CPF"
        rules={[{ required: true, message: "O CPF é obrigatório." }]}
      >
        <Input maxLength={14} placeholder="000.000.000-00" />
      </Form.Item>
      <Form.Item
        name="birthDate"
        label="Data de nascimento"
        rules={[
          {
            required: true,
            message: "A data de nascimento é obrigatória.",
          },
        ]}
      >
        <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Telefone"
        rules={[{ required: true, message: "O telefone é obrigatório." }]}
      >
        <Input placeholder="(00) 00000-0000" />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[{ type: "email", message: "E-mail inválido." }]}
      >
        <Input placeholder="exemplo@email.com" />
      </Form.Item>
    </>
  );
};

export default PersonalInformation;
