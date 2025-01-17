import { useState } from "react";
import i18n from "../i18n"

const useLanguages = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>(i18n.language);

  const changeLanguage = ({ lang } : {lang: string}) => {
    i18n.changeLanguage(lang).then(() => {
      setCurrentLanguage(lang)
    })
  }

  return { currentLanguage, changeLanguage }
}

export { useLanguages }