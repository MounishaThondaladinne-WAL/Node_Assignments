import "./App.css";
import TodoMainApp from "./AssignmentMarch3/TodoMainApp";
import "./AssignmentMarch3/TodoApp.css";
import Product from "./ExamMarch4/Product";
import ShowProducts from "./ExamMarch4/ShowProducts";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import ForumComponent from "./AssignmentMarch7/ForumComponent";
import Todos from "./AssignmentMarch1/Todoapp";
import MyComponent from "./Table";
import SortTable from "./SortTable";
import PaginationTable from "./PaginationTable";
import Registration from "./RegistrationHome";
import "./RegistrationHome.css";
import Scroll from "./Scroll";
import axios from "axios";
import "./Scroll.css";
import { useEffect, useState } from "react";
import LoginHome from "./LoginHome";
import "./LoginHome.css";
import Footer from "./Footer";
import "./Footer.css";
import RegistrationHome from "./RegistrationHome2";
import Login from "./LoginHome2";
import TodoServerApp from "./TodoServerApp";
import ProductServer from "./ProductServerapp";
import ForumServerApp from "./ForumServerApp";
import "./productserver.css";
import "./ForumServer.css";
function App() {
  return (
    <div>
      {/*<Todos />
      <BrowserRouter>
        <Link to="/">Product App</Link>
        <br />
        <Link to="/showproduct">Show Products</Link>
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/showproduct" element={<ShowProducts />} />
        </Routes>
      </BrowserRouter>
      <ForumComponent />
      <MyComponent />
      <SortTable />
      <PaginationTable />
      <BrowserRouter>
        <Link to="/todos">TodoServerApp</Link>
        <Routes>
          <Route path="/todos" element={<TodoServerApp />} />
        </Routes>
      </BrowserRouter>
      <Registration />
      <LoginHome />
      <RegistrationHome />
      <Login />
      <Footer />*/}
      <BrowserRouter>
        <div className="link-div">
          <Link to="/products" className="link">
            Products App
          </Link>
          <Link to="/forums" className="link">
            Forum App
          </Link>
        </div>
        <Routes>
          <Route path="/forums" element={<ForumServerApp />} />
          <Route path="/products" element={<ProductServer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
