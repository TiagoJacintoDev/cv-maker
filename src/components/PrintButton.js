import { AiOutlinePrinter } from "react-icons/ai";

export default function PrintButton({ handlePrint }) {
  return (
    <div className="print-button-wrapper">
      <button
        className="print-button flex align-center gap-small"
        onClick={handlePrint}
      >
        Print CV <AiOutlinePrinter size={20} />
      </button>
    </div>
  );
}
