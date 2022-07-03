import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class comments1656806510686 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "comments",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name_user",
            type: "varchar",
          },
          {
            name: "comment",
            type: "varchar",
          },
          {
            name: "post_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKPostComment",
            referencedTableName: "posts",
            referencedColumnNames: ["id"],
            columnNames: ["post_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("comments");
  }
}
