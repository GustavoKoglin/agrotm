import useDriversStore from "~/lib/stores/useDriversStore";
import { Form, Input, InputNumber } from "antd";
import React, { FC, ReactElement } from "react";

const AdditionalInformation: FC = (): ReactElement => {
  const { data, setData } = useDriversStore();

  return (
    <>
      <Form.Item
        name="experience"
        label="Experiência (anos)"
        initialValue={data.experience}
      >
        <InputNumber
          min={0}
          style={{ width: "100%" }}
          onChange={(value) => setData({ experience: value })}
        />
      </Form.Item>
      <Form.Item
        name="workingAreas"
        label="Áreas de atuação"
        initialValue={data.workingAreas}
      >
        <Input
          onChange={(e) => setData({ workingAreas: e.target.value })}
          placeholder="Ex.: Estados ou regiões atendidas"
        />
      </Form.Item>
      <Form.Item
        name="availability"
        label="Disponibilidade"
        initialValue={data.availability}
      >
        <Input
          onChange={(e) => setData({ availability: e.target.value })}
          placeholder="Dias/horários disponíveis"
        />
      </Form.Item>
      <Form.Item name="notes" label="Observações" initialValue={data.notes}>
        <Input.TextArea
          rows={3}
          onChange={(e) => setData({ notes: e.target.value })}
        />
      </Form.Item>
    </>
  );
};

export default AdditionalInformation;
