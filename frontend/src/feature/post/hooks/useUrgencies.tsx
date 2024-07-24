import {
    useQuery,
  } from '@tanstack/react-query';
import getUrgencies from '../services/urgenciesService';

export default function useUrgencies() {
    return useQuery({
        queryKey: ['urgencies'],
        queryFn: () => getUrgencies(),
        enabled: true
    })
}