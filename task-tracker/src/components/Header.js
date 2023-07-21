import Button from "./Button";

export default function Header({ title }) {
  const onClicks = (e) => {
    console.log(e);
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onClicks} text="Add" color="black"></Button>
    </header>
  );
}
