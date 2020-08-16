import React from "react";
import { WorldMap } from "react-svg-worldmap";

const data1 = [
  {
    country: "Afghanistan",
    value: 22373,
  },
  {
    country: "Albania",
    value: 52133,
  },
  {
    country: "Algeria",
    value: 314043,
  },
  {
    country: "American Samoa",
    value: 36,
  },
  {
    country: "Angola",
    value: 5100,
  },
  {
    country: "Antigua and Barbuda",
    value: 272,
  },
  {
    country: "Argentina",
    value: 829000,
  },
  {
    country: "Armenia",
    value: 36340,
  },
  {
    country: "Australia",
    value: 258928,
  },
  {
    country: "Austria",
    value: 127585,
  },
  {
    country: "Azerbaijan",
    value: 100582,
  },
  {
    country: "Bahamas",
    value: 875,
  },
  {
    country: "Bahrain",
    value: 2859,
  },
  {
    country: "Bangladesh",
    value: 499744,
  },
  {
    country: "Barbados",
    value: 2872,
  },
  {
    country: "Belarus",
    value: 199600,
  },
  {
    country: "Belgium",
    value: 167373,
  },
  {
    country: "Belize",
    value: 3063,
  },
  {
    country: "Benin",
    value: 15355,
  },
  {
    country: "Bermuda",
    value: 365,
  },
  {
    country: "Bhutan",
    value: 4000,
  },
  {
    country: "Bolivia (Plurinational State of)",
    value: 112125,
  },
  {
    country: "Bosnia and Herzegovina",
    value: 22000,
  },
  {
    country: "Botswana",
    value: 3670,
  },
  {
    country: "Brazil",
    value: 2665613,
  },
  {
    country: "Brunei Darussalam",
    value: 8504,
  },
  {
    country: "Bulgaria",
    value: 77871,
  },
  {
    country: "Burkina Faso",
    value: 60610,
  },
  {
    country: "Burundi",
    value: 3338,
  },
  {
    country: "Cabo Verde",
    value: 2071,
  },
  {
    country: "Cambodia",
    value: 18700,
  },
  {
    country: "Cameroon",
    value: 18307,
  },
  {
    country: "Canada",
    value: 571300,
  },
  {
    country: "Cayman Islands",
    value: 8,
  },
  {
    country: "Central African Republic",
    value: 2797,
  },
  {
    country: "Chad",
    value: 7639,
  },
  {
    country: "Chile",
    value: 247057,
  },
  {
    country: "China",
    value: 26956478,
  },
  {
    country: "China, Hong Kong SAR",
    value: 453,
  },
  {
    country: "China, Macao SAR",
    value: 425,
  },
  {
    country: "China, mainland",
    value: 26590000,
  },
  {
    country: "China, Taiwan Province of",
    value: 365600,
  },
  {
    country: "Colombia",
    value: 780000,
  },
  {
    country: "Comoros",
    value: 1121,
  },
  {
    country: "Congo",
    value: 1489,
  },
  {
    country: "Cook Islands",
    value: 36,
  },
  {
    country: "Costa Rica",
    value: 67500,
  },
  {
    country: "Côte d'Ivoire",
    value: 41048,
  },
  {
    country: "Croatia",
    value: 47000,
  },
  {
    country: "Cuba",
    value: 122267,
  },
  {
    country: "Cyprus",
    value: 9733,
  },
  {
    country: "Czechia",
    value: 87488,
  },
  {
    country: "Democratic People's Republic of Korea",
    value: 119741,
  },
  {
    country: "Democratic Republic of the Congo",
    value: 7751,
  },
  {
    country: "Denmark",
    value: 88674,
  },
  {
    country: "Dominica",
    value: 323,
  },
  {
    country: "Dominican Republic",
    value: 104000,
  },
  {
    country: "Ecuador",
    value: 150000,
  },
  {
    country: "Egypt",
    value: 454250,
  },
  {
    country: "El Salvador",
    value: 67000,
  },
  {
    country: "Equatorial Guinea",
    value: 322,
  },
  {
    country: "Eritrea",
    value: 2185,
  },
  {
    country: "Estonia",
    value: 12591,
  },
  {
    country: "Eswatini",
    value: 1001,
  },
  {
    country: "Ethiopia",
    value: 52161,
  },
  {
    country: "Fiji",
    value: 9148,
  },
  {
    country: "Finland",
    value: 74880,
  },
  {
    country: "France",
    value: 847868,
  },
  {
    country: "French Guyana",
    value: 689,
  },
  {
    country: "French Polynesia",
    value: 2364,
  },
  {
    country: "Gabon",
    value: 2495,
  },
  {
    country: "Gambia",
    value: 1014,
  },
  {
    country: "Georgia",
    value: 41579,
  },
  {
    country: "Germany",
    value: 846000,
  },
  {
    country: "Ghana",
    value: 41886,
  },
  {
    country: "Greece",
    value: 90000,
  },
  {
    country: "Grenada",
    value: 1415,
  },
  {
    country: "Guadeloupe",
    value: 1957,
  },
  {
    country: "Guam",
    value: 748,
  },
  {
    country: "Guatemala",
    value: 275000,
  },
  {
    country: "Guinea",
    value: 24778,
  },
  {
    country: "Guinea-Bissau",
    value: 1270,
  },
  {
    country: "Guyana",
    value: 1768,
  },
  {
    country: "Haiti",
    value: 4570,
  },
  {
    country: "Honduras",
    value: 51600,
  },
  {
    country: "Hungary",
    value: 138989,
  },
  {
    country: "Iceland",
    value: 4800,
  },
  {
    country: "in",
    value: 5236935,
  },
  {
    country: "Indonesia",
    value: 1644460,
  },
  {
    country: "Iran (Islamic Republic of)",
    value: 723600,
  },
  {
    country: "Iraq",
    value: 48595,
  },
  {
    country: "Ireland",
    value: 45271,
  },
  {
    country: "Israel",
    value: 153072,
  },
  {
    country: "Italy",
    value: 736400,
  },
  {
    country: "Jamaica",
    value: 10571,
  },
  {
    country: "Japan",
    value: 2627764,
  },
  {
    country: "Jordan",
    value: 53201,
  },
  {
    country: "Kazakhstan",
    value: 278768,
  },
  {
    country: "Kenya",
    value: 83552,
  },
  {
    country: "Kiribati",
    value: 250,
  },
  {
    country: "Kuwait",
    value: 135282,
  },
  {
    country: "Kyrgyzstan",
    value: 29328,
  },
  {
    country: "Lao People's Democratic Republic",
    value: 15754,
  },
  {
    country: "Latvia",
    value: 45195,
  },
  {
    country: "Lebanon",
    value: 25000,
  },
  {
    country: "Lesotho",
    value: 1052,
  },
  {
    country: "Liberia",
    value: 6403,
  },
  {
    country: "Libya",
    value: 72664,
  },
  {
    country: "Liechtenstein",
    value: 251,
  },
  {
    country: "Lithuania",
    value: 51120,
  },
  {
    country: "Luxembourg",
    value: 2077,
  },
  {
    country: "Madagascar",
    value: 17700,
  },
  {
    country: "Malawi",
    value: 22937,
  },
  {
    country: "Malaysia",
    value: 856767,
  },
  {
    country: "Mali",
    value: 21815,
  },
  {
    country: "Malta",
    value: 5331,
  },
  {
    country: "Martinique",
    value: 2255,
  },
  {
    country: "Mauritania",
    value: 5511,
  },
  {
    country: "Mauritius",
    value: 12800,
  },
  {
    country: "Mexico",
    value: 2871918,
  },
  {
    country: "Micronesia (Federated States of)",
    value: 247,
  },
  {
    country: "Mongolia",
    value: 7596,
  },
  {
    country: "Montenegro",
    value: 5062,
  },
  {
    country: "Montserrat",
    value: 71,
  },
  {
    country: "Morocco",
    value: 396000,
  },
  {
    country: "Mozambique",
    value: 50000,
  },
  {
    country: "Myanmar",
    value: 576000,
  },
  {
    country: "Namibia",
    value: 2659,
  },
  {
    country: "Nauru",
    value: 28,
  },
  {
    country: "Nepal",
    value: 74900,
  },
  {
    country: "Netherlands",
    value: 704659,
  },
  {
    country: "Netherlands Antilles (former)",
    value: 529,
  },
  {
    country: "New Caledonia",
    value: 2130,
  },
  {
    country: "New Zealand",
    value: 61924,
  },
  {
    country: "Nicaragua",
    value: 36293,
  },
  {
    country: "Niger",
    value: 10316,
  },
  {
    country: "Nigeria",
    value: 481437,
  },
  {
    country: "Niue",
    value: 16,
  },
  {
    country: "North Macedonia",
    value: 8907,
  },
  {
    country: "Norway",
    value: 70439,
  },
  {
    country: "Oman",
    value: 22272,
  },
  {
    country: "Pakistan",
    value: 847739,
  },
  {
    country: "Palestine",
    value: 25020,
  },
  {
    country: "Panama",
    value: 38270,
  },
  {
    country: "Papua New Guinea",
    value: 5500,
  },
  {
    country: "Paraguay",
    value: 89593,
  },
  {
    country: "Peru",
    value: 452234,
  },
  {
    country: "Philippines",
    value: 533905,
  },
  {
    country: "Poland",
    value: 656873,
  },
  {
    country: "Portugal",
    value: 142790,
  },
  {
    country: "Puerto Rico",
    value: 14703,
  },
  {
    country: "Qatar",
    value: 5178,
  },
  {
    country: "Republic of Korea",
    value: 772898,
  },
  {
    country: "Republic of Moldova",
    value: 37879,
  },
  {
    country: "Réunion",
    value: 7309,
  },
  {
    country: "Romania",
    value: 280228,
  },
  {
    country: "Russian Federation",
    value: 2486288,
  },
  {
    country: "Rwanda",
    value: 7800,
  },
  {
    country: "Saint Kitts and Nevis",
    value: 240,
  },
  {
    country: "Saint Lucia",
    value: 759,
  },
  {
    country: "Saint Pierre and Miquelon",
    value: 15,
  },
  {
    country: "Saint Vincent and the Grenadines",
    value: 555,
  },
  {
    country: "Samoa",
    value: 324,
  },
  {
    country: "Sao Tome and Principe",
    value: 225,
  },
  {
    country: "Saudi Arabia",
    value: 285800,
  },
  {
    country: "Senegal",
    value: 25534,
  },
  {
    country: "Serbia",
    value: 89803,
  },
  {
    country: "Seychelles",
    value: 1109,
  },
  {
    country: "Sierra Leone",
    value: 11608,
  },
  {
    country: "Singapore",
    value: 29304,
  },
  {
    country: "Slovakia",
    value: 73974,
  },
  {
    country: "Slovenia",
    value: 23821,
  },
  {
    country: "Solomon Islands",
    value: 587,
  },
  {
    country: "Somalia",
    value: 2639,
  },
  {
    country: "South Africa",
    value: 453588,
  },
  {
    country: "Spain",
    value: 839347,
  },
  {
    country: "Sri Lanka",
    value: 110443,
  },
  {
    country: "Sudan",
    value: 65000,
  },
  {
    country: "Suriname",
    value: 3671,
  },
  {
    country: "Sweden",
    value: 122800,
  },
  {
    country: "Switzerland",
    value: 60648,
  },
  {
    country: "Syrian Arab Republic",
    value: 112000,
  },
  {
    country: "Tajikistan",
    value: 24766,
  },
  {
    country: "Thailand",
    value: 701633,
  },
  {
    country: "Timor-Leste",
    value: 1121,
  },
  {
    country: "Togo",
    value: 12106,
  },
  {
    country: "Tokelau",
    value: 10,
  },
  {
    country: "Tonga",
    value: 350,
  },
  {
    country: "Trinidad and Tobago",
    value: 3550,
  },
  {
    country: "Tunisia",
    value: 111250,
  },
  {
    country: "Turkey",
    value: 962542,
  },
  {
    country: "Turkmenistan",
    value: 46359,
  },
  {
    country: "Tuvalu",
    value: 20,
  },
  {
    country: "Uganda",
    value: 45000,
  },
  {
    country: "Ukraine",
    value: 922300,
  },
  {
    country: "United Arab Emirates",
    value: 57000,
  },
  {
    country: "United Kingdom of Great Britain and Northern Ireland",
    value: 777000,
  },
  {
    country: "United Republic of Tanzania",
    value: 108700,
  },
  {
    country: "us",
    value: 6466263,
  },
  {
    country: "United States Virgin Islands",
    value: 180,
  },
  {
    country: "Uruguay",
    value: 48906,
  },
  {
    country: "Uzbekistan",
    value: 415835,
  },
  {
    country: "Vanuatu",
    value: 644,
  },
  {
    country: "Venezuela (Bolivarian Republic of)",
    value: 173000,
  },
  {
    country: "Viet Nam",
    value: 582280,
  },
  {
    country: "Wallis and Futuna Islands",
    value: 45,
  },
  {
    country: "Yemen",
    value: 55632,
  },
  {
    country: "Zambia",
    value: 52597,
  },
  {
    country: "Zimbabwe",
    value: 24697,
  },
];

