// import { DataSource } from "typeorm";
import { AppDataSource } from "../data-source";
import { Photo } from "../entity/Photo";

type PhotoRequest = {
    filename?: string,
    id?: number
}


export class CreatePhotoService {
    async execute({ filename }: PhotoRequest) {
        const photo = await AppDataSource
            .createQueryBuilder()
            .insert()
            .into(Photo)
            .values([
                { filename },
            ])
            .execute()

        return photo;
    }
}

export class GetAllPhotosService {
    async execute() {
        const photos = AppDataSource
            .getRepository(Photo)
            .find()

        return photos;
    }
}

export class GetPhotoService {
    async execute({ id }: PhotoRequest) {
        const photo = await AppDataSource
            .getRepository(Photo)
            .createQueryBuilder("photo")
            .where("photo.id = :id", { id })
            .getOne()

        return photo;
    }
}

export class UpdatePhotoService {
    async execute({ id, filename }: PhotoRequest) {
        const photo = AppDataSource
            .createQueryBuilder()
            .update(Photo)
            .set({ filename })
            .where("id = :id", { id })
            .execute()

        return photo;
    }
}

export class DeletePhotoService {
    async execute(id: number) {
        const photo = AppDataSource
            .createQueryBuilder()
            .delete()
            .from(Photo)
            .where("id = :id", { id })
            .execute()

        return photo;
    }
}