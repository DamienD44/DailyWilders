// import React, { createContext, useState, useContext } from "react";

// // Créer le contexte
// const LanguageContext = createContext();

// // Fournir le contexte à l'application
// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState("en"); // Langue par défaut : anglais

//   const toggleLanguage = (lang) => setLanguage(lang);

//   return (
//     <LanguageContext.Provider value={{ language, toggleLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// // Utiliser le contexte
// export const useLanguage = () => useContext(LanguageContext);
