import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <div className="min-h-screen bg-neutral-900 text-neutral-300">
        <Navbar />
        <main>
          <section
            id="about"
            className="min-h-screen flex items-center justify-center"
          >
            <div>
              <h2>Igor Carvalhaes</h2>
              <p>
                Sou um desenvolvedor front-end, estudante de Engenharia de
                Computação na UERJ, apaixonado por criar interfaces bonitas e
                interativas, focadas em usabilidades, desempenho e
                acessibilidade, utilizando boas práticas de código limpo.
              </p>
              <nav>
                <a href="#">Email</a>
                <a href="#">Twitter</a>
                <a href="#">Github</a>
                <a href="#">Linkedin</a>
              </nav>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
