import HomePage from "@/pages/homePage";
import { Route, Routes } from "react-router";

export default function GlobalRoutes() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
