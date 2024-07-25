import { useMutation, useQueryClient } from "@tanstack/react-query";
import postRequest from "../services/requestPostService";

export default function useRequestPOST() {
    const queryClient = useQueryClient()

    return useMutation({
      mutationFn: postRequest,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['requestPOST'] })
      },
      onError: (error) => {
        console.error("Error posting request:", error);
    }
    })
};
