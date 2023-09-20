import { Router } from 'express';
import { UserController } from './user.controller';

export class UserRouter {
    router = Router();

    constructor(private userController: UserController) {
        this.configureRoutes();
    }

    private configureRoutes(): void {
        this.router.get('/:id', (req, res, next) => {
            try {
                const result = this.userController.getById(
                    parseInt(req.params.id),
                );
                res.status(200).json(result);
            } catch (error: unknown) {
                next(error);
            }
        });

        this.router.post('/add-user', (req, res, next) => {
            try {
                const result = this.userController.add(req.body.username);
                res.status(200).json(result);
            } catch (error: unknown) {
                next(error);
            }
        });

        this.router.delete('/delete/:id', (req, res, next) => {
            try {
                const result = this.userController.delete(
                    parseInt(req.params.id),
                );
                res.status(200).json(result);
            } catch (error: unknown) {
                next(error);
            }
        });

        this.router.put('/update/:id', (req, res, next) => {
            try {
                const result = this.userController.update(
                    parseInt(req.params.id),
                    req.body.username,
                );
                res.status(200).json(result);
            } catch (error: unknown) {
                next(error);
            }
        });
    }
    
}
