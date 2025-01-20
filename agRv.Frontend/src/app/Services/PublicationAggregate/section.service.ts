import { Injectable } from '@angular/core';
import { BaseService } from '../Base/base.service';
import { HttpClient } from '@angular/common/http';
import { SectionModelInterface } from '../../module/interfaces/Models/PublicationAggregate/section.model.interface';
import { SectionDtoInterface } from '../../module/interfaces/DTO\'s/PublicationAggregate/section.dto.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SectionService extends BaseService<
  SectionModelInterface,
  SectionDtoInterface
> {
  constructor(private readonly h: HttpClient) {
    super(h);
    this.apiUrl += 'section';
  }

  async getByFilmId(id: string): Promise<SectionDtoInterface[]> {
    return await lastValueFrom(this.h.get<SectionDtoInterface[]>(`${this.apiUrl}/by-film/${id}`));
  }
}
