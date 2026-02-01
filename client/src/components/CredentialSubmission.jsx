import { CirclePlus, X } from "lucide-react";
import React, { useState } from "react";

const CredentialSubmission = ({ onClose, listing }) => {
  const [newField, setNewField] = useState("");
  const [credential, setCredential] = useState([
    { type: "email", name: "Email", value: "" },
    { type: "password", name: "Password", value: "" },
  ]);

  const handleAddField = () => {
    const name = newField.trim();
    if (!name) return toast("Please enter a field name");
    setCredential((prev) => [...prev, { type: "text", name, value: "" }]);
    setNewField("");
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur z-50 flex items-center justify-center p-4">
      {/* MODAL BOX */}
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="bg-linear-to-r from-indigo-600 to-indigo-400 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold">{listing?.title}</h3>
            <p className="text-sm">
              Adding Credentials for {listing?.username} on {listing?.platform}
            </p>
          </div>

          <button
            onClick={onClose}
            className="ml-4 p-1 hover:bg-white/20 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmission}
          className="flex flex-col gap-4 p-4 overflow-y-auto"
        >
          {credential.map((cred, index) => (
            <div
              key={index}
              className="grid grid-cols-[2fr_3fr_auto] items-center gap-2"
            >
              <label className="text-sm font-medium text-gray-800">
                {cred.name}
              </label>

              <input
                type="text"
                value={cred.value}
                onChange={(e) =>
                  setCredential((prev) =>
                    prev.map((c, i) =>
                      i === index ? { ...c, value: e.target.value } : c,
                    ),
                  )
                }
                className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded outline-indigo-400"
              />

              <X
                className="w-5 h-5 text-gray-500 hover:text-red-600 cursor-pointer"
                onClick={() =>
                  setCredential((prev) => prev.filter((_, i) => i !== index))
                }
              />
            </div>
          ))}

          {/* Add Field */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={newField}
              onChange={(e) => setNewField(e.target.value)}
              placeholder="field name..."
              className="outline-none border-b border-gray-300 px-1 text-sm"
            />
            <button
              type="button"
              onClick={handleAddField}
              className="text-gray-600 hover:text-indigo-600"
            >
              <CirclePlus className="w-5 h-5" />
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 mt-2 rounded-md w-fit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CredentialSubmission;
