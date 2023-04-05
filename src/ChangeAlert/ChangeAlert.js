import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";

function ChangeListener({ sincronize }) {
  const { show, toggleShow } = useStorageListener();
  if (show) {
    return (
      <div className="content-alert">
        <p>
          "La página se ha actualizado. Para ver los cambios, por favor haz clic
          en el botón de actualización."
        </p>

        <button
          onClick={() => toggleShow(false)}
          className="Alert-button alert-button--update"
        >
          Actualizar
        </button>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeListener };
