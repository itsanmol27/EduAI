"use client";

import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <Header />
      <div className="container max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">Last Updated: March 13, 2024</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
          <p>
            EduAI ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, or interact with our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p>
            We collect information that you provide directly to us when you:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Create an account or profile</li>
            <li>Use our AI-powered content generation tools</li>
            <li>Contact our support team</li>
            <li>Subscribe to our newsletter</li>
            <li>Participate in surveys, contests, or promotions</li>
          </ul>

          <p>
            This information may include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Personal identifiers (name, email address, phone number)</li>
            <li>Professional information (school, institution, subject specialization)</li>
            <li>Account credentials</li>
            <li>Educational content you create or upload</li>
            <li>Feedback and correspondence</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide, maintain, and improve our services</li>
            <li>Personalize your experience</li>
            <li>Process transactions and manage your account</li>
            <li>Communicate with you about service updates, offers, and promotions</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Monitor and analyze usage trends</li>
            <li>Enhance the security of our services</li>
            <li>Train and improve our AI models</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Storage and Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, accidental loss, or destruction. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
          <p>
            We may use third-party services to help us operate our business and administer activities on our behalf, such as sending emails, analyzing data, and providing customer support. These third parties may have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access to your personal information</li>
            <li>Correction of inaccurate or incomplete information</li>
            <li>Deletion of your personal information</li>
            <li>Restriction or objection to our use of your personal information</li>
            <li>Data portability</li>
            <li>Withdrawal of consent</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
          <p>
            Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16 without verification of parental consent, we will take steps to remove that information from our servers.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
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
