'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'

function PaymentContent() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<string | null>(null)
  const [txRef, setTxRef] = useState<string | null>(null)
  const [transactionId, setTransactionId] = useState<string | null>(null)

  useEffect(() => {
    if (searchParams) {
      const statusParam = searchParams.get('status')
      const txRefParam = searchParams.get('tx_ref')
      const transactionIdParam = searchParams.get('transaction_id')

      setStatus(statusParam)
      setTxRef(txRefParam)
      setTransactionId(transactionIdParam)
    }
  }, [searchParams])

  const closeTab = () => {
    if (typeof window !== 'undefined') {
      window.close()
    }
  }

  const goBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back()
    }
  }

  if (!status) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading payment status...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        {status === 'completed' ? (
          <>
            <div className="text-6xl text-green-500 mb-4">✓</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
            <p className="text-gray-600 mb-4">
              Thank you for your payment. Your transaction was successful.
            </p>
            {transactionId && (
              <p className="text-gray-600 mb-2">
                Transaction ID: <span className="font-mono text-sm">{transactionId}</span>
              </p>
            )}
            {txRef && (
              <p className="text-gray-600 mb-6">
                Reference: <span className="font-mono text-sm">{txRef}</span>
              </p>
            )}
            <button
              onClick={closeTab}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Please return to Bot
            </button>
          </>
        ) : (
          <>
            <div className="text-6xl text-red-500 mb-4">✗</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Payment Unsuccessful</h1>
            <p className="text-gray-600 mb-4">
              We&apos;re sorry, but your payment could not be processed.
            </p>
            <p className="text-gray-600 mb-4">
              Please try again or contact support if the problem persists.
            </p>
            {txRef && (
              <p className="text-gray-600 mb-6">
                Reference: <span className="font-mono text-sm">{txRef}</span>
              </p>
            )}
            <div className="space-y-3">
              <button
                onClick={goBack}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full"
              >
                Try Again
              </button>
              <Link
                href="/airlypay"
                className="block bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Back to AirlyPay
              </Link>
            </div>
          </>
        )}

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">© 2024 Bleon Co LTD. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default function AirlyPayPayment() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <PaymentContent />
    </Suspense>
  )
}
