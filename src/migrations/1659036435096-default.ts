import { MigrationInterface, QueryRunner } from "typeorm";

export class default1659036435096 implements MigrationInterface {
    name = 'default1659036435096'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("ID_User" character varying(36) NOT NULL, "Name" character varying NOT NULL, "Email" character varying NOT NULL, "Password" character varying(60) NOT NULL, "ID_Sector" integer, CONSTRAINT "UQ_f73ebcea50dd1c375f20260dbe4" UNIQUE ("Email"), CONSTRAINT "PK_560b96589d32ae158bae2f543e8" PRIMARY KEY ("ID_User"))`);
        await queryRunner.query(`CREATE TABLE "sectors" ("ID_Sector" SERIAL NOT NULL, "Sector_Name" text NOT NULL, CONSTRAINT "UQ_f2154ece591ba4eb37884487b62" UNIQUE ("Sector_Name"), CONSTRAINT "PK_d9dc7588652e969198c88a67fca" PRIMARY KEY ("ID_Sector"))`);
        await queryRunner.query(`CREATE TYPE "public"."requests_status_enum" AS ENUM('open', 'closed')`);
        await queryRunner.query(`CREATE TABLE "requests" ("ID_Request" character varying(36) NOT NULL, "Patrimony" character varying NOT NULL, "Status" "public"."requests_status_enum" NOT NULL, "Description" text NOT NULL, "Request_Date" text NOT NULL, "Solution_Date" character varying, "ID_Setor" integer, "ID_User" character varying(36), CONSTRAINT "PK_e685cc86c61e8bdffd5403423dd" PRIMARY KEY ("ID_Request"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_67095804a50e3af34dea986aa4a" FOREIGN KEY ("ID_Sector") REFERENCES "sectors"("ID_Sector") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "requests" ADD CONSTRAINT "FK_c5a3e578d2228dced0e011c96d1" FOREIGN KEY ("ID_Setor") REFERENCES "sectors"("ID_Sector") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "requests" ADD CONSTRAINT "FK_dce866ed1f94eb844e7b5cd0aa8" FOREIGN KEY ("ID_User") REFERENCES "users"("ID_User") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "requests" DROP CONSTRAINT "FK_dce866ed1f94eb844e7b5cd0aa8"`);
        await queryRunner.query(`ALTER TABLE "requests" DROP CONSTRAINT "FK_c5a3e578d2228dced0e011c96d1"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_67095804a50e3af34dea986aa4a"`);
        await queryRunner.query(`DROP TABLE "requests"`);
        await queryRunner.query(`DROP TYPE "public"."requests_status_enum"`);
        await queryRunner.query(`DROP TABLE "sectors"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
