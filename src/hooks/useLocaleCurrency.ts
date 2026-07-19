import { useState, useEffect } from "react";

interface CurrencyInfo {
  code: string;
  symbol: string;
  name: string;
}

const REGION_CURRENCY_MAP: Record<string, CurrencyInfo> = {
  PH: { code: "PHP", symbol: "₱",  name: "Philippine Peso"    },
  US: { code: "USD", symbol: "$",   name: "US Dollar"          },
  CA: { code: "CAD", symbol: "CA$", name: "Canadian Dollar"    },
  AU: { code: "AUD", symbol: "A$",  name: "Australian Dollar"  },
  NZ: { code: "NZD", symbol: "NZ$", name: "New Zealand Dollar" },
  GB: { code: "GBP", symbol: "£",   name: "British Pound"      },
  JP: { code: "JPY", symbol: "¥",   name: "Japanese Yen"       },
  KR: { code: "KRW", symbol: "₩",   name: "Korean Won"         },
  CN: { code: "CNY", symbol: "¥",   name: "Chinese Yuan"       },
  HK: { code: "HKD", symbol: "HK$", name: "Hong Kong Dollar"   },
  SG: { code: "SGD", symbol: "S$",  name: "Singapore Dollar"   },
  MY: { code: "MYR", symbol: "RM",  name: "Malaysian Ringgit"  },
  ID: { code: "IDR", symbol: "Rp",  name: "Indonesian Rupiah"  },
  TH: { code: "THB", symbol: "฿",   name: "Thai Baht"          },
  VN: { code: "VND", symbol: "₫",   name: "Vietnamese Dong"    },
  IN: { code: "INR", symbol: "₹",   name: "Indian Rupee"       },
  AE: { code: "AED", symbol: "د.إ", name: "UAE Dirham"         },
  SA: { code: "SAR", symbol: "﷼",   name: "Saudi Riyal"        },
  QA: { code: "QAR", symbol: "ر.ق", name: "Qatari Riyal"       },
  KW: { code: "KWD", symbol: "K.D", name: "Kuwaiti Dinar"      },
  BH: { code: "BHD", symbol: "BD",  name: "Bahraini Dinar"     },
  OM: { code: "OMR", symbol: "﷼",   name: "Omani Rial"         },
  CH: { code: "CHF", symbol: "Fr",  name: "Swiss Franc"        },
  NO: { code: "NOK", symbol: "kr",  name: "Norwegian Krone"    },
  SE: { code: "SEK", symbol: "kr",  name: "Swedish Krona"      },
  DK: { code: "DKK", symbol: "kr",  name: "Danish Krone"       },
  BR: { code: "BRL", symbol: "R$",  name: "Brazilian Real"     },
  MX: { code: "MXN", symbol: "MX$", name: "Mexican Peso"       },
  ZA: { code: "ZAR", symbol: "R",   name: "South African Rand" },
  NG: { code: "NGN", symbol: "₦",   name: "Nigerian Naira"     },
  EG: { code: "EGP", symbol: "E£",  name: "Egyptian Pound"     },
  PK: { code: "PKR", symbol: "₨",   name: "Pakistani Rupee"    },
  BD: { code: "BDT", symbol: "৳",   name: "Bangladeshi Taka"   },
  LK: { code: "LKR", symbol: "Rs",  name: "Sri Lankan Rupee"   },
  NP: { code: "NPR", symbol: "Rs",  name: "Nepalese Rupee"     },
  MM: { code: "MMK", symbol: "K",   name: "Myanmar Kyat"       },
  DE: { code: "EUR", symbol: "€",   name: "Euro"               },
  FR: { code: "EUR", symbol: "€",   name: "Euro"               },
  IT: { code: "EUR", symbol: "€",   name: "Euro"               },
  ES: { code: "EUR", symbol: "€",   name: "Euro"               },
  NL: { code: "EUR", symbol: "€",   name: "Euro"               },
  BE: { code: "EUR", symbol: "€",   name: "Euro"               },
  PT: { code: "EUR", symbol: "€",   name: "Euro"               },
  AT: { code: "EUR", symbol: "€",   name: "Euro"               },
  IE: { code: "EUR", symbol: "€",   name: "Euro"               },
  FI: { code: "EUR", symbol: "€",   name: "Euro"               },
  GR: { code: "EUR", symbol: "€",   name: "Euro"               },
  PL: { code: "PLN", symbol: "zł",  name: "Polish Złoty"       },
  CZ: { code: "CZK", symbol: "Kč",  name: "Czech Koruna"       },
};

const FALLBACK: CurrencyInfo = {
  code: "USD",
  symbol: "$",
  name: "US Dollar",
};

function getTestRegion(): string | null {
  try {
    const params = new URLSearchParams(window.location.search);
    const param = params.get("locale");
    if (!param) return null;
    if (/^[A-Za-z]{2}$/.test(param)) return param.toUpperCase();
    return new Intl.Locale(param).region?.toUpperCase() ?? null;
  } catch {
    return null;
  }
}

export function useLocaleCurrency(): CurrencyInfo {
  const [currency, setCurrency] = useState<CurrencyInfo>(FALLBACK);

  useEffect(() => {
    const testRegion = getTestRegion();
    if (testRegion) {
      setCurrency(REGION_CURRENCY_MAP[testRegion] ?? FALLBACK);
      return;
    }

    fetch("https://api.country.is/")
      .then((res) => res.json())
      .then((data: { country?: string }) => {
        const region = (data.country ?? "").toUpperCase();
        setCurrency(REGION_CURRENCY_MAP[region] ?? FALLBACK);
      })
      .catch(() => {
        try {
          const locale = navigator.language || "en-PH";
          const region = new Intl.Locale(locale).region?.toUpperCase() ?? "";
          setCurrency(REGION_CURRENCY_MAP[region] ?? FALLBACK);
        } catch {
          setCurrency(FALLBACK);
        }
      });
  }, []);

  return currency;
}
