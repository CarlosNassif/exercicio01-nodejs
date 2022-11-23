// console.log('Hello world!')

const validateCPF = require('./cpf');

const schema = {
  properties: {
    name: {
      description: 'Digite seu nome',
      pattern: /^[a-z]+$/i,
      message: 'Apenas letras',
      required: true,
      before: (value) => value,
    },
    surname: {
      description: 'Digite seu sobrenome',
      pattern: /^[a-z]+$/i,
      message: 'Apenas letras',
      required: true,
    },
    address: {
      description: 'Digite seu endereço',
      required: false,
    },
    email: {
      description: 'Digite seu e-mail',
      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: 'Digite um e-mail válido',
      replace: null,
      required: false,
    },
    cpf: {
      description: 'Digite seu CPF',
      pattern: /\d{3}\.\d{3}\.\d{3}\-\d{2}/,
      conform: validateCPF,
      message: 'Digite o CPF válido com os pontos e hífen',
      required: false,
    },
  },
};

const prompt = require('prompt');

prompt.start();

prompt.get(schema, function (_, result) {
  console.log('Nome:', result.name);
  console.log('Sobrenome:', result.surname);
  console.log('Endereço:', result.address);
  console.log('E-mail:', result.email);
  console.log('CPF:', result.cpf);
});
