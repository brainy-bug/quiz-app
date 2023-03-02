import { useState } from "react";
import { useForm } from "./useForm";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { initialState, setFormData } = useForm();
  
  const handlePageLoad = () => {
    setFormData(initialState);
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 800);
  
    return () => {
      clearTimeout(timeoutId);
    };
  };
  return { isLoading, setIsLoading, handlePageLoad };
};

