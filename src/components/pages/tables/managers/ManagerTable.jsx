import React from "react";
import TableRow from "../managers/TableRow";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { SortDesc } from "lucide-react";
import { showErrorToast, showSuccessToast } from "../../../../lib/Toast";

function ManagersTable({ managers }) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: "delete_manager",
    mutationFn: async (id) => axios.delete(`users/manager/delete/${id}`),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["get_managers"] });
      showSuccessToast("Manager deleted successfully");
      document.getElementById("manager_modal").close();
    },
    onError: (error) => {
      showErrorToast("failed deleting manager");
    },
  });

  return (
    <div className="bg-white  rounded-xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-amber-200">
          <thead>
            <tr className="bg-gradient-to-r from-amber-100 to-orange-100">
              <th className="px-6 py-4 text-left text-amber-900 font-semibold">
                <div className="flex items-center gap-2 cursor-pointer hover:text-amber-700">
                  USERNAME
                  <SortDesc className="w-4 h-4" />
                </div>
              </th>
              <th className="px-6 py-4 text-left text-amber-900 font-semibold">
                EMAIL
              </th>
              <th className="px-6 py-4 text-left text-amber-900 font-semibold">
                PASSWORD
              </th>
              <th className="px-6 py-4 text-right text-amber-900 font-semibold">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-amber-100">
            {/* Row 1 */}
            {managers.map((manager) => (
              <TableRow key={manager._id} manager={manager} mutate={mutate} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManagersTable;
