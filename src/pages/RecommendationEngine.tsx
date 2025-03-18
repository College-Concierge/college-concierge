import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles, CheckCircle2, BookOpen, Clock, Coins, Briefcase, GraduationCap, Medal, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import SectionContainer from '@/components/layout/SectionContainer';
import CustomNavbar from '@/components/CustomNavbar';
import RecommendationResults from '@/components/recommendation/RecommendationResults';
import ProgressBar from '@/components/recommendation/ProgressBar';
import { useRecommendationEngine } from '@/hooks/useRecommendationEngine';
import Footer from '@/components/home/Footer';

// Define the interface for userDetails to fix type errors
interface UserDetails {
  fullName: string;
  gender: string;
  email: string;
  mobile: string;
  state: string;
  city: string;
}

const RecommendationEngine = () => {
  
  const { 
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
  } = useRecommendationEngine();

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <EducationLevelStep 
            selectedValue={userInputs.educationLevel} 
            onChange={(value) => updateUserInput('educationLevel', value)} 
          />
        );
      case 2:
        return (
          <CourseInterestStep 
            selectedValue={userInputs.courseInterest} 
            onChange={(value) => updateUserInput('courseInterest', value)} 
          />
        );
      case 3:
        return (
          <SpecializationStep 
            selectedValues={userInputs.specializations} 
            onChange={(values) => updateUserInput('specializations', values)} 
          />
        );
      case 4:
        return (
          <StudyHoursStep 
            selectedValue={userInputs.studyHours} 
            onChange={(value) => updateUserInput('studyHours', value)} 
          />
        );
      case 5:
        return (
          <BudgetStep 
            selectedValue={userInputs.budget} 
            onChange={(value) => updateUserInput('budget', value)} 
          />
        );
      case 6:
        return (
          <FinancingStep 
            selectedValue={userInputs.financingOption} 
            onChange={(value) => updateUserInput('financingOption', value)} 
          />
        );
      case 7:
        return (
          <SalaryPackageStep 
            selectedValue={userInputs.salaryPackage} 
            onChange={(value) => updateUserInput('salaryPackage', value)} 
          />
        );
      case 8:
        return (
          <QualificationStep 
            selectedValue={userInputs.qualification} 
            onChange={(value) => updateUserInput('qualification', value)} 
          />
        );
      case 9:
        return (
          <ScoreStep 
            selectedValue={userInputs.score} 
            onChange={(value) => updateUserInput('score', value)} 
          />
        );
      case 10:
        return (
          <CareerGoalStep 
            selectedValue={userInputs.careerGoal} 
            onChange={(value) => updateUserInput('careerGoal', value)} 
          />
        );
      case 11:
        return (
          <ScholarshipStep 
            selectedValue={userInputs.scholarshipCategory} 
            onChange={(value) => updateUserInput('scholarshipCategory', value)} 
          />
        );
      case 12:
        return (
          <UserDetailsStep 
            userDetails={userInputs.userDetails} 
            onChange={(field, value) => {
              const updatedDetails = { ...userInputs.userDetails, [field]: value };
              updateUserInput('userDetails', updatedDetails);
            }} 
          />
        );
      default:
        return null;
    }
  };

  if (isComplete) {
    return (
      <div className="min-h-screen flex flex-col">
        <CustomNavbar />
        <RecommendationResults 
          universities={recommendedUniversities}
          userInputs={userInputs}
          onStartOver={resetForm}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <CustomNavbar />
      <SectionContainer className="flex-grow py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <Badge className="mb-2" variant="outline">
              <Sparkles className="h-3.5 w-3.5 mr-1 text-primary" />
              AI Powered
            </Badge>
            <h1 className="text-3xl font-bold mb-2">Find Your Perfect University Match</h1>
            <p className="text-muted-foreground">
              Answer a few questions to get AI-personalized university recommendations in just 2 minutes
            </p>
          </div>
          
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} percentage={progressPercentage} />
          
          <Card className="p-6 my-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStepContent()}
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={goToPreviousStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
              
              {currentStep < totalSteps ? (
                <Button 
                  onClick={goToNextStep}
                  className="flex items-center gap-2"
                >
                  Next <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button 
                  onClick={generateRecommendations}
                  disabled={isGeneratingRecommendations}
                  className="flex items-center gap-2"
                >
                  {isGeneratingRecommendations ? (
                    <>
                      <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-2"></span>
                      Finding Matches...
                    </>
                  ) : (
                    <>
                      See Recommendations <Sparkles className="h-4 w-4 ml-1" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </Card>
        </div>
      </SectionContainer>
    </div>
  );
};

export default RecommendationEngine;

// Step Components
const EducationLevelStep = ({ selectedValue, onChange }) => {
  const options = [
    { value: 'ug', label: 'UG Courses', icon: <BookOpen className="h-5 w-5" />, description: 'Undergraduate programs like BCA, BBA, B.Tech' },
    { value: 'pg', label: 'PG Courses', icon: <GraduationCap className="h-5 w-5" />, description: 'Postgraduate programs like MCA, MBA, M.Tech' },
    { value: 'executive', label: 'Executive Education', icon: <Briefcase className="h-5 w-5" />, description: 'Executive programs for working professionals' },
    { value: 'phd', label: 'Doctorate/Ph.D.', icon: <Medal className="h-5 w-5" />, description: 'Research-focused doctoral programs' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Which degree are you interested in?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option) => (
          <div
            key={option.value}
            className={`border rounded-lg p-4 cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors ${
              selectedValue === option.value ? 'border-primary bg-primary/10' : ''
            }`}
            onClick={() => onChange(option.value)}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${
                selectedValue === option.value ? 'bg-primary text-primary-foreground' : 'bg-muted'
              }`}>
                {option.icon}
              </div>
              <div>
                <div className="font-medium">{option.label}</div>
                <div className="text-sm text-muted-foreground">{option.description}</div>
              </div>
              {selectedValue === option.value && (
                <CheckCircle2 className="h-5 w-5 ml-auto text-primary" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CourseInterestStep = ({ selectedValue, onChange }) => {
  const options = [
    { value: 'bca', label: 'Online BCA', trending: true },
    { value: 'bba', label: 'Online BBA' },
    { value: 'bcom', label: 'Online B.Com' },
    { value: 'btech_working', label: 'B.Tech for Working Professionals' },
    { value: 'bca_mca', label: 'BCA+MCA Integrated', demand: true },
    { value: 'bba_mba', label: 'BBA+MBA Integrated', demand: true },
    { value: 'bcom_mba', label: 'B.Com+MBA Integrated', demand: true },
    { value: 'mba_diploma', label: 'Online MBA after Diploma', new: true },
    { value: 'bsc', label: 'Online B.Sc' },
    { value: 'ba', label: 'Online BA' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Which course would you like to pursue?
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {options.map((option) => (
          <div
            key={option.value}
            className={`relative border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors flex flex-col items-center justify-center text-center min-h-[120px] ${
              selectedValue === option.value ? 'border-primary bg-primary/10' : ''
            }`}
            onClick={() => onChange(option.value)}
          >
            {option.trending && (
              <Badge className="absolute top-2 right-2 bg-green-500 text-white text-xs font-medium px-1.5 py-0.5">
                Trending
              </Badge>
            )}
            {option.demand && (
              <Badge className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-medium px-1.5 py-0.5">
                In-Demand
              </Badge>
            )}
            {option.new && (
              <Badge className="absolute top-2 right-2 bg-purple-500 text-white text-xs font-medium px-1.5 py-0.5">
                NEW
              </Badge>
            )}
            <BookOpen className="h-8 w-8 mb-2 text-primary" />
            <div className="font-medium text-sm">{option.label}</div>
            {selectedValue === option.value && (
              <CheckCircle2 className="h-5 w-5 mt-2 text-primary" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const SpecializationStep = ({ selectedValues = [], onChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const options = [
    { value: 'not_decided', label: 'Not decided yet', primary: true },
    { value: 'general', label: 'General' },
    { value: 'ai_ml', label: 'Artificial Intelligence and Machine Learning' },
    { value: 'cs_it', label: 'Computer Science and IT' },
    { value: 'cybersecurity', label: 'Cyber Security' },
    { value: 'data_science', label: 'Data Science and Big Data Analytics' },
    { value: 'data_analytics', label: 'Data Analytics' },
    { value: 'ui_ux', label: 'UI UX Design' },
    { value: 'python_ml', label: 'Python with Machine Learning' },
    { value: 'cloud_security', label: 'Cloud and Security' },
    { value: 'software_engineering', label: 'Software Engineering' },
    { value: 'multimedia', label: 'Multimedia and Animation' },
    { value: 'fullstack', label: 'Full Stack Development' },
  ];

  const filteredOptions = options.filter(option => 
    searchTerm === '' || option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleOption = (value) => {
    if (value === 'not_decided') {
      // If "Not decided yet" is selected, clear all other selections
      onChange(['not_decided']);
      return;
    }
    
    // If any other option is selected, remove "Not decided yet"
    let newValues;
    if (selectedValues.includes(value)) {
      newValues = selectedValues.filter(v => v !== value);
    } else {
      newValues = [...selectedValues.filter(v => v !== 'not_decided'), value];
    }
    
    onChange(newValues.length > 0 ? newValues : []);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Have a particular specialization in mind?
      </h2>
      
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search specialization..."
          className="w-full p-2 pl-8 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 absolute left-2 top-2.5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {filteredOptions.map((option) => (
          <Badge
            key={option.value}
            variant={selectedValues.includes(option.value) ? "default" : "outline"}
            className={`px-3 py-2 cursor-pointer text-sm ${
              option.primary ? 'border-green-500' : ''
            } ${
              selectedValues.includes(option.value) && option.primary ? 'bg-green-500' : ''
            }`}
            onClick={() => toggleOption(option.value)}
          >
            {option.primary && <span className="mr-1">❤️</span>}
            {option.label}
            {selectedValues.includes(option.value) && (
              <CheckCircle2 className="h-3.5 w-3.5 ml-1.5" />
            )}
          </Badge>
        ))}
      </div>
    </div>
  );
};

const StudyHoursStep = ({ selectedValue, onChange }) => {
  const options = [
    { value: '2-4', label: '2-4 Hours' },
    { value: '4-8', label: '4-8 Hours' },
    { value: '8-16', label: '8-16 Hours' },
    { value: '16+', label: '16+ Hours', recommended: true },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        How many study hours can you give on a weekly basis?
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {options.map((option) => (
          <div
            key={option.value}
            className={`relative border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors min-w-[120px] text-center ${
              selectedValue === option.value ? 'border-primary bg-primary/10' : ''
            } ${option.recommended ? 'border-green-500' : ''}`}
            onClick={() => onChange(option.value)}
          >
            <div className="font-medium">{option.label}</div>
            {option.recommended && (
              <span className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                  ❤️
                </span>
              </span>
            )}
          </div>
        ))}
      </div>
      
      <div className="bg-muted/50 rounded-lg p-4 text-center">
        <p className="text-sm text-green-600 font-medium">
          College Vidya Advantage
        </p>
        <p className="text-sm">
          Dedicated CV Buddy & 100% Placement Support For You!
        </p>
      </div>
    </div>
  );
};

const BudgetStep = ({ selectedValue, onChange }) => {
  const options = [
    { value: 'below_1L', label: 'Less than 1 Lakh' },
    { value: '1L_to_2.5L', label: '1 Lakh to 2.5 Lakh' },
    { value: '2.5L_to_4.2L', label: '2.5 Lakh to 4.2 Lakh' },
    { value: '4.2L_to_6L', label: '4.2 Lakh to 6 Lakh' },
    { value: 'above_6L', label: '6 Lakh+', recommended: true },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Choose the total course fees you have in mind!
      </h2>
      
      <div className="text-center mb-4">
        <Badge variant="outline" className="mb-4 bg-blue-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          EMI Options Also Available
        </Badge>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {options.map((option) => (
          <div
            key={option.value}
            className={`relative border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors min-w-[140px] text-center ${
              selectedValue === option.value ? 'border-primary bg-primary/10' : ''
            } ${option.recommended ? 'border-green-500' : ''}`}
            onClick={() => onChange(option.value)}
          >
            <div className="font-medium">{option.label}</div>
            {option.recommended && (
              <span className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                  ❤️
                </span>
              </span>
            )}
          </div>
        ))}
      </div>
      
      <div className="bg-muted/50 rounded-lg p-4 text-center">
        <p className="text-sm text-green-600 font-medium">
          College Vidya Advantage
        </p>
        <p className="text-sm">
          Only certified expert will call you on 100% recorded line!
        </p>
      </div>
    </div>
  );
};

const FinancingStep = ({ selectedValue, onChange }) => {
  const options = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No', recommended: true },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Convert fees into easy EMIs?
      </h2>
      
      <div className="flex justify-center gap-4 mb-8">
        {options.map((option) => (
          <div
            key={option.value}
            className={`relative border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors min-w-[100px] text-center ${
              selectedValue === option.value ? 'border-primary bg-primary/10' : ''
            } ${option.recommended ? 'border-green-500' : ''}`}
            onClick={() => onChange(option.value)}
          >
            <div className="font-medium">{option.label}</div>
            {option.recommended && (
              <span className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                  ❤️
                </span>
              </span>
            )}
          </div>
        ))}
      </div>
      
      <div className="bg-muted/50 rounded-lg p-4 text-center">
        <p className="text-sm text-green-600 font-medium">
          College Vidya Advantage
        </p>
        <p className="text-sm">
          Get relieved from financial stress with easy EMIs plans!
        </p>
      </div>
    </div>
  );
};

const SalaryPackageStep = ({ selectedValue, onChange }) => {
  const options = [
    { value: 'not_working', label: 'Not Working', recommended: true },
    { value: 'below_3L', label: 'Less than 3 Lac' },
    { value: '3L_to_6L', label: '3 Lac to 6 Lac' },
    { value: 'above_6L', label: 'Above 6 Lac' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        What is your salary package (Per Annum)?
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {options.map((option) => (
          <div
            key={option.value}
            className={`relative border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors min-w-[140px] text-center ${
              selectedValue === option.value ? 'border-primary bg-primary/10' : ''
            } ${option.recommended ? 'border-green-500' : ''}`}
            onClick={() => onChange(option.value)}
          >
            <div className="font-medium">{option.label}</div>
            {option.recommended && (
              <span className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                  ❤️
                </span>
              </span>
            )}
          </div>
        ))}
      </div>
      
      <div className="bg-muted/50 rounded-lg p-4 text-center">
        <p className="text-sm text-green-600 font-medium">
          College Vidya Advantage
        </p>
        <p className="text-sm">
          Free access to CV exclusive community & alumni network!
        </p>
      </div>
    </div>
  );
};

const QualificationStep = ({ selectedValue, onChange }) => {
  const options = [
    { value: 'postgraduate', label: 'Postgraduate' },
    { value: 'graduate', label: 'College Graduate' },
    { value: '12th', label: 'Completed 12th', recommended: true },
    { value: '10th', label: 'Completed 10th' },
    { value: 'diploma', label: 'Diploma Holder' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Your highest qualification?
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {options.map((option) => (
          <div
            key={option.value}
            className={`relative border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors min-w-[140px] text-center ${
              selectedValue === option.value ? 'border-primary bg-primary/10' : ''
            } ${option.recommended ? 'border-green-500' : ''}`}
            onClick={() => onChange(option.value)}
          >
            <div className="font-medium">{option.label}</div>
            {option.recommended && (
              <span className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                  ❤️
                </span>
              </span>
            )}
          </div>
        ))}
      </div>
      
      <div className="bg-muted/50 rounded-lg p-4 text-center">
        <p className="text-sm text-green-600 font-medium">
          College Vidya Advantage
        </p>
        <p className="text-sm">
          Free access to sample question papers & notes!
        </p>
      </div>
    </div>
  );
};

const ScoreStep = ({ selectedValue, onChange }) => {
  const options = [
    { value: 'below_50', label: 'Below 50%' },
    { value: '50_to_80', label: '50% to 80%' },
    { value: 'above_80', label: 'Above 80%', recommended: true },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Percentage scored in last qualification?
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {options.map((option) => (
          <div
            key={option.value}
            className={`relative border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors min-w-[140px] text-center ${
              selectedValue === option.value ? 'border-primary bg-primary/10' : ''
            } ${option.recommended ? 'border-green-500' : ''}`}
            onClick={() => onChange(option.value)}
          >
            <div className="font-medium">{option.label}</div>
            {option.recommended && (
              <span className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                  ❤️
                </span>
              </span>
            )}
          </div>
        ))}
      </div>
      
      <div className="bg-muted/50 rounded-lg p-4 text-center">
        <p className="text-sm text-green-600 font-medium">
          College Vidya Advantage
        </p>
        <p className="text-sm">
          Your CV will be shared with 200+ companies post completion of the course!
        </p>
      </div>
    </div>
  );
};

const CareerGoalStep = ({ selectedValue, onChange }) => {
  const options = [
    { value: 'yes', label: 'Yes', recommended: true },
    { value: 'no', label: 'No' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Looking for universities through which you can get placements/salary hike/promotions?
      </h2>
      
      <div className="flex justify-center gap-4 mb-8">
        {options.map((option) => (
          <div
            key={option.value}
            className={`relative border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors min-w-[100px] text-center ${
              selectedValue === option.value ? 'border-primary bg-primary/10' : ''
            } ${option.recommended ? 'border-green-500' : ''}`}
            onClick={() => onChange(option.value)}
          >
            <div className="font-medium">{option.label}</div>
            {option.recommended && (
              <span className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                  ❤️
                </span>
              </span>
            )}
          </div>
        ))}
      </div>
      
      <div className="bg-muted/50 rounded-lg p-4 text-center">
        <p className="text-sm text-green-600 font-medium">
          College Vidya Advantage
        </p>
        <p className="text-sm">
          Telling you what your batchmates doing along with this course!
        </p>
      </div>
    </div>
  );
};

const ScholarshipStep = ({ selectedValue, onChange }) => {
  const options = [
    { value: 'defense', label: 'Defence Personnel' },
    { value: 'divyaang', label: 'Divyaang (For persons with disabilities)' },
    { value: 'merit', label: 'Merit Scored (75% aggregate scored in last qualification)', recommended: true },
    { value: 'sc_st', label: 'SC/ST Category' },
    { value: 'govt_employee', label: 'Government Employee' },
    { value: 'none', label: 'None of the above' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Do you belong to any one of the categories? (Special scholarship available)
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {options.map((option) => (
          <div
            key={option.value}
            className={`relative border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors text-center ${
              selectedValue === option.value ? 'border-primary bg-primary/10' : ''
            } ${option.recommended ? 'border-green-500' : ''}`}
            onClick={() => onChange(option.value)}
          >
            <div className="font-medium">{option.label}</div>
            {option.recommended && (
              <span className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                  ❤️
                </span>
              </span>
            )}
          </div>
        ))}
      </div>
      
      <div className="bg-muted/50 rounded-lg p-4 text-center">
        <p className="text-sm text-green-600 font-medium">
          College Vidya Advantage
        </p>
        <p className="text-sm">
          Ensured timely delivery of services by course providers!
        </p>
      </div>
    </div>
  );
};

// Fixed UserDetailsStep with proper TypeScript typing
const UserDetailsStep = ({ 
  userDetails, 
  onChange 
}: { 
  userDetails: UserDetails; 
  onChange: (field: keyof UserDetails, value: string) => void 
}) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Let's know each other better
      </h2>
      
      <div className="text-center mb-6">
        <p className="font-medium">Compare & Apply from 100+</p>
        <div className="flex justify-center gap-2 mt-2 mb-4">
          <img src="https://via.placeholder.com/80x40?text=Univ1" alt="University" className="h-10 border rounded" />
          <img src="https://
