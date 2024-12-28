import { useState } from "react";

export const useForm = (initialStateForm = {}) => {
  // estado para manejar el estado del formulario
  const [stateForm, setStateForm] = useState( initialStateForm );

  // funcion de ayuda para manejar el cambio de un elemento del formulario
  const handleOnChangeInput = ({ target }) => {
    // desestructurando el name y value del input que hizo el cambio
    const { name, value } = target;

    // asignando nuevo estado, lo unico que cambia es el valor del input que hizo el cambio
    setStateForm({ ...stateForm, [name]: value });
  };

  // funcion de ayuda para manejar el reset del formulario
  const handleOnReset = () => {
    setStateForm(initialStateForm);
  };

  return {
    ...stateForm,
    dataObjectToSend: stateForm,
    handleOnChangeInput,
    handleOnReset,
  };
};
