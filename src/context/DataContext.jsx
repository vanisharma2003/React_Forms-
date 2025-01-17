import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const addEntry = (entry) => {
    setData((prev) => [...prev, entry]);
  };

  const deleteEntry = (id) => {
    setData((prev) => prev.filter((entry, index) => index !== id));
  };

  const updateEntry = (id, updatedEntry) => {
    setData((prev) =>
      prev.map((entry, index) => (index === id ? updatedEntry : entry))
    );
  };

  return (
    <DataContext.Provider value={{ data, addEntry, deleteEntry, updateEntry }}>
      {children}
    </DataContext.Provider>
  );
};
