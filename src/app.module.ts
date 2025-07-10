import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'store-rating-admin-user',
      password: 'Admin@123',
      database: 'rating_platform',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
