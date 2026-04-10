'use client';

import DocumentLayout from '@/components/DocumentLayout';

export default function TermsPage() {
  return (
    <DocumentLayout 
      title="Terms of Service" 
      subtitle="The rules for using Blinqq."
      lastUpdated="October 24, 2026"
      category="Governance & Law"
    >
      <section>
        <h2>1. Accepting These Terms</h2>
        <p>
          By creating an account or using Blinqq, you agree to these terms. These terms are a legal agreement between you and Blinqq.
        </p>
      </section>

      <section>
        <h2>2. Who Can Use Blinqq</h2>
        <p>
          To use Blinqq, you must:
        </p>
        <ul>
          <li>Be of legal age in your country.</li>
          <li>Use the app in line with local laws.</li>
          <li>Provide correct account information.</li>
        </ul>
      </section>

      <section>
        <h2>3. Your Responsibilities</h2>
        <p>
          You are responsible for:
        </p>
        <ol>
          <li>Keeping your login details safe.</li>
          <li>Using the platform in a legal way.</li>
          <li>Reporting security issues when you find them.</li>
        </ol>
      </section>

      <section>
        <h2>4. What You Must Not Do</h2>
        <p>
          You must not use Blinqq for:
        </p>
        <ul>
          <li>Fraud, scams, or illegal activities.</li>
          <li>Trying to access another user’s account.</li>
          <li>Anything that can damage or disrupt the platform.</li>
        </ul>
      </section>

      <section>
        <h2>5. Liability</h2>
        <p>
          Blinqq is provided "as is." We try to keep the service stable, but we are not responsible for losses caused by outages, technical issues, or third-party services.
        </p>
      </section>

      <section>
        <h2>6. Disputes</h2>
        <p>
          If there is a dispute, we will first try to resolve it through our support process before any legal action.
        </p>
      </section>
    </DocumentLayout>
  );
}
