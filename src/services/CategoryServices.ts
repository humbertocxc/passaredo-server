import { AppDataSource } from "../data-source";
import { Card } from "../entity/Card";
import { Category } from "../entity/Category";


type CategoryRequest = {
    name?: string,
    isActive?: boolean,
    addable?: boolean,
    id?: number,
    cards?: Card[]
}


export class CreateCategoryService {
    async execute({ name, isActive, addable }: CategoryRequest) {
        const category = await AppDataSource
            .createQueryBuilder()
            .insert()
            .into(Category)
            .values([
                { name, isActive, addable },
            ])
            .execute()

        return category;
    }
}

export class GetAllCategoriesService {
    async execute() {
        const categories = AppDataSource
            .getRepository(Category)
            .find()

        return categories;
    }
}

export class GetCategoryService {
    async execute({ id }: CategoryRequest) {
        const category = await AppDataSource
            .getRepository(Category)
            .createQueryBuilder("category")
            .where("category.id = :id", { id })
            .getOne()

        return category;
    }
}

export class UpdateCategoryService {
    async execute({ id, name, isActive, addable }: CategoryRequest) {
        const category = AppDataSource
            .createQueryBuilder()
            .update(Category)
            .set({ name, isActive, addable })
            .where("id = :id", { id })
            .execute()

        return category;
    }
}

export class DeleteCategoryService {
    async execute(id: number) {
        const category = AppDataSource
            .createQueryBuilder()
            .delete()
            .from(Category)
            .where("id = :id", { id })
            .execute()

        return category;
    }
}