"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface Step {
    number: number;
    title: string;
    description: string;
    image: string;
}

export default function StepShowcase({ dictionary }: { dictionary: Record<string, any> }) {
    const steps: Step[] = dictionary.steps || [];
    const [activeStep, setActiveStep] = React.useState(1);
    const [progress, setProgress] = React.useState(0);
    const progressInterval: any = React.useRef<NodeJS.Timeout | null>(null);
    const stepInterval = React.useRef<NodeJS.Timeout | null>(null);
    const stepDuration = 5000;
    const progressStep = 100 / (stepDuration / 50);

    const startProgress = React.useCallback(() => {
        setProgress(0);

        if (progressInterval.current) {
            clearInterval(progressInterval.current);
        }

        progressInterval.current = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval.current);
                    return 0;
                }
                return prev + progressStep;
            });
        }, 50);
    }, [progressStep]);

    const startStepInterval = React.useCallback(() => {
        if (stepInterval.current) {
            clearInterval(stepInterval.current);
        }

        stepInterval.current = setInterval(() => {
            setActiveStep((current) => {
                const nextStep = (current % steps.length) + 1;
                return nextStep;
            });
        }, stepDuration);
    }, [stepDuration]);

    React.useEffect(() => {
        startProgress();
        startStepInterval();
        return () => {
            if (progressInterval.current) {
                clearInterval(progressInterval.current);
            }
            if (stepInterval.current) {
                clearInterval(stepInterval.current);
            }
        };
    }, [startProgress, startStepInterval]);

    React.useEffect(() => {
        setProgress(0);
        startProgress();
    }, [activeStep, startProgress]);

    return (
        <div className="w-full max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                {/* Left Panel */}
                <div className="p-8 lg:p-12 flex flex-col">
                    <div className="space-y-8 flex-1">
                        {steps.map((step) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0.7 }}
                                animate={{
                                    opacity: activeStep === step.number ? 1 : 0.7,
                                    scale: activeStep === step.number ? 1 : 0.98,
                                }}
                                transition={{ duration: 0.3 }}
                                className="w-full text-left"
                            >
                                <button onClick={() => setActiveStep(step.number)} className="w-full text-left group">
                                    <div className="flex items-start gap-4">
                                        <span
                                            className={cn(
                                                "flex items-center justify-center w-12 h-12 rounded-full text-lg font-medium transition-all duration-300 shadow-lg",
                                                activeStep === step.number
                                                    ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white scale-110"
                                                    : "bg-blue-100 text-blue-500 group-hover:scale-105",
                                            )}
                                        >
                                            {step.number}
                                        </span>
                                        <div className="flex-1">
                                            <h3
                                                className={cn(
                                                    "font-semibold text-xl mb-2 transition-colors duration-300",
                                                    activeStep === step.number ? "text-blue-600" : "text-gray-600",
                                                )}
                                            >
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-500 leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                </button>
                                {activeStep === step.number && (
                                    <div className="mt-4">
                                        <Progress value={progress} className="h-2 bg-gray-100" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Step Indicator */}
                    <div className="mt-8 text-sm text-gray-500">
                        <span>
                            {dictionary.step_indicator.replace("{current}", activeStep.toString()).replace("{total}", steps.length.toString())}
                        </span>
                    </div>
                </div>

                {/* Right Panel - Image */}
                <div className="relative bg-gray-50">
                    {steps.map((step) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{
                                opacity: activeStep === step.number ? 1 : 0,
                                x: activeStep === step.number ? 0 : 20,
                            }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
