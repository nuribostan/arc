import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [sliderDisplay, setSliderDisplay] = useState(false);
  const [galleryDisplay, setGalleryDisplay] = useState(true);
  const [menuLine, setMenuLine] = useState("");
  const [shortProjectHeight, setShortProjectHeight] = useState();
  const [shortAboutHeight, setShortAboutHeight] = useState();
  const [contact, setContact] = useState("");

  return (
    <Context.Provider
      value={{
        sliderDisplay,
        setSliderDisplay,
        galleryDisplay,
        setGalleryDisplay,
        menuLine,
        setMenuLine,
        shortProjectHeight,
        setShortProjectHeight,
        shortAboutHeight,
        setShortAboutHeight,
        contact,
        setContact,
      }}
    >
      {children}
    </Context.Provider>
  );
};
