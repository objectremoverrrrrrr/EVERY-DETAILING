import { useEffect } from "react";
import { useBooking } from "@/context/BookingContext";
import { Link } from "wouter";

export default function Book() {
  const { openBooking } = useBooking();

  useEffect(() => {
    openBooking();
  }, [openBooking]);

  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-muted-foreground text-sm mb-4">Loading contact info...</p>
        <Link href="/" className="text-sm underline underline-offset-4 hover:text-gray-600 transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
