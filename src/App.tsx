import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { GlobalStyle } from "./styles/global";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header /> 
      <Dashboard></Dashboard>
    </>
  );
}
