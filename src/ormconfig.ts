import { join } from "path";
import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const config: SqliteConnectionOptions = {
    type: 'sqlite',
    database: "data1",

    // entities: ['dist/src/**/*.entity.js'],
    synchronize: true,//dont use this in production
    // entities: ["dist/entities/**/*{.js,.ts}"],
    entities: [
        // './entities/**/*.js'
        // "dist/entities/**/*{.js,.ts}"
        join(__dirname, '**', '*.entity.{ts,js}')
        // 'src/**/*.entity.{ts,js}'
    ],
    migrations: ["dist/migrations/**/*{.js,.ts}"],
    subscribers: ['src/subscriber/**/*.ts'],

    cli: {
        entitiesDir: 'src/entity',
        migrationsDir: 'src/migration',
        subscribersDir: 'src/subscriber',
    }
}
export =config