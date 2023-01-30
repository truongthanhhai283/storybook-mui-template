import { useCallback, useState } from "react";

import useCallbackRef from "./useCallbackRef";

export interface UseDisclosureProps {
  defaultIsOpen?: boolean;
  onOpen?(): void;
  onClose?(): void;
}

/**
 * `useDisclosure` is a custom hook used to help handle common open, close, or toggle scenarios.
 * It can be used to control feedback component such as `Modal`, `AlertDialog`, `Drawer`, etc.
 */
function useDisclosure(props: UseDisclosureProps = {}) {
  const { defaultIsOpen, onClose: onCloseProp, onOpen: onOpenProp } = props;
  const handleOpen = useCallbackRef(onOpenProp);
  const handleClose = useCallbackRef(onCloseProp);
  const [isOpen, setIsOpen] = useState(defaultIsOpen ?? false);

  const onClose = useCallback(() => {
    setIsOpen(false);
    handleClose?.();
  }, [handleClose]);

  const onOpen = useCallback(() => {
    setIsOpen(true);
    handleOpen?.();
  }, [handleOpen]);

  const onToggle = useCallback(() => {
    if (isOpen) onClose();
    else onOpen();
  }, [isOpen, onClose, onOpen]);

  return {
    isOpen,
    onClose,
    onOpen,
    onToggle,
  };
}

export default useDisclosure;

export type UseDisclosureHookResult = ReturnType<typeof useDisclosure>;
