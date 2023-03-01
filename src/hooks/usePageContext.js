import { useContext } from "react";

import { PageContext } from "../context/PageContext";

export const usePageContext = () => {
  return useContext(PageContext);
};
