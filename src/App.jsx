import {
  Routes,
  Route,
  Link,
  useRoutes,
  NavLink,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import BookLayout from "./BookLayout";
import NotFound from "./pages/NotFound";
//import BookRoutes from "./BookRoutes";
//import About from "./pages/About";
//import Contact from "./pages/Contact";

export default function App() {
  /* let element = useRoutes([
    {
     path: '/',
      element: <Home />
    },{
      path: '*',
      element: <NotFound />
    }

  ]);*/

  const location = useLocation();

  return (
    <>
      {/* <Routes location="/books">
        <Route path="/books" element={<h1>Extra Content</h1>} />
      </Routes> */}
      <nav>
        <ul>
          <li>
            <NavLink to="/" state="Hi">
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "red" : "black" };
              }}
              to="/"
            >
              Home
            </NavLink>
          </li> */}
          <li>
            <NavLink end to="/books">
              Books
            </NavLink>
          </li>
        </ul>
      </nav>
      <h3>{location.state}</h3>
      {/* {element} */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}
        {/* 404 page */}

        {/* nesting */}

        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>

        {/* using routes from BookRoutes */}
        {/* <Route path="/books/*" element={<BookRoutes />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
