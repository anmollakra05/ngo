import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from './Button';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  program: string;
  education: string;
  experience: string;
  motivation: string;
  resume: FileList;
}

const ApplicationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    watch,
    trigger,
    reset
  } = useForm<FormData>();

  const watchProgram = watch('program', '');

  const nextStep = async () => {
    let fieldsToValidate: any = [];
    
    if (currentStep === 1) {
      fieldsToValidate = ['firstName', 'lastName', 'email', 'phone'];
    } else if (currentStep === 2) {
      fieldsToValidate = ['program', 'education', 'experience'];
    }
    
    const result = await trigger(fieldsToValidate);
    if (result) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    
    // Reset form after submission
    reset();
    
    // Set to success screen
    setCurrentStep(4);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      {currentStep < 4 && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <React.Fragment key={index}>
                <div 
                  className={`flex items-center justify-center w-8 h-8 rounded-full font-medium text-sm ${
                    currentStep > index + 1 
                      ? 'bg-primary-600 text-white' 
                      : currentStep === index + 1 
                        ? 'bg-primary-100 text-primary-600 border-2 border-primary-600' 
                        : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {currentStep > index + 1 ? '✓' : index + 1}
                </div>
                {index < totalSteps - 1 && (
                  <div 
                    className={`flex-1 h-1 mx-2 ${
                      currentStep > index + 1 ? 'bg-primary-600' : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Personal Information</span>
            <span className="text-center">Background</span>
            <span>Statement & Documents</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <>
            <h3 className="text-xl font-semibold mb-6">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name*
                </label>
                <input
                  id="firstName"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('firstName', { required: 'First name is required' })}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name*
                </label>
                <input
                  id="lastName"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('lastName', { required: 'Last name is required' })}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address*
              </label>
              <input
                id="email"
                type="email"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number*
              </label>
              <input
                id="phone"
                type="tel"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                {...register('phone', { 
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                    message: 'Invalid phone number format'
                  }
                })}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>
          </>
        )}

        {/* Step 2: Background */}
        {currentStep === 2 && (
          <>
            <h3 className="text-xl font-semibold mb-6">Background</h3>
            
            <div>
              <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                Fellowship Program*
              </label>
              <select
                id="program"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                  errors.program ? 'border-red-500' : 'border-gray-300'
                }`}
                {...register('program', { required: 'Please select a program' })}
              >
                <option value="">Select a program</option>
                <option value="Global Leadership Fellowship">Global Leadership Fellowship</option>
                <option value="Social Entrepreneurship Program">Social Entrepreneurship Program</option>
                <option value="Climate Action Fellowship">Climate Action Fellowship</option>
                <option value="Education Innovation Fellowship">Education Innovation Fellowship</option>
              </select>
              {errors.program && (
                <p className="mt-1 text-sm text-red-600">{errors.program.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                Educational Background*
              </label>
              <textarea
                id="education"
                rows={3}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                  errors.education ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Please detail your educational qualifications, including institutions, degrees, and years of study."
                {...register('education', { 
                  required: 'Educational background is required',
                  minLength: {
                    value: 50,
                    message: 'Please provide more details (minimum 50 characters)'
                  }
                })}
              ></textarea>
              {errors.education && (
                <p className="mt-1 text-sm text-red-600">{errors.education.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                Relevant Experience*
              </label>
              <textarea
                id="experience"
                rows={4}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                  errors.experience ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Please describe your relevant work experience, volunteer work, or projects related to the fellowship area you're applying for."
                {...register('experience', { 
                  required: 'Relevant experience is required',
                  minLength: {
                    value: 100,
                    message: 'Please provide more details (minimum 100 characters)'
                  }
                })}
              ></textarea>
              {errors.experience && (
                <p className="mt-1 text-sm text-red-600">{errors.experience.message}</p>
              )}
            </div>
          </>
        )}

        {/* Step 3: Statement & Documents */}
        {currentStep === 3 && (
          <>
            <h3 className="text-xl font-semibold mb-6">Statement & Documents</h3>
            
            <div>
              <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
                Personal Statement*
              </label>
              <textarea
                id="motivation"
                rows={6}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                  errors.motivation ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder={`Please explain why you're interested in the ${watchProgram || 'selected'} program and how you plan to contribute to your community through this fellowship.`}
                {...register('motivation', { 
                  required: 'Personal statement is required',
                  minLength: {
                    value: 200,
                    message: 'Please provide a more detailed statement (minimum 200 characters)'
                  }
                })}
              ></textarea>
              {errors.motivation && (
                <p className="mt-1 text-sm text-red-600">{errors.motivation.message}</p>
              )}
              <p className="text-sm text-gray-500 mt-1">Minimum 200 characters</p>
            </div>
            
            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                Resume/CV*
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        type="file"
                        className="sr-only"
                        accept=".pdf,.doc,.docx"
                        {...register('resume', { 
                          required: 'Resume is required'
                        })}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PDF, DOC, or DOCX up to 5MB</p>
                </div>
              </div>
              {errors.resume && (
                <p className="mt-1 text-sm text-red-600">{errors.resume.message}</p>
              )}
            </div>
          </>
        )}

        {/* Success Page */}
        {currentStep === 4 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="h-10 w-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for applying to our fellowship program. We've received your application and will be in touch soon.
            </p>
            <p className="text-gray-600 mb-8">
              A confirmation email has been sent to your provided email address with additional information.
            </p>
            <Button 
              href="/"
              variant="primary"
            >
              Return to Home
            </Button>
          </div>
        )}

        {/* Navigation Buttons */}
        {currentStep < 4 && (
          <div className="flex justify-between mt-8">
            {currentStep > 1 ? (
              <Button
                type="button"
                variant="secondary"
                onClick={prevStep}
              >
                Previous
              </Button>
            ) : (
              <div></div>
            )}
            
            {currentStep < totalSteps ? (
              <Button
                type="button"
                variant="primary"
                onClick={nextStep}
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                variant="primary"
                className={isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default ApplicationForm;