import React from "react";
import ProfessionForm from "../pages/forms/ProfessionForm";

function modalAddProfession() {
  return (
    <dialog id="profession_modal" className="modal">
      <div className="modal-box p-0">
        {/* Exit Btn */}
        <div>
          {/* <button
            onClick={() => document.getElementById("profession_modal").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button> */}
        </div>

        <ProfessionForm />
      </div>
    </dialog>
  );
}

export default modalAddProfession;
