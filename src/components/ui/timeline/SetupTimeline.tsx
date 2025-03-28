interface Step {
  title: string;
  description?: string;
}

interface SetupTimelineProps {
  currentStep: number;
  steps: Step[];
}

export default function SetUpTimeline({ currentStep, steps }: SetupTimelineProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-8 justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center justify-between">
            <span
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                index <= currentStep ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              {index <= currentStep ? (
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              ) : (
                <span className="text-sm font-medium text-white">{index + 1}</span>
              )}
            </span>
            <h3 className="mt-2 font-medium leading-tight text-center">{step.title}</h3>
            <p className=" text-gray-400">{step.description}</p>
            {/* {index < steps.length - 1 && (
              <div className="w-16 h-1 bg-gray-200 mt-4"></div>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
}