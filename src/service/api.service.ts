import { axiosInstance } from './axios';
import { mountUrl } from '../utils/mountUrl';

type QueryProps = Record<string, any>;

export class ApiService<T = never, R = T> {
  private readonly DOMAIN_REF;
  constructor(DOMAIN_REF: string) {
    this.DOMAIN_REF = DOMAIN_REF;
  }

  public async get(queryParams: QueryProps) {
    const url = mountUrl(this.DOMAIN_REF, queryParams);
    return axiosInstance.get<R[]>(`${url}`) as unknown as Promise<R[]>;
  }

  public async getOne(queryParams: QueryProps) {
    const url = mountUrl(this.DOMAIN_REF, queryParams);
    return axiosInstance.get<R>(`${url}`) as unknown as Promise<R>;
  }

  public async getParam(param: string | number) {
    return axiosInstance.get<R>(`/${this.DOMAIN_REF}/${param}`) as unknown as Promise<R[]>;
  }
}
