import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCachedInterests } from '~/redux/reducer/user';
import { selectCachedInterests } from '~/redux/selector/user';
import { api } from '~/utils/api';

const useInterest = () => {
  const cachedInterests = useSelector(selectCachedInterests);
  const query = api.interests.getInterests.useQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (cachedInterests.length === 0) {
      dispatch(setCachedInterests(query?.data?.interests ?? []));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cachedInterests.length]);

  return { cachedInterests };
};

export default useInterest;
