import { Request, Response } from "express";
import { CreateUserService, DeleteUserService, GetAllUsersService, GetUserService, UpdateUserService } from "../services/UserServices";


export class CreateUserController {
    async handle(request: Request, response: Response) {
        const { firstName, lastName, photo_id } = request.body

        const service = new CreateUserService();
        const result = await service.execute({ firstName, lastName, photo_id })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}

export class GetAllUsersController {
    async handle(request: Request, response: Response) {
        const service = new GetAllUsersService();

        const users = await service.execute();

        return response.json(users);
    }
}

export class GetUserController {
    async handle(request: Request, response: Response) {
        const req = request.params;
        const id = Number(req.id);

        const service = new GetUserService();
        const result = await service.execute({ id })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}

export class DeleteUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeleteUserService();

        const result = await service.execute(Number(id));

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(204).end()
    }
}

export class UpdateUserController {
    async handle(request: Request, response: Response) {
        const req = request.params;
        const id = Number(req.id);

        const { firstName, lastName, photo_id } = request.body;

        const service = new UpdateUserService();

        const result = await service.execute({ id, firstName, lastName, photo_id })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result);
    }
}