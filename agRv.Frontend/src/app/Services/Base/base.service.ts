import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from '../../enviroment';

export abstract class BaseService<TModel, TDto> {
  public apiUrl = environment.apiUrl;

  constructor( private readonly http: HttpClient ) {}

  async getAll(): Promise<TDto[]> {
    return lastValueFrom(await this.http.get<TDto[]>(this.apiUrl));
  }

  async getOne(id: string): Promise<TDto> {
    return lastValueFrom(await this.http.get<TDto>(this.apiUrl+'/'+id));
  }
}