export default function Waste() {
  const import1 = [
    { country: "cn", value: 1389618778 }, // china
    { country: "in", value: 1311559204 }, // india
    { country: "us", value: 33986 }, // united states
    { country: "id", value: 26493824 }, // indonesia
    { country: "pk", value: 21836 }, // pakistan
    { country: "br", value: 2103091 }, // brazil
    { country: "ng", value: 20739114 }, // nigeria
    { country: "bd", value: 12905 }, // bangladesh
    { country: "ru", value: 14641 }, // russia
    { country: "mx", value: 128112 }, // mexico;
  ];
  const export1 = [
    { country: "cn", value: 1389618778 }, // china
    { country: "in", value: 13159204 }, // india
    { country: "us", value: 331883986 }, // united states
    { country: "id", value: 2935824 }, // indonesia
    { country: "pk", value: 210797836 }, // pakistan
    { country: "br", value: 2301591 }, // brazil
    { country: "ng", value: 208679114 }, // nigeria
    { country: "bd", value: 162905 }, // bangladesh
    { country: "ru", value: 141944641 }, // russia
    { country: "mx", value: 127112 }, // mexico
  ];

  const export3 = [
    { country: "cn", value: 18778 }, // china
    { country: "in", value: 159204 }, // india
    { country: "us", value: 3323986 }, // united states
    { country: "id", value: 25824 }, // indonesia
    { country: "pk", value: 2836 }, // pakistan
    { country: "br", value: 21591 }, // brazil
    { country: "ng", value: 2086714 }, // nigeria
    { country: "bd", value: 6062905 }, // bangladesh
    { country: "ru", value: 41944641 }, // russia
    { country: "mx", value: 7318112 }, // mexico
  ];

  return (
    <div>
      <div className="wasteCentral">
        <WorldMap
          color="red"
          title="Import Stats"
          value-suffix="people"
          size="xl"
          data={import1}
        />
      </div>
      <div className="wasteCentral">
        <WorldMap
          color="red"
          title="Export Stats"
          value-suffix="people"
          size="xl"
          data={export1}
        />
      </div>
      <div className="wasteCentral">
        <WorldMap
          color="red"
          title="Wastage"
          value-suffix="people"
          size="xl"
          data={export3}
        />
      </div>
    </div>
  );
}
