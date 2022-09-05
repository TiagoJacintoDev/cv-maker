import Header from './components/Header';
import Form from './components/OpenForm';
import { createContext, useState } from 'react';

export const FormContext = createContext();

export default function App() {
  const [formData, setFormData] = useState({
    general: [{}],
    experience: [{}],
    skills: [{}],
    education: [{}],
  });

  return (
    <FormContext.Provider value={formData}>
      <Header />;
      <Form formData={formData} setFormData={setFormData} />
    </FormContext.Provider>
  );
}
