import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
