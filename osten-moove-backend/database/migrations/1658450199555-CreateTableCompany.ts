import { MigrationInterface, QueryRunner, Table } from "typeorm";
export class CreateTableCompany1658450199555 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    
    await queryRunner.createTable(
      new Table({
        name: "company",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "corporateName",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "fantasyName",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "cnpj",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "phoneNumber",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "street",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "addressNumber",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "complement",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "district",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "city",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "federatedUnit",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("company");
  }
}
