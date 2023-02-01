import Fetch from '../bridgeFetchMethod';

export default async (data: {
  body: { age: number };
  headers: { token: string };
}): Promise<
  | { data: { firstName: string; name: string; age: number }; error: null }
  | {
      data: null;
      error:
        | { name: 'Wrong token'; data?: any; status: 401 }
        | { name: 'Headers schema validation error'; status: 422; data: any }
        | { name: 'Body schema validation error'; status: 422; data: any }
        | { name: 'Headers schema validation error'; status: 422; data: any }
        | { name: 'Axios Error'; status: 400; data: any }
        | { name: 'Internal Server Error'; status: 500 };
    }
> => {
  const res = await Fetch({ ...data, method: 'POST', path: '/user/update' });

  if (res.error && typeof res.error.status === 'number')
    return { data: null, error: res.error };
  else return { data: res, error: null };
};
