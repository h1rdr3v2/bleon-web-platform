import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - AirlyPay | Bleon Co LTD',
  description: 'Privacy Policy for AirlyPay services provided by Bleon Co Ltd. Learn how we collect, use, and protect your information.',
}

export default function AirlyPayPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <div className="flex items-center space-x-4">
              <Link href="/airlypay" className="text-blue-600 hover:text-blue-800">
                ← Back to AirlyPay
              </Link>
            </div>
          </header>

          <main className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Bleon Co Ltd ("we", "our", or "us") is committed to protecting the
                privacy of our users ("user" or "you"). This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you
                use our website, mobile application, and services (collectively, the
                "Services"). Please read this privacy policy carefully. If you do not
                agree with the terms of this privacy policy, please do not access the
                Services. We reserve the right to make changes to this Privacy Policy
                at any time and for any reason. We will alert you about any changes by
                updating the "Last updated" date of this Privacy Policy. You are
                encouraged to periodically review this Privacy Policy to stay informed
                of updates. You will be deemed to have been made aware of, will be
                subject to, and will be deemed to have accepted the changes in any
                revised Privacy Policy by your continued use of the Services after the
                date such revised Privacy Policy is posted.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Collection of Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The
                information we may collect via the Services includes:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>2.1. Personal Data:</strong> Personally identifiable
                  information, such as your name, email address, telephone number, and
                  demographic information that you voluntarily give to us when you
                  register with the Services or when you choose to participate in
                  various activities related to the Services. You are under no
                  obligation to provide us with personal information of any kind,
                  however your refusal to do so may prevent you from using certain
                  features of the Services.
                </li>
                <li>
                  <strong>2.2. Derivative Data:</strong> Information our servers
                  automatically collect when you access the Services, such as your IP
                  address, your browser type, your operating system, your access
                  times, and the pages you have viewed directly before and after
                  accessing the Services.
                </li>
                <li>
                  <strong>2.3. Financial Data:</strong> Financial information, such as
                  data related to your payment method (e.g., valid credit card number,
                  card brand, expiration date) that we may collect when you purchase,
                  order, return, exchange, or request information about our Services.
                  We store only very limited, if any, financial information that we
                  collect. Otherwise, all financial information is stored by our
                  payment processor, Flutterwave and Monnify, and you are encouraged
                  to review their privacy policy and contact them directly for
                  responses to your questions.
                </li>
                <li>
                  <strong>2.4. Chatbot Data:</strong> Chatbot information, such as
                  your account ID, platform name, and information not limited to
                  these, as you access the Services from our telegram or whatsapp chat
                  bot.
                </li>
                <li>
                  <strong>2.5. Data From Contests, Giveaways, and Surveys:</strong>
                  Personal and other information you may provide when entering
                  contests or giveaways and/or responding to surveys.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Use of Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Having accurate information about you permits us to provide you with a
                smooth, efficient, and customized experience. Specifically, we may use
                information collected about you via the Services to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Create and manage your account.</li>
                <li>Process transactions for VTU services.</li>
                <li>Administer giveaways and promotions.</li>
                <li>
                  Compile anonymous statistical data and analysis for use internally
                  or with third parties.
                </li>
                <li>
                  Deliver targeted advertising, coupons, newsletters, and other
                  information regarding promotions and the Services to you.
                </li>
                <li>Email you regarding your account or order.</li>
                <li>Enable user-to-user communications.</li>
                <li>
                  Generate a personal profile about you to make future visits to the
                  Services more personalized.
                </li>
                <li>Increase the efficiency and operation of the Services.</li>
                <li>
                  Monitor and analyze usage and trends to improve your experience with
                  the Services.
                </li>
                <li>Notify you of updates to the Services.</li>
                <li>
                  Offer new products, services, mobile applications, and/or
                  recommendations to you.
                </li>
                <li>Perform other business activities as needed.</li>
                <li>
                  Prevent fraudulent transactions, monitor against theft, and protect
                  against criminal activity.
                </li>
                <li>Process payments and refunds.</li>
                <li>
                  Request feedback and contact you about your use of the Services.
                </li>
                <li>Resolve disputes and troubleshoot problems.</li>
                <li>Respond to product and customer service requests.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Disclosure of Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share information we have collected about you in certain
                situations. Your information may be disclosed as follows:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>4.1. By Law or to Protect Rights:</strong> If we believe the
                  release of information about you is necessary to respond to legal
                  process, to investigate or remedy potential violations of our
                  policies, or to protect the rights, property, and safety of others,
                  we may share your information as permitted or required by any
                  applicable law, rule, or regulation.
                </li>
                <li>
                  <strong>4.2. Third-Party Service Providers:</strong> We may share
                  your information with third parties that perform services for us or
                  on our behalf, including payment processing, data analysis, email
                  delivery, hosting services, customer service, and marketing
                  assistance.
                </li>
                <li>
                  <strong>4.3. Marketing Communications:</strong> With your consent,
                  or with an opportunity for you to withdraw consent, we may share
                  your information with third parties for marketing purposes, as
                  permitted by law.
                </li>
                <li>
                  <strong>4.4. Interactions with Other Users:</strong> If you interact
                  with other users of the Services, those users may see your name,
                  profile photo, and descriptions of your activity, eg: Claiming a
                  giveaway.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Third-Party Websites</h2>
              <p className="text-gray-700 leading-relaxed">
                The Services may contain links to third-party websites and
                applications of interest, including advertisements and external
                services, that are not affiliated with us. Once you have used these
                links to leave the Services, any information you provide to these
                third parties is not covered by this Privacy Policy, and we cannot
                guarantee the safety and privacy of your information. Before visiting
                and providing any information to any third-party websites, you should
                inform yourself of the privacy policies and practices (if any) of the
                third party responsible for that website, and should take those steps
                necessary to, in your discretion, protect the privacy of your
                information. We are not responsible for the content or privacy and
                security practices and policies of any third parties, including other
                sites, services or applications that may be linked to or from the
                Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Security of Your Information</h2>
              <p className="text-gray-700 leading-relaxed">
                We use administrative, technical, and physical security measures to
                help protect your personal information. While we have taken reasonable
                steps to secure the personal information you provide to us, please be
                aware that despite our efforts, no security measures are perfect or
                impenetrable, and no method of data transmission can be guaranteed
                against any interception or other type of misuse. Any information
                disclosed online is vulnerable to interception and misuse by
                unauthorized parties. Therefore, we cannot guarantee complete security
                if you provide personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Policy for Children</h2>
              <p className="text-gray-700 leading-relaxed">
                We do not knowingly solicit information from or market to children
                under the age of 13. If you become aware of any data we have collected
                from children under age 13, please contact us using the contact
                information provided below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Options Regarding Your Information</h2>
              <ul className="list-disc pl-6 space-y-4 text-gray-700">
                <li>
                  <strong>8.1. Account Information</strong> You may at any time review
                  or change the information in your account or terminate your account
                  by:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      Logging into your account settings and updating your account
                    </li>
                    <li>
                      Contacting us using the contact information provided below
                    </li>
                  </ul>
                  Upon your request to terminate your account, we will deactivate or
                  delete your account and information from our active databases.
                  However, some information may be retained in our files to prevent
                  fraud, troubleshoot problems, assist with any investigations,
                  enforce our Terms of Use and/or comply with legal requirements.
                </li>
                <li>
                  <strong>8.2. Emails and Communications:</strong> If you no longer
                  wish to receive correspondence, emails, or other communications from
                  us, you may opt-out by:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      Contacting us using the contact information provided below
                    </li>
                  </ul>
                  If you no longer wish to receive correspondence, emails, or other
                  communications from third parties, you are responsible for
                  contacting the third party directly.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions or comments about this Privacy Policy, please
                contact us at:
              </p>
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
