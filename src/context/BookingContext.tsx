import { createContext, useContext, useState, ReactNode } from "react";

interface BookingContextType {
  isOpen: boolean;
  openBooking: () => void;
  closeBooking: () => void;
  isMobileDisclaimerOpen: boolean;
  openMobileBooking: () => void;
  closeMobileDisclaimer: () => void;
  confirmMobileBooking: () => void;
}

const BookingContext = createContext<BookingContextType>({
  isOpen: false,
  openBooking: () => {},
  closeBooking: () => {},
  isMobileDisclaimerOpen: false,
  openMobileBooking: () => {},
  closeMobileDisclaimer: () => {},
  confirmMobileBooking: () => {},
});

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileDisclaimerOpen, setIsMobileDisclaimerOpen] = useState(false);

  function openMobileBooking() {
    setIsMobileDisclaimerOpen(true);
  }

  function closeMobileDisclaimer() {
    setIsMobileDisclaimerOpen(false);
  }

  function confirmMobileBooking() {
    setIsMobileDisclaimerOpen(false);
    setIsOpen(true);
  }

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        openBooking: () => setIsOpen(true),
        closeBooking: () => setIsOpen(false),
        isMobileDisclaimerOpen,
        openMobileBooking,
        closeMobileDisclaimer,
        confirmMobileBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
