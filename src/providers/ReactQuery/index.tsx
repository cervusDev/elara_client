import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

interface IProps {
  children: React.ReactNode
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 1000 * 60 * 5
    }
  }
});

export function ReactQueryProvider({ children }: IProps) {
  const development = process.env.QUERY_PROVIDER === 'development';

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {development && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
