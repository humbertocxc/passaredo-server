import { AppDataSource } from "../data-source";
import { Card } from "../entity/Card";
import { GetCategoryService } from "./CategoryServices";
import { GetUserService } from "./UserServices";

type CardRequest = {
    title?: string,
    description?: string,
    created_at?: Date,
    deadline?: Date,
    user_id?: number,
    category_id?: number,
    id?: number
}


export class CreateCardService {
    async execute({ title, description, created_at, deadline, category_id, user_id }: CardRequest) {
        const userService = new GetUserService();
        const user = await userService.execute({ id: user_id })

        const categoryService = new GetCategoryService();
        const category = await categoryService.execute({ id: category_id })

        const card = await AppDataSource
            .createQueryBuilder()
            .insert()
            .into(Card)
            .values([
                { title, description, created_at, deadline, user_id: user.id, category_id: category.id },
            ])
            .execute()

        return card;
    }
}

export class GetAllCardsService {
    async execute() {
        const cards = AppDataSource
            .getRepository(Card)
            .find()

        return cards;
    }
}

export class GetCardByCategoryService {
    async execute({ id }: CardRequest) {
        const card = await AppDataSource
            .getRepository(Card)
            .createQueryBuilder("Card")
            .where("Card.category_id = :id", { id })
            .getMany()

        return card;
    }
}

export class GetCardByUserService {
    async execute({ id }: CardRequest) {
        const card = await AppDataSource
            .getRepository(Card)
            .createQueryBuilder("Card")
            .where("Card.user_id = :id", { id })
            .getMany()

        return card;
    }
}

export class GetCardService {
    async execute({ id }: CardRequest) {
        const card = await AppDataSource
            .getRepository(Card)
            .createQueryBuilder("Card")
            .where("Card.id = :id", { id })
            .getOne()

        return card;
    }
}

export class UpdateCardService {
    async execute({ id, title, description, created_at, deadline, user_id, category_id }: CardRequest) {
        const userService = new GetUserService();
        const user = await userService.execute({ id: user_id })

        const categoryService = new GetCategoryService();
        const category = await categoryService.execute({ id: category_id })

        const card = AppDataSource
            .createQueryBuilder()
            .update(Card)
            .set({ title, description, created_at, deadline, user_id: user.id, category_id: category.id })
            .where("id = :id", { id })
            .execute()

        return card;
    }
}

export class DeleteCardService {
    async execute(id: number) {
        const card = AppDataSource
            .createQueryBuilder()
            .delete()
            .from(Card)
            .where("id = :id", { id })
            .execute()

        return card;
    }
}