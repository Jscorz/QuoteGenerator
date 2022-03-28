import React, { useState, useContext, useEffect } from 'react';

const url = 'https://api.quotable.io/random';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState([]);

  const fetchQuotes = async () => {
    setLoading(true);

    try {
      const res = await fetch(`${url}`);
      const data = await res.json();
      if (data) {
        console.log(data);
      } else {
        console.log('error');
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchQuotes();
  }, []);

  return <AppContext.Provider value={{ data }}>{children}</AppContext.Provider>;
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
