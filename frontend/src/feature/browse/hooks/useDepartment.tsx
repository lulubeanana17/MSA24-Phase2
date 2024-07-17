import {
    useQuery,
  } from '@tanstack/react-query';
import getDepartment from '../services/departmentByIdService';

export default function useDepartment(departmentId: number) {
    return useQuery({
        queryKey: ['department', departmentId],
        queryFn: () => getDepartment(departmentId),
        enabled: !!departmentId
    })
}