import {
    useQuery,
  } from '@tanstack/react-query';
import getRequests from '../services/requestsService';

export default function useRequests() {
    return useQuery({
        queryKey: ['requests'],
        queryFn: () => getRequests(),
        enabled: true
    })
}