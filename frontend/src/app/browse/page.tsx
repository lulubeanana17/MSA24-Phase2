'use client';

import { MainContainer } from "./page.style";
import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from "react";

type Post = {
  id: number;
  title: string;
  location: string;
  detail: string;
  startTime: string;
  urgencyId: number;
  departmentId: number;
  progressId: number;
};

function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async (): Promise<Array<Post>> => {
      const response = await fetch('http://localhost:5004/backend/request');
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    },
  });
}

function Posts({ setPostId }: { setPostId: React.Dispatch<React.SetStateAction<number>> }) {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = usePosts();

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {status === 'pending' ? (
          'Loading...'
        ) : status === 'error' ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div>
              {data.map((post) => (
                <p key={post.id}>
                  <a
                    onClick={() => setPostId(post.id)}
                    href="#"
                    style={
                      queryClient.getQueryData(['post', post.id])
                        ? {
                            fontWeight: 'bold',
                            color: 'green',
                          }
                        : {}
                    }
                  >
                    {post.title}
                  </a>
                </p>
              ))}
            </div>
            <div>{isFetching ? 'Background Updating...' : ' '}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [postId, setPostId] = useState(-1);
  const queryClient = new QueryClient();

  return (
    <MainContainer>
      <QueryClientProvider client={queryClient}>
        <Posts setPostId={setPostId} />
      </QueryClientProvider>
    </MainContainer>
  );
}