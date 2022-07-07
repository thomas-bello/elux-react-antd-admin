import {BaseResource} from '@elux-admin-antd/stage/utils/resource';
import {MemberResource, api, defaultListSearch} from './entity';

export class Model extends BaseResource<MemberResource> {
  protected api = api;
  protected defaultListSearch = defaultListSearch;
}
