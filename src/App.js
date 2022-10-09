import Header from './components/Header';
import Form from './components/OpenForm';
import { Display } from './components/Display';
import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { AiOutlinePrinter } from 'react-icons/ai';

export default function App() {
  const [formData, setFormData] = useState({
    general: [{}],
    experience: [{}],
    skills: [{}],
    education: [{}],
  });

  const displayRef = useRef();
  const handlePrint = useReactToPrint({ content: () => displayRef.current });

  return (
    <>
      <Header />
      <Form formData={formData} setFormData={setFormData} />
      <Display ref={displayRef} formData={formData} setFormData={setFormData} />
      <div className='print-button-wrapper'>
        <button
          className='print-button flex align-center gap-small'
          onClick={handlePrint}
        >
          Print CV <AiOutlinePrinter size={20} />
        </button>
      </div>
    </>
  );
}
