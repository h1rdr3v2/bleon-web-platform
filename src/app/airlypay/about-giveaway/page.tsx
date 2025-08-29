import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Introducing: Giveaway Feature - AirlyPay | Bleon Co LTD',
  description: 'Discover AirlyPay\'s new Giveaway feature for Telegram and WhatsApp chatbots. Host and manage giveaways for your audience easily.',
}

export default function AirlyPayAboutGiveaway() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Introducing: Giveaway Feature
            </h1>
            <div className="flex items-center justify-center space-x-4">
              <Link href="/airlypay" className="text-blue-600 hover:text-blue-800">
                ← Back to AirlyPay
              </Link>
            </div>
          </header>

          <main className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">What's New?</h2>
              <p className="text-blue-800">
                We're excited to introduce our brand new Giveaway feature for our
                Telegram and WhatsApp chatbot! Now you can easily host and manage
                giveaways for your audience.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-blue-500 pb-2">
              How It Works
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">1. Access Giveaways</h3>
                <p className="text-gray-700 mb-4">
                  Click the giveaway button to view your active giveaways or see the
                  results of your last completed giveaway.
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/active.jpg"
                    alt="Giveaway Button Screenshot"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">2. Create a Giveaway</h3>
                <p className="text-gray-700 mb-4">Choose between two options:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>
                    <strong>Split Evenly:</strong> Set one amount (minimum 200 naira)
                    and number of participants.
                  </li>
                  <li>
                    <strong>Custom Amounts:</strong> Specify individual amounts for each
                    participant (minimum total: 200 naira).
                  </li>
                </ul>
                <div className="flex justify-center">
                  <Image
                    src="/options.jpg"
                    alt="Create Giveaway Options"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">3. Set a Greeting Message</h3>
                <p className="text-gray-700">
                  Customize a message for winners or skip this step for a quicker setup.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">4. Choose Coupon Type</h3>
                <p className="text-gray-700 mb-4">For "Split Evenly" giveaways, select between:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>
                    <strong>One for All:</strong> A single code for all participants.
                  </li>
                  <li>
                    <strong>One for One:</strong> Unique codes for each participant.
                  </li>
                </ul>
                <p className="text-gray-700">
                  Note: "Custom Amounts" giveaways always use "One for One" coupons.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">5. Confirm and Pay</h3>
                <p className="text-gray-700">
                  Review your giveaway details, then choose to pay with your account
                  balance or through a third-party payment system.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-blue-500 pb-2 mt-12">
              See It in Action
            </h2>
            
            <div className="relative w-full h-0 pb-[56.25%] mb-8">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/I1xjz27Vogc?si=NqJY8UylWYxs-8MW"
                title="AirlyPay Giveaway Feature Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Ready to Start?</h3>
              <p className="text-green-800 mb-6">
                Create your first giveaway now and engage your audience like never
                before!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://t.me/airlypaybot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Launch Giveaway WhatsApp
                </a>
                <a
                  href="https://wa.me/2349033613882?text=/giveaway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black border-2 border-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Launch Giveaway Tg
                </a>
              </div>
            </div>
          </main>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-600">© 2024 Bleon Co LTD. All rights reserved.</p>
              <div className="mt-4">
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  ← Back to Portfolio
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
