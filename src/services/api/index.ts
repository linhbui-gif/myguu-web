import env from '@/env';
import AuthorizedInstance from '@/services/authorized-api';

const ApiService = AuthorizedInstance(env.api.baseUrl.service);

export default ApiService;
export * from './auth';
export * from './user';
export * from './banner';
export * from './category';
export * from './service';
export * from './store';
export * from './voucher';
export * from './address';
