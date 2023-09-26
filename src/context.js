import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const TITLE_URL = "https://openlibrary.org/search.json?title=";
const AUTHOR_URL = "https://openlibrary.org/search.json?author=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("the great gatsby");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      // Fetch books by title
      const titleResponse = await fetch(`${TITLE_URL}${searchTerm}`);
      const titleData = await titleResponse.json();
      const titleDocs = titleData.docs || [];

      // Fetch books by author
      const authorResponse = await fetch(`${AUTHOR_URL}${searchTerm}`);
      const authorData = await authorResponse.json();
      const authorDocs = authorData.docs || [];

      // Merge the results from both requests
      const mergedBooks = [...titleDocs, ...authorDocs].slice(0, 20).map((bookSingle) => {
        const {
          key,
          author_name,
          cover_i,
          edition_count,
          first_publish_year,
          title,
        } = bookSingle;

        return {
          id: key,
          author: author_name,
          cover_id: cover_i,
          edition_count: edition_count,
          first_publish_year: first_publish_year,
          title: title,
        };
      });

      setBooks(mergedBooks);

      if (mergedBooks.length > 1) {
        setResultTitle("Search Results");
      } else {
        setResultTitle("No Books Found");
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <AppContext.Provider
      value={{
        loading,
        books,
        setSearchTerm,
        resultTitle,
        setResultTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
