import React from "react";
import ManagerForm from "../pages/forms/ManagersForm";

function ModalManager() {
  return (
    <dialog id="manager_modal" className="modal">
      <div className="modal-box p-0">
        
        <ManagerForm />
      </div>
    </dialog>
  );
}

export default ModalManager;
