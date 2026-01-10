import TypewriterText from './components/TypewriterText';

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Zakat Calculator for Canadians',
    description:
      'A simple, accurate, and private spreadsheet to calculate your annual Zakat. Your data stays entirely in your own Google Drive.',
    url: 'https://zakatbot.com',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CAD',
    },
    creator: {
      '@type': 'Organization',
      name: 'Qutoof Academy',
      url: 'https://qutoofacademy.com',
    },
    featureList: [
      'Cash and savings tracking',
      'Gold and silver holdings',
      'RESP, TFSA, and RRSP accounts',
      'Automatic nisab threshold',
      'Private data storage',
      'Google Sheets integration',
    ],
  };
  const COPY_LINK =
    'https://docs.google.com/spreadsheets/d/10kSPZtWwijBG7QOcCFm1nm2AMDzOPKQLqltfJhY6g24/copy';

  const steps = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
          <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
        </svg>
      ),
      title: 'Make a Copy',
      description:
        'Click the button and Google will create your personal copy of the spreadsheet.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M6.32 1.827a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V4.757c0-1.47 1.073-2.756 2.57-2.93ZM7.5 11.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H8.25Zm-.75 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75H8.25Zm1.748-6a.75.75 0 0 1 .75-.75h.007a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.007a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.007Zm-.75 3a.75.75 0 0 1 .75-.75h.007a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.007a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75h-.007Zm1.754-6a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.008Zm-.75 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75h-.008Zm1.748-6a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.008Zm-8.25-6A.75.75 0 0 1 8.25 6h7.5a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-.75Zm9 9a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-2.25Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: 'Enter Amounts',
      description:
        'Fill in your assets and liabilities in the guided input cells.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: 'Get Your Zakat',
      description:
        'The spreadsheet instantly calculates your Zakat amount owed.',
    },
  ];

  const features = [
    'Cash and savings',
    'Gold and silver holdings',
    'Controls to include/exclude certain assets e.g. jewellery',
    'RESP, TFSA, and RRSP accounts',
    'Liabilities and debts',
    'Automatic nisab threshold',
    'Final Zakat due at 2.5%',
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="mx-auto max-w-5xl p-6 mb-6 lg:mb-10">
        {/* Hero Section */}
        <section className="mb-6">
          <h1 className="text-3xl lg:text-5xl font-bold mb-2">
            Zakat Calculator for Canadians
          </h1>
          <div className="relative mb-3">
            {/* Hidden content to reserve space */}
            <p className="text-xl text-neutral-600 dark:text-neutral-400 invisible">
              A simple, accurate, and private spreadsheet to calculate your
              annual Zakat.
            </p>
            {/* Visible animated content */}
            <TypewriterText
              text="A simple, accurate, and private spreadsheet to calculate your annual Zakat."
              delay={15}
              className="text-xl text-neutral-600 dark:text-neutral-400 absolute top-0 left-0 right-0"
            />
          </div>

          <a
            href={COPY_LINK}
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition mt-4"
          >
            Start – Make Your Copy
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
            Your data stays entirely in your own Google Drive.
          </p>
        </section>

        {/* How It Works Section */}
        <section className="mt-10">
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 shadow-sm">
            <h3 className="text-xl lg:text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
              How It Works
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="text-blue-600 dark:text-blue-400 mb-2 flex justify-center">
                    {step.icon}
                  </div>
                  <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-6">
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 shadow-sm">
            <h3 className="text-xl lg:text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
              What This Calculator Covers
            </h3>
            <ul className="grid md:grid-cols-2 gap-2 text-neutral-600 dark:text-neutral-400">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 text-sm text-neutral-500 dark:text-neutral-400 text-center">
          Made with ❤️ by{' '}
          <a
            href="https://qutoofacademy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Qutoof Academy
          </a>
        </footer>
      </main>
    </>
  );
}
