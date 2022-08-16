import { ILogger } from './logger/logger.interface';
import { ExeptionFilter } from './errors/exeptionFilter';
import { UserController } from './users/users.controller';
import express, { Express } from "express"
import { Server } from "http";
import { inject, injectable } from 'inversify';
import { TYPES } from './types';
import 'reflect-metadata'

@injectable()
export class App {
    app: Express;
    server: Server;
    port: number;

    constructor(
            @inject(TYPES.ILogger) private logger: ILogger, 
            @inject(TYPES.UserController) private userController: UserController, 
            @inject(TYPES.ExeptionFilter) private exeptionFilter: ExeptionFilter, 
        ) {
        this.app = express();
        this.port = 8000;
    }

    useRoutes() {
        this.app.use('/users', this.userController.router);
    }

    useExeptionFilters() {
        this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter))
    }

    public async init() {
        this.useRoutes();
        this.server = this.app.listen(this.port);
        this.logger.log(`Сервер запущен на http://localhost:${this.port}`)
    }
}