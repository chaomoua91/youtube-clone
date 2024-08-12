import React from "react";
import PageHeader from "./layouts/PageHeader";
import CategoryPills from "./components/CategoryPills";

function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />

      <div
        className="grid grid-cols-[auto,1fr] 
      flex-grow-1 overflow-auto"
      >
        <div>SideBar</div>
        <div className="sticky top-0 bg-white z-10 pb-4">
          <CategoryPills />
        </div>
      </div>
    </div>
  );
}

export default App;
