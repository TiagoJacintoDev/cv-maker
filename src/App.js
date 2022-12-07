import GroupedForms from "./components/GroupedForms";
import { Display } from "./components/Display";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { AiOutlinePrinter } from "react-icons/ai";

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
    <div className="container even-columns gap-small">
      <GroupedForms formData={formData} setFormData={setFormData} />
      <div>
        <Display
          ref={displayRef}
          formData={formData}
          setFormData={setFormData}
        />
        <div className="print-button-wrapper">
          <button
            className="print-button flex align-center gap-small"
            onClick={handlePrint}
          >
            Print CV <AiOutlinePrinter size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
