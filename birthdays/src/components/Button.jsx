export default function Button({ bgColor, text, textColor, classname }) {
  return (
    <>
      <button
        className={classname}
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        {text}
      </button>
    </>
  );
}
