import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainPage from "./pages/MainPage";
import { ModalProvider } from "./ModalContext/ModalProvider";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalProvider>
      <MainPage />
    </ModalProvider>
  </StrictMode>
);
