import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service - MyCGPA | Bleon Co LTD',
  description: 'Terms of Service for MyCGPA services provided by Bleon Co Ltd. Learn about our terms and conditions.',
}

export default function MyCGPATermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <div className="flex items-center space-x-4">
              <Link href="/mycgpa" className="text-blue-600 hover:text-blue-800">
                ← Back to MyCGPA
              </Link>
            </div>
          </header>

          <main className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to Bleon Co Ltd ("Company", "we", "our", "us"). These Terms
                and Conditions ("Terms") govern your use of our website, mobile
                application, and services (collectively, the "Services"). By accessing
                or using our Services, you agree to be bound by these Terms. If you
                disagree with any part of the Terms, you may not access the Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Definitions</h2>
              <p className="text-gray-700 leading-relaxed">
                "User", "You", and "Your" refers to you, the person accessing this
                website and accepting the Company's terms and conditions. "Content"
                means any information, text, graphics, or other materials uploaded,
                downloaded, or appearing on the Services. "VTU" means Virtual Top-Up,
                referring to electronic recharge of mobile airtime or data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Use of Your Information</h2>
              <p className="text-gray-700 leading-relaxed">
                Bleon Co LTD provides airtime recharge and data packages for MTN,
                Airtel, Glo, and 9Mobile networks in Nigeria. We also offer a platform
                for users to host giveaways.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                Bleon Co LTD is not liable for any indirect, incidental, special,
                consequential or punitive damages resulting from your use of our
                services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use
                of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">If you have any questions about these Terms, please contact us at:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Bleon Co Ltd</strong><br />
                  Umuahia, Abia State, Nigeria<br />
                  WhatsApp: <a href="https://wa.me/2348137607306" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    +234 813 760 7306
                  </a><br />
                  Email: <a href="mailto:support@bleon.co" className="text-blue-600 hover:text-blue-800">support@bleon.co</a>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                By using our Services, you acknowledge that you have read and understood
                these Terms and agree to be bound by them.
              </p>
            </section>
          </main>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm">Last updated: Friday September 20, 2024</p>
            <p className="text-gray-600 text-sm">© 2024 Bleon Co LTD. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  )
}
