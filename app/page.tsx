import TypewriterText from './components/TypewriterText';

export default function Home() {
  const COPY_LINK =
    'https://docs.google.com/spreadsheets/d/10kSPZtWwijBG7QOcCFm1nm2AMDzOPKQLqltfJhY6g24/copy';

  const steps = [
    {
      number: 1,
      title: 'Make a Copy',
      description:
        'Click the button and Google will create your personal copy of the spreadsheet.',
    },
    {
      number: 2,
      title: 'Enter Amounts',
      description:
        'Fill in your assets and liabilities in the guided input cells.',
    },
    {
      number: 3,
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
    <main className="mx-auto max-w-5xl p-6 mb-6 lg:mb-10">
      {/* Hero Section */}
      <section className="mb-6">
        <h1 className="text-3xl lg:text-5xl font-bold mb-2">
          Zakat Calculator for Canadians
        </h1>
        <TypewriterText
          text="A simple, accurate, and private spreadsheet to calculate your annual Zakat. Your data stays entirely in your own Google Drive."
          delay={15}
          className="text-xl mb-3 text-neutral-600 dark:text-neutral-400"
        />

        <a
          href={COPY_LINK}
          target="_blank"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition mt-4"
        >
          Start – Make Your Copy
        </a>

        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
          No login. No accounts. No data stored on our servers.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="mt-10">
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 shadow-sm">
          <h3 className="text-xl lg:text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
            How It Works
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="text-blue-600 dark:text-blue-400 font-bold text-2xl mb-2">
                  {step.number}
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
        Built to keep your financial data private. All calculations happen
        inside your own Google Sheet.
      </footer>
    </main>
  );
}
