import { useTranslation } from "react-i18next"
import { SupportLanguages } from "../../enum"
import { useLanguages } from "../../hooks/useLanguages"

const Languages = () => {
  const { t } = useTranslation()
  const { currentLanguage, changeLanguage } = useLanguages()
  return (
    <div className="pt-8 pb-4 relative text-perl-700 dark:text-liwr-300">
      <div className="absolute h-6 w-auto px-2 left-3 top-5 bg-perl-400 dark:bg-liwr-500 rounded-lg">
        {t('language.title')}
      </div>
      <div className="w-full h-auto rounded-lg bg-perl-300 dark:bg-liwr-600 px-5 pt-5 pb-3">
        {Object.values(SupportLanguages).map((lang: string) => {
          return (
            <div
              key={lang}
              className={lang === currentLanguage ? 'text-perl-800 dark:text-liwr-200' : ''}
              onClick={() => changeLanguage({lang})}
            >
              <p className="cursor-pointer hover:text-perl-800 hover:dark:text-liwr-200">{t(`languages.${lang}`)}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { Languages }