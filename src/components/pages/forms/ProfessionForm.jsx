import React, { useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showSuccessToast, showErrorToast } from "../../../lib/Toast";
import InputField from "../../ui/InputField";
import CloseButton from "../../ui/CloseButton";

function ProfessionForm() {
  const [profession_name, setProfession_name] = useState("");
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["add_profession"],
    mutationFn: async (formData) =>
      await axios.post("/professions/addProfession", formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get_professions"] });
      setProfession_name("");
      document.getElementById("profession_modal").close();
      showSuccessToast("Profession added successfully");
    },
    onError: (error) => {
      document.getElementById("profession_modal").close();
      showErrorToast("failed adding profession");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ profession_name });
  };

  
  return (
    <div className="bg-orange-50 p-6 rounded-2xl shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">
        Add Profession
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Profession Name"
              name="profession_name"
              type="text"
              placeholder="Enter Profession"
              value={profession_name}
              onChange={(e) => setProfession_name(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <CloseButton
            modalId={"profession_modal"}
            onCancel={() => setProfession_name("")}
          />

          <button
            type="submit"
            className="px-6 py-2 bg-amber-600 text-white rounded-xl hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Submit Profession
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfessionForm;
