export const site = {
  name: "bekaSOBA",
  legalName: "DENMISEW KA GNETA",
  domain: "bekasoba.com",
  url: "https://www.bekasoba.com",
  logo: "/bekasoba-logo.png",
  logoSvg: "/bekasoba-logo.png",

  themeColor: "#006838",
  locale: "fr_FR",
  alternateLocale: "en_US",
  keywords: [
    "bekaSOBA",
    "bekasoba",
    "consulting Mali",
    "conseil Bamako",
    "project management Mali",
    "AI project management Mali",
    "automatisation Mali",
    "employabilité Mali",
    "school services Mali",
    "web app Mali",
    "business launch Mali",
    "construction advisory Mali",
    "digital solutions Mali",
  ],
  twitter: "@bekasoba",
};

export const gscVerification =
  process.env.NEXT_PUBLIC_GSC_VERIFICATION ??
  "veOq8bjVw0Li6MmaB2zFa7zGBvYYKZstgVc6_Rn2I4w";

export const gaMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-JMV29X7KMG";

export const analytics = {
  gaId: gaMeasurementId,
  gscVerification,
};
