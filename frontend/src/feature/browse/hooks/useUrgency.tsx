import {
    useQuery,
  } from '@tanstack/react-query';
import getUrgency from '../services/urgencyByIdService';

export default function useUrgency(urgencyId: number) {
    return useQuery({
        queryKey: ['urgency', urgencyId],
        queryFn: () => getUrgency(urgencyId),
        enabled: !!urgencyId
    })
}