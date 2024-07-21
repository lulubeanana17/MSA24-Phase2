import { useMutation, useQueryClient } from "@tanstack/react-query";
import putRequest from "../services/requestUpdateService";

export default function useRequestPUT() {
    const queryClient = useQueryClient()

    return useMutation({
      mutationFn: putRequest,
      onSuccess: (data, variables) => {
        queryClient.setQueryData(['requestPUT', { id: variables.id }], data)
      },
    })
};
