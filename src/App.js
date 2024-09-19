import "./styles.css";
import { Header } from "./components/header";
export default function App() {
  return (
    <div className="App">
      <h1>Personal Task Manager</h1>
      <div className="card">
        <div>your tasks</div>
        <input className="input-card" />
        <button className="btn">Add your tasks</button>
      </div>
    </div>
  );
}
