import {
  CURRENCY_FORMATS,
  activeCountryCodeByCurrency,
} from "../constants/appConstants/currencyFormatsConstant";
import { SORT_BY_CONSTANT } from "../constants/appConstants/sortByConstant";

//##########################

export function getTheCurrencySymbol() {
  return CURRENCY_FORMATS[activeCountryCodeByCurrency].numericFormatCompProps
    .currencyFormatProps.prefix;
}

//##########################

export function getDecimalScale() {
  return CURRENCY_FORMATS[activeCountryCodeByCurrency].numericFormatCompProps
    .currencySettingProps.decimalScale;
}

//##########################

/**
 * Verilen bir nesne dizisinde belirtilen özelliğe (property) göre benzersiz değerleri bulur.
 *
 * @param {Array} arr - Benzersiz değerlerin bulunacağı nesne dizisi
 * @param {string} property - Benzersiz değerlerin belirleneceği özellik (property)
 * @returns {Array} - Belirtilen özelliğe göre benzersiz değerleri içeren bir dizi
 */
export function uniqueValuesByProperty(arr, property) {
  const uniqueValuesMap = new Map();

  arr.forEach((item) => {
    const key = item[property];

    if (!uniqueValuesMap.has(key)) {
      uniqueValuesMap.set(key, item);
    }
  });

  return Array.from(uniqueValuesMap.values());
}

//##########################

export function filteringByCheckboxAndPreparingOptions(arr, property) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    result.push({ label: element[property], checked: false });
  }

  return result;
}

//##########################

const sortByDate = (products, ascending = true) => {
  return [...products].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return ascending ? dateA - dateB : dateB - dateA;
  });
};

const sortByPrice = (products, ascending = true) => {
  return [...products].sort((a, b) => {
    return ascending ? a.price - b.price : b.price - a.price;
  });
};

export const sortProducts = (value, products) => {
  let sortedProducts;
  switch (value) {
    case SORT_BY_CONSTANT.NEW_TO_OLD.value:
      sortedProducts = sortByDate(products, true);
      break;
    case SORT_BY_CONSTANT.OLD_TO_NEW.value:
      sortedProducts = sortByDate(products, false);
      break;
    case SORT_BY_CONSTANT.LOW_TO_HIGHT.value:
      sortedProducts = sortByPrice(products, true);
      break;
    case SORT_BY_CONSTANT.HIGHT_TO_LOW.value:
      sortedProducts = sortByPrice(products, false);
      break;
    default:
      sortedProducts = [...products];
  }

  return sortedProducts;
};

//##########################

export function isSkeletonActive(isSkeleton, children) {
  if (!isSkeleton) {
    return false;
  } else {
    const isFalsy = [null, undefined, "", {}, []].some((val) =>
      Object.is(val, children)
    );
    return isFalsy;
  }
}
