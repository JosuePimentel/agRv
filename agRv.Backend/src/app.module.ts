import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlBaseModule } from './Modules/LinksAggregate/url-base.module';
import { LinkPublicationModule } from './Modules/LinksAggregate/link-publication.module';
import { LinkAccountModule } from './Modules/LinksAggregate/link-account.module';
import { GenreAccountModule } from './Modules/AccountAggregate/genre-account.module';
import { AccountModule } from './Modules/AccountAggregate/account.module';
import { AuthModules } from './Modules/AccountAggregate/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    GenreAccountModule,
    UrlBaseModule,
    LinkPublicationModule,
    LinkAccountModule,
    AccountModule,
    AuthModules,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
