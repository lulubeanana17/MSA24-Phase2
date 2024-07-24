import {
    useQuery,
  } from '@tanstack/react-query';
import getDepartments from '../services/departmentsService';

export default function useDepartments() {
    return useQuery({
        queryKey: ['departments'],
        queryFn: () => getDepartments(),
        enabled: true
    })
}