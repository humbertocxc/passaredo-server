import { AppDataSource } from "../data-source";
import { Photo } from "../entity/Photo";
import { User } from "../entity/User";
import { GetPhotoService } from "./PhotoServices";

type UserRequest = {
    firstName?: string,
    lastName?: string,
    photo_id?: number,
    id?: number
}


export class CreateUserService {
    async execute({ firstName, lastName, photo_id }: UserRequest) {
        const service = new GetPhotoService();
        const photo = await service.execute({ id: photo_id })

        const user = await AppDataSource
            .createQueryBuilder()
            .insert()
            .into(User)
            .values([
                { firstName, lastName, photo_id: photo.id },
            ])
            .execute()

        return User;
    }
}

export class GetAllUsersService {
    async execute() {
        const users = AppDataSource
            .getRepository(User)
            .find()

        return users;
    }
}

export class GetUserService {
    async execute({ id }: UserRequest) {
        const user = await AppDataSource
            .getRepository(User)
            .createQueryBuilder("user")
            .where("user.id = :id", { id })
            .getOne()

        return user;
    }
}

export class UpdateUserService {
    async execute({ id, firstName, lastName, photo_id }: UserRequest) {
        const service = new GetPhotoService();
        const photo = await service.execute({ id: photo_id })

        const user = AppDataSource
            .createQueryBuilder()
            .update(User)
            .set({ firstName, lastName, photo_id: photo.id })
            .where("id = :id", { id })
            .execute()

        return user;
    }
}

export class DeleteUserService {
    async execute(id: number) {
        const user = AppDataSource
            .createQueryBuilder()
            .delete()
            .from(User)
            .where("id = :id", { id })
            .execute()

        return user;
    }
}