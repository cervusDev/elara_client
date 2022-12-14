import { axiosInstance } from './axios';
import { mountUrl } from '@/utils/mountUrl';

type QueryProps = Record<string, any>;
type Post<T> = Omit<T, OmitPostProps>;
type OmitPostProps = 'id' | 'createdAt' | 'updatedAt' | 'deletedAt';

export class ApiService<T = never, R = T> {
  private readonly DOMAIN_REF;
  constructor(DOMAIN_REF: string) {
    this.DOMAIN_REF = DOMAIN_REF;
  }

  public async getOne(queryParams: QueryProps) {
    const url = mountUrl(this.DOMAIN_REF, queryParams);
    return axiosInstance.get<R>(`${url}`) as unknown as Promise<R>;
  }

  public async get(queryParams: QueryProps) {
    const url = mountUrl(this.DOMAIN_REF, queryParams);
    return axiosInstance.get<R[]>(`${url}`) as unknown as Promise<R[]>;
  }

  public async getParam(param: string | number) {
    return axiosInstance.get<R>(`/${this.DOMAIN_REF}/${param}`) as unknown as Promise<R[]>;
  }

  public async post(data: Post<T>) {
    return axiosInstance.post<Post<T>, R>(`/${this.DOMAIN_REF}`, data as T) as unknown as Promise<R>;
  }
}
