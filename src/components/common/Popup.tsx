import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";

interface PopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  className?: string
}

export default function Popup({ open, onOpenChange, children, className }: PopupProps) {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(document.getElementById("app-root"));
  }, []);

  if (!container) return null;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal container={container}>
        <Dialog.Overlay className="absolute inset-0 z-40 bg-black/40" />
        <Dialog.Content
          className={className}>
          <Dialog.Title />
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
