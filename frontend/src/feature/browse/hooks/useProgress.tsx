import {
    useQuery,
  } from '@tanstack/react-query';
import getProgress from '../services/progressByIdService';

export default function useProgress(progressId: number | undefined) {
    return useQuery({
        queryKey: ['progress', progressId],
        queryFn: () => getProgress(progressId),
        enabled: !!progressId
    })
}