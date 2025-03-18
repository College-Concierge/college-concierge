
import { useState, useEffect } from 'react';
import { University } from '@/data/universityInterface';
import { universities } from '@/data/universities';
import { toast } from 'sonner';

interface UserInputs {
  educationLevel: string;
  courseInterest: string;
  specializations: string[];
  studyHours: string;
  budget: string;
  financingOption: string;
  salaryPackage: string;
  qualification: string;
  score: string;
  careerGoal: string;
  scholarshipCategory: string;
  userDetails: {
    fullName: string;
    gender: string;
    email: string;
    mobile: string;
    state: string;
    city: string;
  };
}

export const useRecommendationEngine = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 12;
  
  const [userInputs, setUserInputs] = useState<UserInputs>({
    educationLevel: '',
    courseInterest: '',
    specializations: [],
    studyHours: '',
    budget: '',
    financingOption: '',
    salaryPackage: '',
    qualification: '',
    score: '',
    careerGoal: '',
    scholarshipCategory: '',
    userDetails: {
      fullName: '',
      gender: '',
      email: '',
      mobile: '',
      state: '',
      city: '',
    }
  });
  
  const [isGeneratingRecommendations, setIsGeneratingRecommendations] = useState(false);
  const [recommendedUniversities, setRecommendedUniversities] = useState<University[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  
  // Calculate progress percentage
  const progressPercentage = ((currentStep - 1) / totalSteps) * 100;
  
  const updateUserInput = (field: string, value: any) => {
    setUserInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };
  
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };
  
  const generateRecommendations = () => {
    setIsGeneratingRecommendations(true);
    
    // Simulate API call with a delay
    setTimeout(() => {
      try {
        // Logic to generate recommendations based on user inputs
        const matchedUniversities = calculateRecommendations();
        setRecommendedUniversities(matchedUniversities);
        setIsComplete(true);
        
        toast.success('Recommendations ready!', {
          description: `We found ${matchedUniversities.length} universities matching your criteria.`
        });
      } catch (error) {
        toast.error('Error generating recommendations', {
          description: 'Please try again or contact support.'
        });
      } finally {
        setIsGeneratingRecommendations(false);
      }
    }, 2000);
  };
  
  const resetForm = () => {
    setCurrentStep(1);
    setUserInputs({
      educationLevel: '',
      courseInterest: '',
      specializations: [],
      studyHours: '',
      budget: '',
      financingOption: '',
      salaryPackage: '',
      qualification: '',
      score: '',
      careerGoal: '',
      scholarshipCategory: '',
      userDetails: {
        fullName: '',
        gender: '',
        email: '',
        mobile: '',
        state: '',
        city: '',
      }
    });
    setRecommendedUniversities([]);
    setIsComplete(false);
  };
  
  // Helper function to calculate university recommendations based on user inputs
  const calculateRecommendations = (): University[] => {
    // Create a scoring system for universities
    const scoredUniversities = universities.map(university => {
      let score = 0;
      
      // Score based on budget preferences
      if (userInputs.budget) {
        const [minStr, maxStr] = userInputs.budget.split('_to_');
        
        let minBudget = 0;
        let maxBudget = Infinity;
        
        if (userInputs.budget === 'below_1L') {
          maxBudget = 100000;
        } else if (userInputs.budget === 'above_6L') {
          minBudget = 600000;
        } else {
          minBudget = parseInt(minStr.replace('L', '00000'));
          maxBudget = parseInt(maxStr.replace('L', '00000'));
        }
        
        // If university fees are within budget range, add score
        if (university.fees.min <= maxBudget && university.fees.max >= minBudget) {
          score += 20;
        }
      }
      
      // Score based on university type
      if (userInputs.educationLevel === 'ug' && university.type === 'Public') {
        // Public universities are often better for UG
        score += 10;
      } else if (userInputs.educationLevel === 'pg' && university.type === 'Private') {
        // Private universities might be better for PG
        score += 10;
      } else if (userInputs.educationLevel === 'executive' && university.type === 'Deemed') {
        // Deemed universities might be better for executive education
        score += 10;
      }
      
      // Score based on ranking
      if (university.ranking <= 5) {
        score += 15;
      } else if (university.ranking <= 10) {
        score += 10;
      } else if (university.ranking <= 20) {
        score += 5;
      }
      
      // Score based on rating
      score += university.rating * 3;
      
      // Score boost for popular universities
      if (university.isPopular) {
        score += 5;
      }
      
      // Score based on study hours (more study hours might mean more demanding universities)
      if (userInputs.studyHours === '16+' && university.ranking <= 10) {
        score += 10;
      } else if (userInputs.studyHours === '8-16' && university.ranking > 5 && university.ranking <= 15) {
        score += 10;
      } else if (userInputs.studyHours === '4-8' && university.ranking > 10) {
        score += 10;
      }
      
      // Career goals alignment
      if (userInputs.careerGoal === 'yes' && university.ranking <= 10) {
        score += 15; // Top ranked universities typically have better placement
      }
      
      // Qualification match
      if (userInputs.qualification === 'postgraduate' && userInputs.educationLevel === 'phd') {
        score += 10; // PG qualified students are ready for PhD
      } else if (userInputs.qualification === 'graduate' && userInputs.educationLevel === 'pg') {
        score += 10; // Graduates are ready for PG
      } else if (userInputs.qualification === '12th' && userInputs.educationLevel === 'ug') {
        score += 10; // 12th completed students are ready for UG
      }
      
      return {
        university,
        score
      };
    });
    
    // Sort universities by score (descending)
    const sortedUniversities = scoredUniversities
      .sort((a, b) => b.score - a.score)
      .map(item => item.university);
    
    // Return top universities (or all if fewer than 10)
    return sortedUniversities.slice(0, Math.min(sortedUniversities.length, 10));
  };
  
  return {
    currentStep,
    totalSteps,
    goToNextStep,
    goToPreviousStep,
    userInputs,
    updateUserInput,
    isGeneratingRecommendations,
    recommendedUniversities,
    generateRecommendations,
    progressPercentage,
    resetForm,
    isComplete
  };
};
