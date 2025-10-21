import "./App.css";

function Card({ name, title, age }) {
  return (
    <div className="card">
      <div className="name">{name}</div>
      <div className="title">{title}</div>
      <div className="age">{age}</div>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Logo</h1>
    </header>
  );
}

function Main() {
  return (
    <main className="main">
      <Card name="Alice" title="CEO" age="29" />
      <Card name="Kati" title="Developer" age="25" />
      <Card name="Karin" title="Disigner" age="45" />
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 My Website. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <div className="root">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
