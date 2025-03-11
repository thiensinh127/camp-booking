"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { LoginForm } from "./LoginForm";

export function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button variant="outline" onClick={openModal}>
        Login
      </Button>
      <LoginForm isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
