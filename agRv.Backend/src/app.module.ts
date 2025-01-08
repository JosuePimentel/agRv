import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlBaseModule } from './Modules/LinksAggregate/url-base.module';
import { LinkPublicationModule } from './Modules/LinksAggregate/link-publication.module';
import { LinkAccountModule } from './Modules/LinksAggregate/link-account.module';
import { GenreAccountModule } from './Modules/AccountAggregate/genre-account.module';
import { AccountModule } from './Modules/AccountAggregate/account.module';
import { AuthModules } from './Modules/AccountAggregate/auth/auth.module';
import { CountryModule } from './Modules/LocationAggregate/country.module';
import { StateModule } from './Modules/LocationAggregate/state.module';
import { CityModule } from './Modules/LocationAggregate/city.module';
import { AddressModule } from './Modules/LocationAggregate/address.module';
import { AgeRatingModule } from './Modules/PublicationAggregate/age-rating.module';
import { CinemaModule } from './Modules/PublicationAggregate/cinema.module';
import { FilmModule } from './Modules/PublicationAggregate/film.module';
import { GenreFilmModule } from './Modules/PublicationAggregate/genre-film.module';
import { PersonModule } from './Modules/PublicationAggregate/person.module';
import { ProductionCompanyModule } from './Modules/PublicationAggregate/production-company.module';
import { PublicationModule } from './Modules/PublicationAggregate/publication.module';
import { RestaurantModule } from './Modules/PublicationAggregate/restaurant.module';
import { SectionModule } from './Modules/PublicationAggregate/section.module';
import { ShowModule } from './Modules/PublicationAggregate/show.module';
import { TagPublicationModule } from './Modules/PublicationAggregate/tag-publication.module';
import { TagSectionModule } from './Modules/PublicationAggregate/tag-section.module';
import { DaysOpenModule } from './Modules/PublicationAggregate/days-open.module';
import { AppDataSource } from './data-source';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(AppDataSource.options),
    GenreAccountModule,
    UrlBaseModule,
    LinkPublicationModule,
    LinkAccountModule,
    AccountModule,
    AuthModules,
    CountryModule,
    StateModule,
    CityModule,
    AddressModule,
    AgeRatingModule,
    CinemaModule,
    FilmModule,
    GenreFilmModule,
    PersonModule,
    ProductionCompanyModule,
    PublicationModule,
    RestaurantModule,
    SectionModule,
    ShowModule,
    TagPublicationModule,
    TagSectionModule,
    DaysOpenModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
