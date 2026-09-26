"use client";
import { Toaster } from "react-hot-toast";

export default function Toasts() {
  return (
    <Toaster position="top-center" containerStyle={{ top: 72 }} toastOptions={{ style: { background: "#22262b", color: "#e8eaed", border: "1px solid #ccff00" } }} />
  );
}
