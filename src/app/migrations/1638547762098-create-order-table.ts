import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createOrderTable1638547762098 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(this.table, true);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(this.table, true);
  }

  public readonly table = new Table({
    name: 'order',
    columns: [
      {
        name: 'id',
        type: 'varchar(64)',
        isPrimary: true,
      },
      {
        name: 'status',
        type: 'varchar(10)',
        isUnique: true,
        isNullable: false,
      },
      {
        name: 'productId',
        type: 'varchar(64)',
        isNullable: false,
      },
      {
        name: 'quantity',
        type: 'SMALLINT',
        isNullable: false,
      },
      {
        name: 'date_modified',
        type: 'datetime',
        isNullable: false,
      },
      {
        name: 'date_created',
        type: 'datetime',
        isNullable: false,
      },
      {
        name: 'enabled',
        type: 'boolean',
        isNullable: false,
      },
    ],
  });
}
