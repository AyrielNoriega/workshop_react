import { useState, type KeyboardEvent } from "react";

interface Props {
  placeholder?: string;
  onQuery: (query: string) => void;
}

export const SearchBard = ({ placeholder, onQuery }: Props) => {

  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onQuery(query);
  };

  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        placeholder={placeholder ?? "Buscar"}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => handleKeydown(e)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
