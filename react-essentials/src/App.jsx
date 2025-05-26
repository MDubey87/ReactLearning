import Header from "./components/header/Header";
import CoreConcepts from "./components/core-concepts/CoreConcepts";
import Examples from "./components/examples/Examples";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
