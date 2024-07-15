'use client';

import { MainContainer } from "./page.style";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RequestsGET from "./requestsGET/requestsGET";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <MainContainer>
      <QueryClientProvider client={queryClient}>
        <RequestsGET />
      </QueryClientProvider>
    </MainContainer>
  );
}