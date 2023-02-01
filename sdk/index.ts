import hey from './/hey';
import hello from './/hello';
import usercreate from './user/create';
import userupdate from './user/update';

export const API = {
  hey: hey,
  hello: hello,
  user: { create: usercreate, update: userupdate },
};
