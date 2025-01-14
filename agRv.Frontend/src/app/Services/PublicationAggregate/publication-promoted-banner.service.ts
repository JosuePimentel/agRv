import { Injectable } from '@angular/core';
import { BaseService } from '../Base/base.service';
import { PublicationPromotedBannerDtoInterface } from "../../module/interfaces/DTO's/PublicationAggregate/publication-promoted-banner.dto.interface";
import { PublicationPromotedBannerModelInterface } from '../../module/interfaces/Models/PublicationAggregate/publication-promoted-banner.model.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PublicationPromotedBannerService extends BaseService<
  PublicationPromotedBannerModelInterface,
  PublicationPromotedBannerDtoInterface
> {
  constructor(private readonly h: HttpClient) {
    super(h);
    this.apiUrl += 'publication-banner';
  }
}
