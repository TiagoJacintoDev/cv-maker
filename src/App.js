import Forms from "./components/Forms";
import { Display } from "./components/View/Display";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import PrintButton from "./components/PrintButton";
import { useEffect } from "react";
import { seedState } from "./seedState";

export default function App() {
  const [formDisplayData, setFormDisplayData] = useState({
    general: [{}],
    experience: [{}],
    skills: [{}],
    education: [{}],
  });

  useEffect(() => {
    setFormDisplayData(seedState);
  }, []);

  const displayRef = useRef();
  const handlePrint = useReactToPrint({ content: () => displayRef.current });

  return (
    <div className="container even-columns gap-small">
      <Forms
        formDisplayData={formDisplayData}
        setFormDisplayData={setFormDisplayData}
      />
      <div>
        <Display
          ref={displayRef}
          formDisplayData={formDisplayData}
          setFormDisplayData={setFormDisplayData}
        />
        <PrintButton handlePrint={handlePrint} />
      </div>
    </div>
  );
}
