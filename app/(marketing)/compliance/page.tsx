'use client';

import DocumentLayout from '@/components/DocumentLayout';

export default function CompliancePage() {
  return (
    <DocumentLayout 
      title="Compliance Framework" 
      subtitle="How Blinqq adheres to global financial standards and regulatory protocols."
      lastUpdated="October 24, 2026"
      category="Regulation & Compliance"
    >
      <section>
        <h2>1. Global Standards Adherence</h2>
        <p>
          Blinqq is committed to maintaining the highest levels of integrity and compliance. Our framework is designed to align with <strong>FATF</strong> recommendations, <strong>GDPR</strong> data protection standards, and regional financial regulations across our operational nodes.
        </p>
      </section>

      <section>
        <h2>2. Anti-Money Laundering (AML) Protocol</h2>
        <p>
          We employ sophisticated, AI-driven monitoring systems to detect and prevent illicit financial activities. Our AML protocols include:
        </p>
        <ul>
          <li><strong>Real-time Transaction Scrubbing:</strong> Every interaction on the network is checked against global sanction lists.</li>
          <li><strong>Risk Scoring:</strong> Our proprietary algorithms assign risk vectors to unique wallet signatures based on historical behavioral metadata.</li>
          <li><strong>Law Enforcement Engagement:</strong> We maintain bridges for collaboration with authorized jurisdictional agencies when protocol breaches are identified.</li>
        </ul>
      </section>

      <section>
        <h2>3. Know Your Customer (KYC) / Entity (KYE)</h2>
        <p>
          To access the premium tiers of the Blinqq ecosystem, participants must undergo a biometric or cryptographic identity verification process. This ensures that the network remains a safe environment for institutional and retail liquidity.
        </p>
      </section>

      <section>
        <h2>4. Data Sovereignty & Portability</h2>
        <p>
          In compliance with the Data Protection Act, you remain the sovereign owner of your interaction history. You can request a complete cryptographic audit or export of your node metadata at any time through the Security Vault.
        </p>
      </section>

      <section>
        <h2>5. Operational Audits</h2>
        <p>
          Our smart contracts and liquidity reserve protocols are audited monthly by independent security collectives such as <strong>Quantstamp</strong> and <strong>CertiK</strong>. Audit reports are made immutable on the public transparency ledger.
        </p>
      </section>
    </DocumentLayout>
  );
}
