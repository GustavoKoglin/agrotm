import { Form, Input, InputNumber } from "antd";
import React, { FC, ReactElement } from "react";

const AdditionalInformation: FC = (): ReactElement => {
  return (
    <>
      <Form.Item name="experience" label="Experiência (anos)">
        <InputNumber min={0} style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item name="workingAreas" label="Áreas de atuação">
        <Input placeholder="Ex.: Estados ou regiões atendidas" />
      </Form.Item>
      <Form.Item name="availability" label="Disponibilidade">
        <Input placeholder="Dias/horários disponíveis" />
      </Form.Item>
      <Form.Item name="notes" label="Observações">
        <Input.TextArea rows={3} />
      </Form.Item>
    </>
  );
};

export default AdditionalInformation;
