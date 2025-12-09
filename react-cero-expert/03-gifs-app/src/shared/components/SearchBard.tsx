interface Props {
  placeholder?: string;
}

export const SearchBard = ({ placeholder }: Props) => {
  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder ?? "Buscar"} />
      <button>Buscar</button>
    </div>
  );
};
