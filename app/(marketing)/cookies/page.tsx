'use client';

import DocumentLayout from '@/components/DocumentLayout';

export default function CookiesPage() {
  return (
    <DocumentLayout 
      title="Cookie Protocol" 
      subtitle="The digital fingerprinting and local storage technologies used to optimize your Blinqq experience."
      lastUpdated="October 24, 2026"
      category="Technical Policy"
    >
      <section>
        <h2>1. Protocol Architecture</h2>
        <p>
          Blinqq utilizes minimal local storage and session-based identifiers to ensure the stability and security of your digital sessions. These are commonly referred to as "cookies."
        </p>
      </section>

      <section>
        <h2>2. Essential Session Vectors</h2>
        <p>
          Some cookies are architecturally necessary for the operation of the network. These include:
        </p>
        <ul>
          <li><strong>Authentication Signatures:</strong> Maintains your secure bridge to the vault across parallel sessions.</li>
          <li><strong>Security Tokens:</strong> Prevents cross-protocol falsification and session hijacking.</li>
          <li><strong>Load Balancing:</strong> Distributes network traffic across our global node infrastructure.</li>
        </ul>
      </section>

      <section>
        <h2>3. Optimization & Analytics</h2>
        <p>
          We use performance cookies to understand how participants interact with our interface. This data is strictly <strong>anonymized</strong> and used only to improve protocol efficiency and UI response times.
        </p>
      </section>

      <section>
        <h2>4. Preference Anchoring</h2>
        <p>
          These cookies remember your personalized interface settings, such as "Midnight" theme preferences, language localized routing, and high-performance typography toggles.
        </p>
      </section>

      <section>
        <h2>5. Permission Governance</h2>
        <p>
          You have full control over your digital fingerprint. You can:
        </p>
        <ol>
          <li>Initialize a "Global Opt-Out" through the Security Vault.</li>
          <li>Configure your node browser to reject all non-essential interaction metadata.</li>
          <li>Flush all locally cached session vectors with a single command.</li>
        </ol>
      </section>
    </DocumentLayout>
  );
}
