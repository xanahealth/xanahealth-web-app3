import { Check } from "lucide-react";

export const Stepper = ({
  newSteps = [1, 2, 3, 4],
  activeStep,
}: {
  newSteps?: number[];
  activeStep: number;
}) => {
  const stepsDisplay = newSteps.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newSteps.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center text-grey-100">
          <div
            className={`rounded-full transition duration-500 ease-in-out h-12 w-12 flex items-center justify-center ${step == activeStep
                ? "bg-green-800 text-white font-bold"
                : "bg-green-800 px-2 "
            }`}
          >
            {step == activeStep ? (
              <span className="text-grey-100 font-bold text-xl">
                <Check />
              </span>
            ) : (
              index + 1
            )}
          </div>
        </div>
        <div
          className={`flex-auto border-t-2 border-dotted transition duration-500 ease-in-out ${
            step == activeStep ? "border-green-800" : "border-grey-500"
          }`}
        ></div>
      </div>
    );
  });
  return (
    <div className="xs:mx-1 mx-4 p-4 flex justify-between items-center">
      {stepsDisplay}
    </div>
  );
};
