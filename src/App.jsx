import "./styles.css";

let data = [
  {
    id: 1,
    email: "raviapk983@gmail.com",
    first_name: "Ravi",
    last_name: "Roshan"
  },
  {
    id: 2,
    email: "roshanapk983@gmail.com",
    first_name: "Roshan",
    last_name: "Ravi"
  },
  {
    id: 3,
    email: "viratapk983@gmail.com",
    first_name: "Virat",
    last_name: "anand"
  },
  {
    id: 4,
    email: "anandapk983@gmail.com",
    first_name: "Anand",
    last_name: "Raj"
  }
];

let Button = (props) => {
  const { text, onclick } = props;
  return <button onClick={onclick}>{text}</button>;
};

//<Button onclick={()=>alert("clicked")} text="ADD"/>

export default function App() {
  return (
    <div className="App">
      {data.map(({ first_name, last_name, id, email }) => {
        return (
          <div>
            <h1>{first_name}</h1>
            <p>{last_name}</p>
            <Button
              onclick={() => alert(`Hii ${first_name} ${last_name}`)}
              text="Say Hi"
            />
          </div>
        );
      })}
    </div>
  );
}
