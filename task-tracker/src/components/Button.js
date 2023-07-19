export default function Button({ text, color, event }) {
  return (
    <button style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
}
