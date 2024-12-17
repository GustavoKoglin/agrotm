import { UploadOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Select, Upload } from "antd";
import React, { FC, ReactElement } from "react";

const { Option } = Select;

const DocumentsAuthorizations: FC = (): ReactElement => {
  return (
    <>
      <Form.Item
        name="cnhNumber"
        label="CNH (Número)"
        rules={[{ required: true, message: "O número da CNH é obrigatório." }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="cnhCategory"
        label="Categoria da CNH"
        rules={[
          { required: true, message: "A categoria da CNH é obrigatória." },
        ]}
      >
        <Select placeholder="Selecione a categoria">
          <Option value="A">A</Option>
          <Option value="B">B</Option>
          <Option value="C">C</Option>
          <Option value="D">D</Option>
          <Option value="E">E</Option>
        </Select>
      </Form.Item>
      <Form.Item name="antt" label="Registro ANTT">
        <Input placeholder="Número do registro" />
      </Form.Item>
      <Form.Item name="anttValidity" label="Validade ANTT">
        <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item name="residenceProof" label="Comprovante de residência">
        <Upload beforeUpload={() => false} maxCount={1}>
          <Button type="primary" icon={<UploadOutlined />}>
            Upload
          </Button>
        </Upload>
      </Form.Item>
    </>
  );
};

export default DocumentsAuthorizations;
