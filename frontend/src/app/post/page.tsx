"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StepperPage } from "./stepper";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <StepperPage />
      </Provider>
    </QueryClientProvider>
  );
}
