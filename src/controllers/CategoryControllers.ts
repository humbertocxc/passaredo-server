import { Request, Response } from "express";
import { CreateCategoryService, DeleteCategoryService, GetAllCategoriesService, GetCategoryService, UpdateCategoryService } from "../services/CategoryServices";


export class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const { name, isActive, addable } = request.body

        const service = new CreateCategoryService();
        const result = await service.execute({ name, isActive, addable })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}

export class GetAllCategoriesController {
    async handle(request: Request, response: Response) {
        const service = new GetAllCategoriesService();

        const categories = await service.execute();

        return response.json(categories);
    }
}

export class GetCategoryController {
    async handle(request: Request, response: Response) {
        const req = request.params;
        const id = Number(req.id);

        const service = new GetCategoryService();
        const result = await service.execute({ id })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}

export class DeleteCategoryController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeleteCategoryService();

        const result = await service.execute(Number(id));

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(204).end()
    }
}

export class UpdateCategoryController {
    async handle(request: Request, response: Response) {
        const req = request.params;
        const id = Number(req.id);

        const { name, isActive, addable } = request.body;

        const service = new UpdateCategoryService();

        const result = await service.execute({ id, name, isActive, addable })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result);
    }
}