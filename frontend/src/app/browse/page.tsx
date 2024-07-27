'use client';

import { MainContainer } from "./page.style";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RequestsGET from "./GET/requestsGET";
import Navigation from "@/components/Navigation/Navigation";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <MainContainer>
      <Navigation />
      <QueryClientProvider client={queryClient}>
        <RequestsGET />
      </QueryClientProvider>
    </MainContainer>
  );
}