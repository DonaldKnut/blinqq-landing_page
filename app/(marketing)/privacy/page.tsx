'use client';

import DocumentLayout from '@/components/DocumentLayout';

export default function PrivacyPage() {
  return (
    <DocumentLayout 
      title="Privacy Policy" 
      subtitle="How we collect, use, and protect your personal information on Blinqq."
      lastUpdated="October 24, 2026"
      category="Security & Privacy"
    >
      <section>
        <h2>1. Overview</h2>
        <p>
          At Blinqq, your privacy matters to us. This page explains what data we collect, why we collect it, and how we keep it safe.
        </p>
      </section>

      <section>
        <h2>2. Data We Handle</h2>
        <p>
          We only collect data needed to run your account. This includes:
        </p>
        <ul>
          <li><strong>Personal Information:</strong> Your name, email, and account details.</li>
          <li><strong>Transaction Data:</strong> Records of payments, transfers, and account activity.</li>
          <li><strong>Access Control:</strong> We do not share your data with third parties without your permission, unless required by law.</li>
        </ul>
      </section>

      <section>
        <h2>3. Security</h2>
        <p>
          We use strong security tools, including encryption and secure access checks, to protect your account and data.
        </p>
      </section>

      <section>
        <h2>4. Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ol>
          <li>Request a copy of your personal data.</li>
          <li>Ask us to correct wrong information.</li>
          <li>Ask us to delete your account where possible.</li>
        </ol>
      </section>

      <section>
        <h2>5. Updates to This Policy</h2>
        <p>
          We may update this policy from time to time. When we do, we will publish the new version on this page.
        </p>
      </section>
    </DocumentLayout>
  );
}
