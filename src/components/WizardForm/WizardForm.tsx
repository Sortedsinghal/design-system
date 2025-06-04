import React, { useState } from 'react';

const WizardForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleNext = () => {
    const newErrors: typeof errors = {};

    if (step === 1 && !formData.name.trim()) newErrors.name = 'Name is required';
    if (step === 2) {
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
          newErrors.email = 'Enter a valid email address';
        }
      }
      
    if (step === 3 && !formData.password.trim()) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setStep((s) => s + 1);
    }
  };

  const handleBack = () => setStep((s) => s - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-surface text-text rounded shadow">
      <div className="flex justify-between mb-6">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`flex-1 text-center py-2 border-b-4 ${
              step >= s ? 'border-primary font-bold' : 'border-gray-300'
            }`}
          >
            Step {s}
          </div>
        ))}
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div className="space-y-4 animate-slide">
          <label className="block">
            Name:
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </label>
          <button onClick={handleNext} className="btn-primary w-full">
            Next
          </button>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="space-y-4 animate-slide">
          <label className="block">
            Email:
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </label>
          <div className="flex justify-between">
            <button onClick={handleBack} className="btn-secondary">
              Back
            </button>
            <button onClick={handleNext} className="btn-primary">
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="space-y-4 animate-slide">
          <label className="block">
            Password:
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </label>
          <div className="flex justify-between">
            <button onClick={handleBack} className="btn-secondary">
              Back
            </button>
            <button
              onClick={() => {
                console.log('Form Submitted:', formData);
                alert(`Submitted!\n\n${JSON.stringify(formData, null, 2)}`);
              }}              
              className="btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WizardForm;
