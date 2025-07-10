import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface Step {
  number: number;
  label: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (stepNumber: number) => void;
  variant?: "numbered-dot" | "blank-dot";
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  onStepClick,
  variant,
}) => {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  const scrollToCurrentStep = (stepIndex: number) => {
    const scrollArea = scrollAreaRef.current;
    if (scrollArea && scrollArea.children.length) {
      const stepElement = scrollArea.children[stepIndex] as HTMLElement;

      if (stepElement) {
        stepElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        //   inline: "center",
        });
      }
    }
  };

  React.useEffect(() => {
    scrollToCurrentStep(currentStep - 1);
  }, [currentStep]);
  return (
    <>
      <ScrollArea className="w-full relative whitespace-nowrap justify-center rounded-md z-[1]" dir="ltr">
        <div className="flex items-center p-4 justify-center" ref={scrollAreaRef}>
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center justify-center">
              <div className="flex items-center">
                <div className="flex flex-col items-center justify-center">
                  <div
                    onClick={() => onStepClick(step.number)}
                    className={cn(
                      "w-4 h-4 rounded-full flex text-sm font-bold justify-center transition-color duration-150",
                      step.number === currentStep
                        ? "bg-custom-blue text-primary-foreground"
                        : step.number < currentStep
                        ? "bg-custom-blue text-primary-foreground"
                        : "bg-custom-gray-cr-3 text-secondary-foreground hover:bg-custom-blue"
                    )}
                  >
                    {variant === "numbered-dot" &&
                      (step.number < currentStep ? (
                        <Check className="w-6 h-6" />
                      ) : (
                        step.number
                      ))}
                  </div>
                  <div
                    className={cn(
                      "mt-2 text-center w-20 transition-color duration-150 text-lg font-bold",
                      step.number === currentStep
                        ? "text-custom-gray-cr-2 "
                        : "text-custom-gray-cr-2"
                    )}
                  >
                    {step.label}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "w-16 h-[2px] mb-[25px] -mx-[24px] transition-color duration-150",
                      step.number <= currentStep - 1
                        ? "bg-custom-blue"
                        : "bg-custom-gray-cr-3"
                    )}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
};

export default Stepper;
