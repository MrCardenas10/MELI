import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Root} from "./root.tsx";
import {ErrorPage} from "./components/error-page.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {lazy, Suspense} from "react";

const ProductsList = lazy(() => import('./components/products-list.tsx'));
const ProductDetail = lazy(() => import('./components/product-detail.tsx'));

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "items",
                    element: <ProductsList />,
                    errorElement: <ErrorPage />,
                },
                {
                    path: "items/:id",
                    element: <ProductDetail />,
                    errorElement: <ErrorPage />,
                },
            ]
        },
    ]);

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 2000,
            },
        },
    })

    return (
      <QueryClientProvider client={queryClient}>
          <Suspense fallback={
              <div className={"w-full h-full flex justify-center items-center"}>
                <span className={"text-5xl font-semibold italic animate-pulse"}>Loading...</span>
              </div>
          }>
            <RouterProvider router={router} />
          </Suspense>
      </QueryClientProvider>
  )
}

export default App
