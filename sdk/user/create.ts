import Fetch from '../bridgeFetchMethod';

export default async (data: {
  body: { firstName: string; lastName: string };
}): Promise<
  | { data: { firstName: string; lastName: string }; error: null }
  | {
      data: null;
      error:
        | { name: 'Body schema validation error'; status: 422; data: any }
        | { name: 'Axios Error'; status: 400; data: any }
        | { name: 'Internal Server Error'; status: 500 };
    }
> => {
  const res = await Fetch({ ...data, method: 'POST', path: '/user/create' });

  if (res.error && typeof res.error.status === 'number')
    return { data: null, error: res.error };
  else return { data: res, error: null };
};
