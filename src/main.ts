import Server from './server';

const server = new Server();

server
  .bootstrap()
  .then(() => {
    console.log('Aplicação iniciada com sucesso!');
  })
  .catch(error => {
    console.log('Error ao iniciar aplicação');
    console.error(error);
    process.exit(1);
  });
