"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StepperPage } from "./stepper";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StepperPage />
    </QueryClientProvider>
  );
}
