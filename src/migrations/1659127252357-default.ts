import { MigrationInterface, QueryRunner } from "typeorm";

export class default1659127252357 implements MigrationInterface {
    name = 'default1659127252357'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "requests" ADD "Description_Solution" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "requests" DROP COLUMN "Description_Solution"`);
    }

}
