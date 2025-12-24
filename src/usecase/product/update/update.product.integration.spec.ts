import { Sequelize } from "sequelize-typescript";

import ProductFactory from "../../../domain/product/factory/product.factory";
import ProductModel from "../../../infrastructure/product/repository/sequelize/product.model";
import ProductRepository from "../../../infrastructure/product/repository/sequelize/product.repository";
import UpdateProductUseCase from "./update.product.usecase";

describe("Integration test for product update use case", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory:",
            logging: false,
            sync: { force: true },
        });

        await sequelize.addModels([ProductModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it("should update a product", async () => {
        const repository = new ProductRepository();
        const useCase = new UpdateProductUseCase(repository);

        const product = ProductFactory.create("a", "Product 1", 1);
        await repository.create(product);

        const input = {
            id: product.id,
            name: "Product 1 Updated",
            price: 3,
        };

        const output = await useCase.execute(input);

        expect(output).toEqual(input);

        const persisted = await ProductModel.findOne({ where: { id: product.id } });
        expect(persisted).not.toBeNull();
        expect(persisted!.id).toBe(product.id);
        expect(persisted!.name).toBe(input.name);
        expect(persisted!.price).toBe(input.price);
    });

    it("should throw an error when product does not exist", async () => {
        const repository = new ProductRepository();
        const useCase = new UpdateProductUseCase(repository);

        const input = {
            id: "non-existing-id",
            name: "Anything",
            price: 10,
        };

        await expect(useCase.execute(input)).rejects.toThrow();
    });
});
