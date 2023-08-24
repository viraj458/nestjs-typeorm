import { Logger } from '@nestjs/common';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class PublicItems1692862998312 implements MigrationInterface {
  private readonly logger = new Logger(PublicItems1692862998312.name);
  public async up(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('up');
    await queryRunner.query('UPDATE item set PUBLIC = 1');
  }

  public async down(): Promise<void> {
    this.logger.log('down');
  }
}
