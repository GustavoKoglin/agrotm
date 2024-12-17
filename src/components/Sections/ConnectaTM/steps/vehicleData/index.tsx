import { Form, Input, InputNumber } from "antd";
import React, { FC, ReactElement } from "react";

const VehicleData: FC = (): ReactElement => {
  return (
    <>
      <Form.Item
        name="vehicleType"
        label="Tipo de veículo"
        rules={[
          { required: true, message: "O tipo do veículo é obrigatório." },
        ]}
      >
        <Input placeholder="Ex.: Caminhão, Carreta" />
      </Form.Item>
      <Form.Item name="vehicleBrand" label="Marca e modelo">
        <Input placeholder="Ex.: Volvo FH540" />
      </Form.Item>
      <Form.Item name="vehicleYear" label="Ano de fabricação">
        <InputNumber
          min={1900}
          max={new Date().getFullYear()}
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item name="vehiclePlate" label="Placa do veículo">
        <Input maxLength={7} placeholder="AAA-1234" />
      </Form.Item>
    </>
  );
};

export default VehicleData;
