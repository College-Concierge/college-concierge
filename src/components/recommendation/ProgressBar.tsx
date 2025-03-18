
import React from 'react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2 } from 'lucide-react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  percentage: number;
}

const ProgressBar = ({ currentStep, totalSteps, percentage }: ProgressBarProps) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium flex items-center">
          <span className="inline-flex justify-center items-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs mr-2">
            {currentStep}
          </span>
          <span>of {totalSteps} steps</span>
        </span>
        <span className="text-sm font-medium flex items-center">
          {Math.round(percentage)}% Complete
          {percentage > 75 && <CheckCircle2 className="h-4 w-4 ml-1 text-green-500" />}
        </span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
};

export default ProgressBar;
