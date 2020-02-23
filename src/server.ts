import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

export default class Server {
  public application: express.Application;

  private initServer(): Promise<express.Application> {
    return new Promise((resolve, reject) => {
      try {
        this.application = express();
        this.application.listen(3333, () => {
          resolve(this.application);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  private middlewares(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        console.log('Configurando Middlewares...');
        this.application.use(express.json());
        this.application.use(cors());
        console.log('Middlewares configurados com sucesso!');
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  private database(): Promise<void> {
    return new Promise((resolve, reject) => {
      console.log('Estabelecendo conexão com o banco de dados...');
      mongoose
        .connect('mongodb://localhost:27017/tsnode', {
          useNewUrlParser: true,
          useUnifiedTopology: true
        })
        .then(() => {
          console.log('Conexão com banco de dados realizada com sucesso!');
          resolve();
        })
        .catch(error => reject(error));
    });
  }

  private routes(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        console.log('Configurando rotas...');
        this.application.get('/', (req, res) => res.send('Hello World'));
        console.log('Rotas configuradas com sucesso!');
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  bootstrap(): Promise<Server> {
    return this.database().then(() =>
      this.initServer().then(() =>
        this.middlewares().then(() => this.routes().then(() => this))
      )
    );
  }
}
