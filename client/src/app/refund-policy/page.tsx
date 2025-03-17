"use client";

import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export default function RefundPolicyPage() {
  return (
    <div>
      <Header />
      <div className="container max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Refund Policy</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">Last Updated: March 13, 2024</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Overview</h2>
          <p>
            This Refund Policy outlines the terms and conditions regarding refunds for subscription fees paid to EduAI. By using our services, you agree to the terms of this Refund Policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Subscription Plans</h2>
          <p>
            EduAI offers both free and paid subscription plans. Paid subscriptions may be offered on a monthly, quarterly, or annual basis, as described on our website or during the checkout process.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. General Refund Policy</h2>
          <p>
            As a general rule, subscription fees for EduAI services are non-refundable. We do not provide refunds for:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Partial use of services during a billing period</li>
            <li>Dissatisfaction with the service</li>
            <li>Changes in your circumstances or requirements</li>
            <li>Accidental purchases (unless reported within 24 hours)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Exceptions to the No-Refund Policy</h2>
          <p>
            We may, at our sole discretion, provide refunds in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Technical Issues:</strong> If you experience significant technical issues that prevent you from accessing or using our services, and our support team is unable to resolve these issues within a reasonable timeframe.</li>
            <li><strong>Free Trial Conversion:</strong> If you are charged immediately after a free trial period and contact us within 48 hours of the charge.</li>
            <li><strong>Duplicate Charges:</strong> If you were charged multiple times for the same subscription period.</li>
            <li><strong>Legal Requirements:</strong> If refunds are required by applicable law in your jurisdiction.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cancellation of Subscription</h2>
          <p>
            You may cancel your subscription at any time through your account settings or by contacting our support team. Upon cancellation:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>You will continue to have access to the paid features until the end of your current billing period.</li>
            <li>Your subscription will not renew for the next billing period.</li>
            <li>No refund will be provided for the unused portion of your current billing period.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Pro-rated Refunds for Annual Subscriptions</h2>
          <p>
            For annual subscription plans, we may, at our discretion, offer pro-rated refunds if you cancel within 30 days of the initial purchase or the most recent renewal date. The refund amount will be calculated based on the unused portion of your subscription, minus a processing fee.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Requesting a Refund</h2>
          <p>
            To request a refund, please contact our support team at <a href="mailto:admin@buildfastwithai.com" className="text-orange-500 hover:underline">admin@buildfastwithai.com</a> with the following information:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your account email address</li>
            <li>Date of purchase</li>
            <li>Subscription plan purchased</li>
            <li>Reason for the refund request</li>
            <li>Any relevant documentation or screenshots</li>
          </ul>
          <p>
            We will review your request and respond within 5 business days.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Method of Refund</h2>
          <p>
            Refunds, when approved, will be processed using the same payment method used for the original purchase. The time required for the refund to appear in your account will depend on your payment provider.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to This Policy</h2>
          <p>
            We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes to the Refund Policy constitutes your acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Information</h2>
          <p>
            If you have any questions about our Refund Policy, please contact us at:
          </p>
          <p className="mt-2 mb-4">
            Email: <a href="mailto:admin@buildfastwithai.com" className="text-orange-500 hover:underline">admin@buildfastwithai.com</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
