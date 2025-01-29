import { createContext, useState } from "react";

interface FiltersContextType {
  filters: { minPrice: number; category: string };
  setFilters: React.Dispatch<React.SetStateAction<{ minPrice: number; category: string }>>;
}

// Este es el que tenemos que consumir
export const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export function FiltersProvider({ children }: any) {

  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 500,
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
