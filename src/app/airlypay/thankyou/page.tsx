import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Thank You - AirlyPay | Bleon Co LTD',
  description: 'Thank you for using AirlyPay services. We appreciate your business.',
}

export default function AirlyPayThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <Image
              src="/thankyou.jpg"
              alt="Thank You"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Thank You!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            We appreciate your business and trust in AirlyPay services. 
            Your transaction has been processed successfully.
          </p>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
            <div className="flex items-center justify-center space-x-2 text-green-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">Transaction Completed Successfully</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <Link
              href="/airlypay"
              className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Back to AirlyPay
            </Link>
            
            <Link
              href="/"
              className="block w-full bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Back to Portfolio
            </Link>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need help? Contact us at{' '}
              <a href="mailto:support@bleon.co" className="text-blue-600 hover:text-blue-800">
                support@bleon.co
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
