import { InboxOutlined } from "@ant-design/icons";
import emailjs from "@emailjs/browser";
import Title from "~/components/Typography/Title";
import { Upload, message, Button, Form, Input } from "antd";
import axios from "axios";
import React, { FC, ReactElement, useEffect, useState } from "react";

import S from "./styles";
const { Dragger } = Upload;
const { TextArea } = Input;

const WorkWithUs: FC = (): ReactElement => {
  const [form] = Form.useForm();
  const [fileUrl, setFileUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleUpload = async (file: File) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "AgroTM");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dnpmmklp6/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setFileUrl(response.data.secure_url);
      setLoading(true);
    } catch (error) {
      console.error("Erro ao enviar arquivo:", error);
      message.error("Erro ao enviar arquivo. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  // Função para enviar o e-mail
  const handleSendEmail = () => {
    form
      .validateFields()
      .then(async (values) => {
        const payload = {
          name: values.name,
          email: values.email,
          message: values.message,
          fileUrl,
        };

        await emailjs
          .send("service_1wpfh3w", "template_uuug2sb", payload)
          .then(() => {
            message.success("E-mail enviado com sucesso!");
            form.resetFields();
            setFileUrl("");
          })
          .catch((error) => {
            console.error("Erro ao enviar e-mail:", error);
            message.error("Erro ao enviar e-mail.");
          });
      })
      .catch((err) => console.error("Erro na validação:", err));
  };

  useEffect(() => {
    emailjs.init("-5FKd-fyjsyaDnpYl");
  }, []);

  return (
    <S.Container id="workWithUs">
      <Title>Trabalhe conosco</Title>

      <S.SectionForm>
        <S.Form
          form={form}
          name="cadastro-colaborador-form"
          layout="vertical"
          id="cadastro-colaborador-form"
        >
          <Form.Item
            name="name"
            label="Nome"
            rules={[{ required: true, message: "O Nome é obrigatório." }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-Mail"
            rules={[
              {
                type: "email",
                message: "Por favor, informe um e-mail válido.",
              },
              { required: true, message: "O E-Mail é obrigatório." },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="message" label="Mensagem">
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item label="Currículo (DOC)">
            <Dragger
              name="file"
              beforeUpload={(file) => {
                const acceptedTypes = [
                  "application/msword",
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                ];
                const isAccepted = acceptedTypes.includes(file.type);
                const isSmallEnough = file.size / 1024 / 1024 <= 10;

                if (!isAccepted) {
                  message.error("Apenas arquivos Word (DOC/DOCX) são aceitos.");
                  return Upload.LIST_IGNORE;
                }

                if (!isSmallEnough) {
                  message.error("O arquivo deve ter no máximo 10MB.");
                  return Upload.LIST_IGNORE;
                }

                handleUpload(file);
                return false;
              }}
              onRemove={() => setFileUrl("")}
              showUploadList={{ showRemoveIcon: true }}
              disabled={loading}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Clique ou arraste o arquivo para esta área
              </p>
              <p className="ant-upload-hint">
                Apenas arquivos Word (DOC/DOCX), até 10MB.
              </p>
            </Dragger>
          </Form.Item>

          <Button
            type="primary"
            onClick={handleSendEmail}
            loading={loading}
            disabled={loading || !fileUrl}
          >
            <span>Enviar</span>
          </Button>
        </S.Form>
      </S.SectionForm>
    </S.Container>
  );
};

export default WorkWithUs;
