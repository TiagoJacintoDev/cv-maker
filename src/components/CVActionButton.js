export default function CVActionButton({ handleClick, type, children }) {
  return (
    <button onClick={handleClick} className="button" data-type={type}>
      {children}
    </button>
  );
}
