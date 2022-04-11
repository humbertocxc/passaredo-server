import { Request, Response } from "express";
import { CreateCardService, DeleteCardService, GetAllCardsService, GetCardByCategoryService, GetCardByUserService, GetCardService, UpdateCardService } from "../services/CardServices";


export class CreateCardController {
    async handle(request: Request, response: Response) {
        const { title, description, created_at, category_id, user_id } = request.body

        const service = new CreateCardService();
        const result = await service.execute({ title, description, created_at, category_id, user_id })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}

export class GetAllCardsController {
    async handle(request: Request, response: Response) {
        const service = new GetAllCardsService();

        const cards = await service.execute();

        return response.json(cards);
    }
}

export class GetCardController {
    async handle(request: Request, response: Response) {
        const req = request.params;
        const id = Number(req.id);

        const service = new GetCardService();
        const result = await service.execute({ id })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}

export class GetCardByCategoryController {
    async handle(request: Request, response: Response) {
        const req = request.params;
        const id = Number(req.id);

        const service = new GetCardByCategoryService();
        const result = await service.execute({ id })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}

export class GetCardByUserController {
    async handle(request: Request, response: Response) {
        const req = request.params;
        const id = Number(req.id);

        const service = new GetCardByUserService();
        const result = await service.execute({ id })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}

export class DeleteCardController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeleteCardService();

        const result = await service.execute(Number(id));

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(204).end()
    }
}

export class UpdateCardController {
    async handle(request: Request, response: Response) {
        const req = request.params;
        const id = Number(req.id);

        const { title, description, created_at, deadline, user_id, category_id } = request.body;

        const service = new UpdateCardService();

        const result = await service.execute({ id, title, description, created_at, deadline, user_id, category_id })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result);
    }
}