import React, { useReducer } from "react";

// Initial State
const initialState = {
  step: 1,
  data: {
    name: "",
    email: "",
    age: "",
  },
};

// Reducer
function reducer(state, action) {
  switch (action.type) {
    case "NEXT":
      return { ...state, step: state.step + 1 };
    case "PREV":
      return { ...state, step: state.step - 1 };
    case "UPDATE_FIELD":
      return {
        ...state,
        data: {
          ...state.data,
          [action.field]: action.value,
        },
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

// Step 1
const StepOne = ({ data, dispatch }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold text-gray-800">Step 1: Basic Info</h2>
    <input
      type="text"
      placeholder="Name"
      value={data.name}
      className="w-full p-2 border border-gray-300 rounded"
      onChange={(e) =>
        dispatch({ type: "UPDATE_FIELD", field: "name", value: e.target.value })
      }
    />
    <input
      type="email"
      placeholder="Email"
      value={data.email}
      className="w-full p-2 border border-gray-300 rounded"
      onChange={(e) =>
        dispatch({
          type: "UPDATE_FIELD",
          field: "email",
          value: e.target.value,
        })
      }
    />
  </div>
);

// Step 2
const StepTwo = ({ data, dispatch }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold text-gray-800">Step 2: More Info</h2>
    <input
      type="number"
      placeholder="Age"
      value={data.age}
      className="w-full p-2 border border-gray-300 rounded"
      onChange={(e) =>
        dispatch({ type: "UPDATE_FIELD", field: "age", value: e.target.value })
      }
    />
  </div>
);

// Review
const Review = ({ data }) => (
  <div className="space-y-2">
    <h2 className="text-xl font-semibold text-gray-800">Review Your Info</h2>
    <p>
      <strong>Name:</strong> {data.name}
    </p>
    <p>
      <strong>Email:</strong> {data.email}
    </p>
    <p>
      <strong>Age:</strong> {data.age}
    </p>
  </div>
);

// Main Component
function MultiStepForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { step, data } = state;

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne data={data} dispatch={dispatch} />;
      case 2:
        return <StepTwo data={data} dispatch={dispatch} />;
      case 3:
        return <Review data={data} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 border rounded-lg shadow-sm bg-white space-y-6">
      {renderStep()}

      <div className="flex justify-between pt-4">
        {step > 1 && (
          <button
            onClick={() => dispatch({ type: "PREV" })}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
          >
            Back
          </button>
        )}
        {step < 3 && (
          <button
            onClick={() => dispatch({ type: "NEXT" })}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ml-auto"
          >
            Next
          </button>
        )}
        {step === 3 && (
          <>
            <button
              onClick={() => alert("Form submitted!")}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Submit
            </button>
            <button
              onClick={() => dispatch({ type: "RESET" })}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
            >
              Reset
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default MultiStepForm;
