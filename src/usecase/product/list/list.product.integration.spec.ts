import { Sequelize } from "sequelize-typescript";

import ProductFactory from "../../../domain/product/factory/product.factory";
import ProductModel from "../../../infrastructure/product/repository/sequelize/product.model";
import ProductRepository from "../../../infrastructure/product/repository/sequelize/product.repository";
import ListProductUseCase from "./list.product.usecase";


describe("Integration test for listing product use case", () => {
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

    it("should list products", async () => {
        const repository = new ProductRepository();
        const useCase = new ListProductUseCase(repository);

        const productA = ProductFactory.create("a", "Product 1", 12);
        const productB = ProductFactory.create("b", "Product 2", 24);

        await repository.create(productA);
        await repository.create(productB);

        const output = await useCase.execute({});

        expect(output.products.length).toBe(2);

        const ids = output.products.map((p) => p.id);
        expect(ids).toEqual(expect.arrayContaining([productA.id, productB.id]));

        const outA = output.products.find((p) => p.id === productA.id);
        expect(outA).toEqual({
            id: productA.id,
            name: productA.name,
            price: productA.price,
        });

        const outB = output.products.find((p) => p.id === productB.id);
        expect(outB).toEqual({
            id: productB.id,
            name: productB.name,
            price: productB.price,
        });
    });

    it("should return empty list when there are no products", async () => {
        const repository = new ProductRepository();
        const useCase = new ListProductUseCase(repository);

        const output = await useCase.execute({});

        expect(output).toEqual({ products: [] });
    });
});
