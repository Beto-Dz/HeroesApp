import { useForm } from "../../hooks/useForm";

export const SearchComponent = ({ navigate, firsValue = "" }) => {
  // uso de custom hook para manejo del formulario
  const { searchText, handleOnChangeInput } = useForm({
    searchText: firsValue,
  });

  // función de ayuda para manejar el envío del formulario
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (searchText.trim().length <= 0) return;

    // usando query params con ?q=
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="searchText"
        value={searchText}
        onChange={handleOnChangeInput}
        className="p-1 px-3 rounded-full outline-1 outline-slate-500 outline w-full shadow-md shadow-sky-400"
        placeholder="Buscar heroes..."
        autoComplete="off"
        autoFocus
      />
    </form>
  );
};
