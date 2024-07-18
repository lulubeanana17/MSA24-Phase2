import {
    useQuery,
  } from '@tanstack/react-query';
import getRequest from '../services/requestByIdService';

export default function useRequest(requestId: number | undefined) {
    return useQuery({
        queryKey: ['request', requestId],
        queryFn: () => getRequest(requestId),
        enabled: !!requestId
    })
}