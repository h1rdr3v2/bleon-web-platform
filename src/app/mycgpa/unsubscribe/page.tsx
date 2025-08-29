import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Unsubscribe - MyCGPA | Bleon Co LTD',
  description: 'Unsubscribe from MyCGPA email notifications. Contact us to stop receiving emails.',
}

export default function MyCGPAUnsubscribe() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Unsubscribe to Email Notifications</h1>
            <div className="flex items-center space-x-4">
              <Link href="/mycgpa" className="text-blue-600 hover:text-blue-800">
                ← Back to MyCGPA
              </Link>
            </div>
          </header>

          <main className="prose prose-lg max-w-none">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-yellow-700">
                    To be exempted from our email notifications, kindly email us at{' '}
                    <a href="mailto:support@bleon.co" className="font-medium underline text-yellow-700 hover:text-yellow-600">
                      support@bleon.co
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-blue-700">
                    <strong>Note:</strong> We'll process your unsubscribe request within 24-48 hours. 
                    You may still receive emails during this period.
                  </p>
                </div>
              </div>
            </div>
          </main>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm">© 2024 Bleon Co LTD. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  )
}
