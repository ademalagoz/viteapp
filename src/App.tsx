import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";
import ResourceListPage from "./components/ResourceListPage";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ResourceListPage />
    </QueryClientProvider>
  );
}
