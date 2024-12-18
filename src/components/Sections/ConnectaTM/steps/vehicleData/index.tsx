import useDriversStore from "~/lib/stores/useDriversStore";
import { DatePicker, Form, Input } from "antd";
import React, { FC, ReactElement } from "react";
import InputMask from "react-input-mask";

const VehicleData: FC = (): ReactElement => {
  const { data, setData } = useDriversStore();

  return (
    <>
      <Form.Item
        name="vehicleType"
        label="Tipo de veículo"
        initialValue={data.vehicleType}
        rules={[
          { required: true, message: "O tipo do veículo é obrigatório." },
        ]}
      >
        <Input
          onChange={(e) => setData({ vehicleType: e.target.value })}
          placeholder="Ex.: Caminhão, Carreta"
        />
      </Form.Item>
      <Form.Item
        name="vehicleBrand"
        label="Marca e modelo"
        initialValue={data.vehicleBrand}
      >
        <Input
          onChange={(e) => setData({ vehicleBrand: e.target.value })}
          placeholder="Ex.: Volvo FH540"
        />
      </Form.Item>
      <Form.Item
        name="vehicleYear"
        label="Ano de fabricação"
        initialValue={data.vehicleYear}
      >
        <DatePicker
          format="YYYY"
          style={{ width: "100%" }}
          onChange={(date) =>
            setData({ vehicleYear: date?.format("DD/MM/YYYY") })
          }
        />
      </Form.Item>
      <Form.Item
        name="vehiclePlate"
        label="Placa do veículo"
        initialValue={data.vehiclePlate}
      >
        <InputMask
          mask="aaa-9999"
          onChange={(e) => setData({ vehiclePlate: e.target.value })}
        >
          {(inputProps) => (
            <Input
              {...inputProps}
              id="input-vehiclePlate"
              placeholder="AAA-1234"
            />
          )}
        </InputMask>
      </Form.Item>
    </>
  );
};

export default VehicleData;
