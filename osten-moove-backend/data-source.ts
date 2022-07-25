import { DataSource } from "typeorm";
import { Company } from "./src/entity/Company";

export const AppDataSource = new DataSource({
    type: "better-sqlite3",
    database: "./database/database.sqlite",
    synchronize: true,
    logging: true,
    entities: [Company, "__dirname + '/src/entity/*.{js,ts}'"],
    migrations: ["./build/database/migrations/*.ts"],
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });
