export const activeCountryCodeByCurrency = "tr";

export const CURRENCY_FORMATS = {
  tr: {
    symbolPosition: "end",
    numericFormatCompProps: {
      currencyFormatProps: {
        decimalSeparator: ",",
        thousandSeparator: ".",
        prefix: "₺",
      },
      currencySettingProps: {
        decimalScale: 2,
        fixedDecimalScale: true,
      },
    },

    formatCurrencyMethodProps: {
      locale: "tr-TR",
      currency: "TRY",
    },
  },
  en: {},
};
