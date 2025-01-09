import React from "react";
import ManagerForm from "../pages/forms/ManagersForm";

function ModalManager() {
  return (
    <dialog id="manager_modal" className="modal">
      <div className="modal-box p-0">
        {/* Exit Btn */}
        <div>
          {/* <button
            onClick={() => document.getElementById("manager_modal").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button> */}
        </div>

        <ManagerForm />
      </div>
    </dialog>
  );
}

export default ModalManager;
