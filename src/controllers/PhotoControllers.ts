import { Request, Response } from "express";
import { CreatePhotoService, DeletePhotoService, GetAllPhotosService, GetPhotoService, UpdatePhotoService } from "../services/PhotoServices";


export class CreatePhotoController {
    async handle(request: Request, response: Response) {
        const { filename } = request.body

        const service = new CreatePhotoService();
        const result = await service.execute({ filename })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}

export class GetAllPhotosController {
    async handle(request: Request, response: Response) {
        const service = new GetAllPhotosService();

        const photos = await service.execute();

        return response.json(photos);
    }
}

export class GetPhotoController {
    async handle(request: Request, response: Response) {
        const req = request.params;
        const id = Number(req.id);

        const service = new GetPhotoService();
        const result = await service.execute({ id })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}

export class DeletePhotoController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeletePhotoService();

        const result = await service.execute(Number(id));

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(204).end()
    }
}

export class UpdatePhotoController {
    async handle(request: Request, response: Response) {
        const req = request.params;
        const id = Number(req.id);

        const { filename } = request.body;

        const service = new UpdatePhotoService();

        const result = await service.execute({ id, filename })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result);
    }
}