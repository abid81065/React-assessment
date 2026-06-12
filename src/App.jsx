import StudentCard from "./components/StudentCard";

function App() {
  return (
    <>
      <h1>React Components and Props Assessment</h1>

      <StudentCard
        name="Abid"
        course="React JS"
        age="21"
      />

      <StudentCard
        name="Rahul"
        course="Java"
        age="22"
      />
    </>
  );
}

export default App;