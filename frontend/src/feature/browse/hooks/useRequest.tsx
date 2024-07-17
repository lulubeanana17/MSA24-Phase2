import {
    useQuery,
  } from '@tanstack/react-query';
import getRequest from '../services/requestByIdService';

export default function useRequest(requestId: number) {
    return useQuery({
        queryKey: ['request', requestId],
        queryFn: () => getRequest(requestId),
        enabled: !!requestId
    })
}