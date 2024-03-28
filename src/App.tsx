import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Root} from "./root.tsx";
import {ErrorPage} from "./components/error-page.tsx";
import {ProductDetail} from "./components/product-detail.tsx";
import {ProductsList} from "./components/products-list.tsx";

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

  return (
        <RouterProvider router={router} />
  )
}

export default App
