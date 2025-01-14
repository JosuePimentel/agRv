import { Injectable } from '@angular/core';
import { BaseService } from '../Base/base.service';
import { CountryModelInterface } from '../../module/interfaces/Models/LocationAggregate/country.model.interface';
import { CountryDtoInterface } from "../../module/interfaces/DTO's/LocationAggregate/country.dto.interface";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountryService extends BaseService<
  CountryModelInterface,
  CountryDtoInterface
> {
  constructor(private readonly h: HttpClient) {
    super(h);
    this.apiUrl += 'country'
  }
}
