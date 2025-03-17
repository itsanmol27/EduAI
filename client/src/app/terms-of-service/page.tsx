"use client";

import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export default function TermsOfServicePage() {
  return (
    <div>
      <Header />
      <div className="container max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">Last Updated: March 13, 2024</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the EduAI platform, services, and website (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you should not access or use the Services. The Services are offered by EduAI ("we", "our", or "us").
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will provide notice of any material changes by posting the updated Terms on our website or through other communications. Your continued use of the Services after such changes constitutes your acceptance of the new Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Account Registration</h2>
          <p>
            To access certain features of the Services, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for all activities that occur under your account.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Service Description</h2>
          <p>
            EduAI is an AI-powered platform designed to help educators create high-quality educational materials. The Services include, but are not limited to, generating multiple-choice questions, lesson plans, and educational content in various languages.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Subscription and Payment</h2>
          <p>
            We offer both free and paid subscription plans. By subscribing to a paid plan, you agree to pay all fees associated with the plan. Fees are non-refundable except as required by law or as explicitly stated in our Refund Policy.
          </p>
          <p>
            Subscription fees will be billed in advance on a recurring basis, depending on the subscription plan you select. You authorize us to charge your chosen payment method for these recurring payments. If your payment cannot be completed, we may suspend or terminate your account.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. User Content</h2>
          <p>
            You retain all rights to any content you submit, post, or display on or through the Services ("User Content"). By providing User Content to the Services, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, modify, and display the User Content in connection with operating and providing the Services.
          </p>
          <p>
            You represent and warrant that you have all rights necessary to grant the licenses above and that your User Content does not violate any third-party rights or applicable laws.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. AI-Generated Content</h2>
          <p>
            The Services generate content using artificial intelligence. While we strive to ensure the quality and accuracy of AI-generated content, we do not guarantee its accuracy, completeness, or suitability for any particular purpose. You are responsible for reviewing and validating any AI-generated content before using it.
          </p>
          <p>
            You retain all rights to the AI-generated content created through your use of the Services, subject to our underlying intellectual property rights in the AI technology and models.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Prohibited Conduct</h2>
          <p>
            You agree not to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Use the Services for any illegal purpose or in violation of any laws</li>
            <li>Violate or infringe other people's intellectual property, privacy, or other rights</li>
            <li>Generate or distribute harmful, offensive, or inappropriate content</li>
            <li>Attempt to gain unauthorized access to the Services or related systems</li>
            <li>Interfere with or disrupt the Services or servers</li>
            <li>Automate access to the Services without our express permission</li>
            <li>Use the Services to develop competing products or services</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Intellectual Property Rights</h2>
          <p>
            The Services and their original content, features, and functionality are owned by EduAI and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Termination</h2>
          <p>
            We may terminate or suspend your account and access to the Services at our sole discretion, without notice, for any reason, including if you breach these Terms. Upon termination, your right to use the Services will immediately cease.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Disclaimer of Warranties</h2>
          <p>
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">12. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL EduAI, ITS AFFILIATES, OR THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">13. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">14. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
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
