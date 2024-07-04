import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Info from "./Info";

export default function Main() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
