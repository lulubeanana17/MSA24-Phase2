import React from 'react';
import { useRouter } from 'next/router';
import useRequest from '@/feature/browse/hooks/useRequest';

const browseRequestById = () => {
  const router = useRouter();

  const [numericId, setNumericId] = React.useState<number>(0);

  React.useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      if (id) {
        const numericId = parseInt(id as string, 10);
        setNumericId(numericId);
      }
    }
  }, [router.isReady, router.query]);

  const { status, data } = useRequest(numericId);

  return (
    <div>
      {status === "pending" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error loading data</span>
      ) : (
        <div>
            {data.title}
            </div>
      )}
    </div>
  );
};

export default browseRequestById;
