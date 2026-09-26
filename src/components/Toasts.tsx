"use client";
import { Toaster } from "react-hot-toast";

export default function Toasts() {
  return (
    <Toaster position="top-center" containerStyle={{ top: 72 }} toastOptions={{ style: { background: "#464c53", color: "#d9dce0", border: "1px solid #6c8506" } }} />
  );
}
}