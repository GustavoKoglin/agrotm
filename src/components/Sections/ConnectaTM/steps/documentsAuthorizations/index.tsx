import useDriversStore from "~/lib/stores/useDriversStore";
import { DatePicker, Form, Input, Select } from "antd";
import React, { FC, ReactElement } from "react";

const { Option } = Select;

const DocumentsAuthorizations: FC = (): ReactElement => {
  const { data, setData } = useDriversStore();

  return (
    <>
      <Form.Item
        name="cnhNumber"
        label="CNH (Número)"
        initialValue={data.cnhNumber}
        rules={[{ required: true, message: "O número da CNH é obrigatório." }]}
      >
        <Input onChange={(e) => setData({ cnhNumber: e.target.value })} />
      </Form.Item>

      <Form.Item
        name="cnhCategory"
        label="Categoria da CNH"
        initialValue={data.cnhCategory}
        rules={[
          { required: true, message: "A categoria da CNH é obrigatória." },
        ]}
      >
        <Select
          value={data.cnhCategory}
          onChange={(value) => setData({ cnhCategory: value })}
        >
          <Option value="A">A</Option>
          <Option value="B">B</Option>
          <Option value="C">C</Option>
          <Option value="D">D</Option>
          <Option value="E">E</Option>
        </Select>
      </Form.Item>

      <Form.Item name="antt" label="Registro ANTT" initialValue={data.antt}>
        <Input onChange={(e) => setData({ antt: e.target.value })} />
      </Form.Item>

      <Form.Item
        name="anttValidity"
        label="Validade ANTT"
        initialValue={data.anttValidity}
      >
        <DatePicker
          format="DD/MM/YYYY"
          style={{ width: "100%" }}
          onChange={(date) =>
            setData({ anttValidity: date?.format("DD/MM/YYYY") })
          }
        />
      </Form.Item>
    </>
  );
};

export default DocumentsAuthorizations;
