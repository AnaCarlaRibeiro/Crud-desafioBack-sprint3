import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1675532705545 implements MigrationInterface {
    name = 'createTables1675532705545'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(150) NOT NULL DEFAULT 'default_password'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }

}
