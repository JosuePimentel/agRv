import { Injectable } from '@angular/core';
import { BaseService } from '../Base/base.service';
import { HttpClient } from '@angular/common/http';
import { PublicationModelInterface } from '../../module/interfaces/Models/PublicationAggregate/publication.model.interface';
import { PublicationDtoInterface } from "../../module/interfaces/DTO's/PublicationAggregate/publication.dto.interface";
import { lastValueFrom } from 'rxjs';
import { PublicationEnumInterface } from '../../module/interfaces/DTO\'s/PublicationAggregate/publication-type.dto.interface';

@Injectable({ providedIn: 'root' })
export class PublicationService extends BaseService<
  PublicationModelInterface,
  PublicationDtoInterface
> {
  constructor(private readonly h: HttpClient) {
    super(h);
    this.apiUrl += 'publication';
  }

  async topBanner(): Promise<PublicationDtoInterface[]> {
    return lastValueFrom(
      await this.h.get<PublicationDtoInterface[]>(this.apiUrl + '/top-banner')
    );
  }

  async topPubs(type: PublicationEnumInterface): Promise<PublicationDtoInterface[]> {
    return lastValueFrom(
      await this.h.get<PublicationDtoInterface[]>(`${this.apiUrl}/top-pubs/${type}`)
    );
  }
}
