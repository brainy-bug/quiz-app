import { useState, createContext, useMemo } from "react";
import { useFormContext } from "../hooks/useFormContext";

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { initialState, setFormData } = useFormContext();

  const handlePageLoad = () => {
    setFormData(initialState);
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => {
      clearTimeout(timeoutId);
    };
  };

  const contextValue = useMemo(
    () => ({ isLoading, setIsLoading, handlePageLoad }),
    [isLoading]
  );

  return (
    <PageContext.Provider value={contextValue}>{children}</PageContext.Provider>
  );
};
