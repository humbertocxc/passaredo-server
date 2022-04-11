import { Router } from "express";
import { CreateCardController, DeleteCardController, GetAllCardsController, GetCardByCategoryController, GetCardByUserController, GetCardController, UpdateCardController } from "./controllers/CardControllers";
import { CreateCategoryController, DeleteCategoryController, GetAllCategoriesController, GetCategoryController, UpdateCategoryController } from "./controllers/CategoryControllers";
import { CreatePhotoController, DeletePhotoController, GetAllPhotosController, GetPhotoController, UpdatePhotoController } from "./controllers/PhotoControllers";
import { CreateUserController, DeleteUserController, GetAllUsersController, GetUserController, UpdateUserController } from "./controllers/UserControllers";


const routes = Router();

//Categorias
routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.get("/categories/:id", new GetCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);

//Fotos
routes.post("/photos", new CreatePhotoController().handle);
routes.get("/photos", new GetAllPhotosController().handle);
routes.get("/photos/:id", new GetPhotoController().handle);
routes.put("/photos/:id", new UpdatePhotoController().handle);
routes.delete("/photos/:id", new DeletePhotoController().handle);

// //Usuários
routes.post("/users", new CreateUserController().handle);
routes.get("/users", new GetAllUsersController().handle);
routes.get("/users/:id", new GetUserController().handle);
routes.put("/users/:id", new UpdateUserController().handle);
routes.delete("/users/:id", new DeleteUserController().handle);

// //Cartões
routes.post("/cards", new CreateCardController().handle);
routes.get("/cards", new GetAllCardsController().handle);
routes.get("/cards/:id", new GetCardController().handle);
routes.get("/cards_by_category/:id", new GetCardByCategoryController().handle)
routes.get("/cards_by_user/:id", new GetCardByUserController().handle)
routes.put("/cards/:id", new UpdateCardController().handle);
routes.delete("/cards/:id", new DeleteCardController().handle);

export { routes }