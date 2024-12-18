import useDriversService, { DriversProps } from "~/lib/services/drivers";
import useDriversStore from "~/lib/stores/useDriversStore";
import { Button, Form, message, Steps } from "antd";
import React, { FC, ReactElement, useState } from "react";

import {
  AdditionalInformation,
  DocumentsAuthorizations,
  PersonalInformation,
  VehicleData,
} from "./steps";
import S from "./styles";
const { Step } = Steps;

const ConnectaTM: FC = (): ReactElement => {
  const [form] = Form.useForm<DriversProps>();
  const [currentStep, setCurrentStep] = useState(0);
  const { data } = useDriversStore();

  const handleSendData = async () => {
    const service = useDriversService();
    form.validateFields().then(async () => {
      try {
        await service.post(data);

        message.success("Motorista cadastrado com sucesso");
        return true;
      } catch (ex: any) {
        message.error(ex || "Erro ao salvar os dados");
        return false;
      }
    });
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const steps = [
    {
      title: "Informações Pessoais",
      content: <PersonalInformation />,
    },
    {
      title: "Documentos e Autorizações",
      content: <DocumentsAuthorizations />,
    },
    {
      title: "Dados do Veículo",
      content: <VehicleData />,
    },
    {
      title: "Informacoes Adicionais",
      content: <AdditionalInformation />,
    },
  ];

  return (
    <S.Container>
      <S.SectionForm>
        <Steps current={currentStep}>
          {steps.map((step, index) => (
            <Step key={index} title={step.title} />
          ))}
        </Steps>
        <S.Form
          form={form}
          name="cadastro-motorista-form"
          layout="vertical"
          id="cadastro-motorista-form"
        >
          {steps[currentStep].content}
          <S.FormFooter>
            {currentStep > 0 && (
              <Button
                style={{ marginRight: 8 }}
                type="default"
                onClick={prevStep}
              >
                Voltar
              </Button>
            )}
            {currentStep < steps.length - 1 && (
              <Button type="primary" onClick={nextStep}>
                Avançar
              </Button>
            )}
            {currentStep === steps.length - 1 && (
              <Button type="primary" onClick={handleSendData}>
                Cadastrar Motorista
              </Button>
            )}
          </S.FormFooter>
        </S.Form>
      </S.SectionForm>
    </S.Container>
  );
};

export default ConnectaTM;
