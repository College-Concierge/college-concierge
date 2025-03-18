
import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  percentage: number;
}

const ProgressBar = ({ currentStep, totalSteps, percentage }: ProgressBarProps) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
        <span className="text-sm font-medium">{Math.round(percentage)}% Complete</span>
      </div>
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
