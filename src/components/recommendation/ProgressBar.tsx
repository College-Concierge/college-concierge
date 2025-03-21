
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
          <motion.span 
            className="inline-flex justify-center items-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs mr-2"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            key={currentStep}
          >
            {currentStep}
          </motion.span>
          <span>of {totalSteps} steps</span>
        </span>
        <span className="text-sm font-medium flex items-center">
          {Math.round(percentage)}% Complete
          {percentage > 75 && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <CheckCircle2 className="h-4 w-4 ml-1 text-green-500" />
            </motion.div>
          )}
        </span>
      </div>
      <Progress 
        value={percentage} 
        className="h-2" 
      />
      {/* Milestone indicators */}
      <div className="flex justify-between mt-1 px-1">
        {[...Array(4)].map((_, i) => {
          const milestone = (i + 1) * 25;
          const isReached = percentage >= milestone;
          return (
            <div key={i} className="relative">
              <div className={`absolute -top-1 -ml-1 w-2 h-2 rounded-full ${isReached ? 'bg-primary' : 'bg-muted'}`} />
              {i < 3 && (
                <span className="absolute -top-1 text-[8px] text-muted-foreground ml-2">
                  {i === 0 ? 'Start' : i === 1 ? 'Course' : 'Details'}
                </span>
              )}
              {i === 3 && (
                <span className="absolute -top-1 text-[8px] text-muted-foreground -ml-6">
                  Complete
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
