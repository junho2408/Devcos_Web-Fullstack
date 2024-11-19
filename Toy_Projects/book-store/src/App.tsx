import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { BookStoreThemeProvider } from "./context/themeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { create } from "domain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/books",
    element: <div>돗서 목록</div>
  }
])

function App() {
  return (
    <BookStoreThemeProvider>
        <ThemeSwitcher />
        <Layout>
          <RouterProvider router={router} />
        </Layout>
    </BookStoreThemeProvider>
  );
}

export default App;
