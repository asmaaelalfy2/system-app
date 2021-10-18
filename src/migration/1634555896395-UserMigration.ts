import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1634555896395 implements MigrationInterface {
    name = 'UserMigration1634555896395'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contact_info" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "phone" varchar, "email" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "meetings" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "zoomUrl" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "task" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "passwords" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "task"`);
        await queryRunner.query(`DROP TABLE "meetings"`);
        await queryRunner.query(`DROP TABLE "contact_info"`);
    }

}
