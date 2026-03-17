import { createContext, useContext, useMemo, useState } from "react";

const BookingContext = createContext(null);

export function BookingProvider({ basePrice, childrenMultiplier = 0.65, children }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);

  const totalPrice = useMemo(() => {
    const adultTotal = adults * basePrice;
    const childTotal = childrenCount * basePrice * childrenMultiplier;
    return Math.round(adultTotal + childTotal);
  }, [adults, basePrice, childrenCount, childrenMultiplier]);

  const value = {
    selectedDate,
    setSelectedDate,
    adults,
    setAdults,
    childrenCount,
    setChildrenCount,
    totalPrice,
  };

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within BookingProvider");
  }
  return context;
}
