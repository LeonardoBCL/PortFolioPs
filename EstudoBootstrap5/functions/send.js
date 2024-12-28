const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Método não permitido",
    };
  }

  // Pegar os dados do formulário enviado
  const { nome, email, mensagem } = JSON.parse(event.body);

  // Configurar o transporte do Nodemailer
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "contato.leonardoba@gmail.com", // Seu e-mail
      pass: "uvbx fsip umxn jmap",         // Sua senha (ou app password)
    },
  });

  try {
    // Enviar o e-mail
    await transporter.sendMail({
      from: "contato.leonardoba@gmail.com",
      to: ["contato.leonardoba@gmail.com"], // Adicione os destinatários
      subject: `${nome} te enviou uma mensagem no Portfolio`,
      text: `
        ${nome} com o e-mail ${email} te enviou a seguinte mensagem:

        ${mensagem}
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ mensagem: "Mensagem enviada com sucesso!" }),
    };
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ mensagem: "Erro ao enviar mensagem" }),
    };
  }
};
