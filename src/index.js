import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => {
  return (
    <div className="bg">
      <div className="container">
        <img src="mascote.png" alt="Mascote" className="mascote" />
        <h1>TEACHER MOMMY IA</h1>
        <form>
          <input type="email" placeholder="E-MAIL" required />
          <input type="password" placeholder="SENHA" required />
          <button type="submit">ENTRAR</button>
        </form>
        <p className="footer">Com amor, Teacher Mommy 💗</p>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
