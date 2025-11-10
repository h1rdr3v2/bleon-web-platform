import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Privacy Policy | Watchman's Hymnal - Bleon Co LTD",
	description:
		"Privacy Policy for Watchman's Hymnal mobile application - Learn how we protect your privacy and handle data.",
}

export default function WatchmanHymnalPrivacyPolicy() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						Privacy Policy
					</h1>
					<p className="text-sm text-gray-600 mb-8">
						Last Updated: November 10, 2025
					</p>

					<div className="prose prose-lg max-w-none">
						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								1. Introduction
							</h2>
							<p className="text-gray-700 mb-4">
								Welcome to Watchman's Hymnal (also referred to as "Watchmans
								Hymns"), a mobile application operated by Bleon Co Ltd ("we,"
								"us," or "our"). We are committed to protecting your privacy and
								ensuring transparency about how we handle information in our
								app.
							</p>
							<p className="text-gray-700 mb-4">
								<strong>Important:</strong> Watchman's Hymnal is designed to be
								privacy-friendly. We DO NOT collect, store, or transmit any
								personal information such as names, email addresses, phone
								numbers, or physical addresses. This privacy policy explains
								what limited data is collected by third-party services and what
								information is stored only on your device.
							</p>
							<p className="text-gray-700">
								By using Watchman's Hymnal, you agree to this Privacy Policy. If
								you do not agree, please do not use the app.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								2. Contact Information
							</h2>
							<div className="bg-gray-50 p-4 rounded-lg">
								<p className="text-gray-700 mb-2">
									<strong>Company Name:</strong> Bleon Co Ltd
								</p>
								<p className="text-gray-700 mb-2">
									<strong>Email:</strong>{" "}
									<a
										href="mailto:support@bleon.co"
										className="text-blue-600 hover:underline"
									>
										support@bleon.co
									</a>
								</p>
								<p className="text-gray-700 mb-2">
									<strong>Address:</strong> Abia State, Nigeria
								</p>
								<p className="text-gray-700">
									<strong>App Version:</strong> 0.2.0
								</p>
							</div>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								3. Personal Information We DO NOT Collect
							</h2>
							<p className="text-gray-700 mb-4">
								We want to be clear:{" "}
								<strong>
									Watchman's Hymnal does not collect any personal information
								</strong>{" "}
								from users, including but not limited to:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
								<li>Names or usernames</li>
								<li>Email addresses</li>
								<li>Phone numbers</li>
								<li>Physical addresses</li>
								<li>User accounts (no registration required)</li>
								<li>Payment information (handled by Apple/Google stores)</li>
							</ul>
							<p className="text-gray-700">
								The app is designed to work without requiring you to create an
								account or provide any personal details.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								4. Data Stored Locally on Your Device
							</h2>
							<p className="text-gray-700 mb-4">
								The following information is stored{" "}
								<strong>ONLY on your device</strong> using local storage. This
								data never leaves your device and is not transmitted to our
								servers or any third party:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
								<li>
									<strong>Favorite Hymns:</strong> Your bookmarked or favorited
									hymns
								</li>
								<li>
									<strong>Text Size Preferences:</strong> Font size settings for
									reading hymns
								</li>
								<li>
									<strong>Hymn Data Cache:</strong> Downloaded hymn content for
									offline access
								</li>
								<li>
									<strong>Last Update Timestamps:</strong> When hymns were last
									updated
								</li>
								<li>
									<strong>Ad Display Timing:</strong> Last time an ad was shown
									(for frequency control - maximum 1 ad per hour)
								</li>
								<li>
									<strong>Subscription Banner Timing:</strong> When support
									prompts were last shown
								</li>
							</ul>
							<p className="text-gray-700">
								You can delete all this data at any time by clearing the app's
								data through your device settings or by uninstalling the app.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								5. Third-Party Services and Data Collection
							</h2>
							<p className="text-gray-700 mb-4">
								While we don't collect personal information ourselves,
								Watchman's Hymnal uses the following third-party services that
								may collect certain data:
							</p>

							<div className="mb-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									A. Google AdMob (Advertising)
								</h3>
								<p className="text-gray-700 mb-3">
									<strong>Purpose:</strong> Display interstitial ads to support
									app operations (the app is free to use with ads).
								</p>
								<p className="text-gray-700 mb-3">
									<strong>Data Collected by Google AdMob:</strong>
								</p>
								<ul className="list-disc pl-6 space-y-2 text-gray-700 mb-3">
									<li>
										Device advertising identifier (IDFA on iOS, AAID on Android)
									</li>
									<li>IP address</li>
									<li>Device information (brand, model, operating system)</li>
									<li>App usage data</li>
									<li>Ad interaction data</li>
								</ul>
								<p className="text-gray-700 mb-3">
									<strong>Child Safety Measures:</strong> We have configured
									child-friendly ad settings:
								</p>
								<ul className="list-disc pl-6 space-y-2 text-gray-700 mb-3">
									<li>Maximum ad rating: PG (Parental Guidance)</li>
									<li>Tagged for child-directed treatment (COPPA compliant)</li>
									<li>Tagged for users under age of consent</li>
								</ul>
								<p className="text-gray-700 mb-3">
									<strong>iOS Tracking:</strong> On iOS devices, we request App
									Tracking Transparency (ATT) permission with the message: "This
									identifier will be used to deliver personalized ads to you."
									You can decline this permission and still use the app, but ads
									may be less relevant to you.
								</p>
								<p className="text-gray-700 mb-3">
									<strong>Ad Frequency:</strong> Maximum 1 ad per hour to avoid
									disrupting your worship experience.
								</p>
								<p className="text-gray-700">
									<strong>Google's Privacy Policy:</strong>{" "}
									<a
										href="https://policies.google.com/privacy"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:underline"
									>
										https://policies.google.com/privacy
									</a>
								</p>
							</div>

							<div className="mb-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									B. RevenueCat (In-App Purchases)
								</h3>
								<p className="text-gray-700 mb-3">
									<strong>Purpose:</strong> Process in-app purchases and
									subscriptions for users who choose to support the app.
								</p>
								<p className="text-gray-700 mb-3">
									<strong>Data Collected:</strong> Transaction data, purchase
									history, and device identifiers necessary for managing
									subscriptions.
								</p>
								<p className="text-gray-700 mb-3">
									<strong>Products Offered:</strong>
								</p>
								<ul className="list-disc pl-6 space-y-2 text-gray-700 mb-3">
									<li>"Remove Ads Forever" (one-time purchase, lifetime)</li>
									<li>"Yearly Supporter Plan" (annual subscription)</li>
								</ul>
								<p className="text-gray-700 mb-3">
									<strong>Note:</strong> Purchases are completely optional. You
									can use the app completely free with ads.
								</p>
								<p className="text-gray-700">
									<strong>RevenueCat's Privacy Policy:</strong>{" "}
									<a
										href="https://www.revenuecat.com/privacy"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:underline"
									>
										https://www.revenuecat.com/privacy
									</a>
								</p>
							</div>

							<div className="mb-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									C. Google Sheets (Bug Reports)
								</h3>
								<p className="text-gray-700 mb-3">
									<strong>Purpose:</strong> Collect bug and error reports when
									users voluntarily submit feedback through the in-app report
									feature.
								</p>
								<p className="text-gray-700 mb-3">
									<strong>
										Data Collected (ONLY when you submit a report):
									</strong>
								</p>
								<ul className="list-disc pl-6 space-y-2 text-gray-700 mb-3">
									<li>Hymn version number</li>
									<li>Hymn number and title</li>
									<li>
										Issue type selected (incorrect lyrics, spelling mistakes,
										wrong attribution, wrong number, missing content, formatting
										issues, or other)
									</li>
									<li>
										Optional description provided by you (minimum 10 characters
										if provided)
									</li>
									<li>Device brand and model (e.g., "Apple iPhone 14")</li>
									<li>Timestamp of report</li>
								</ul>
								<p className="text-gray-700">
									<strong>Important:</strong> Bug reports are completely
									voluntary. This data is only sent when you explicitly submit a
									report through the feedback form. We use this information to
									improve hymn accuracy and fix errors.
								</p>
							</div>

							<div className="mb-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									D. GitHub (Content Delivery)
								</h3>
								<p className="text-gray-700 mb-3">
									<strong>Purpose:</strong> Fetch hymn content from our public
									GitHub repository.
								</p>
								<p className="text-gray-700 mb-3">
									<strong>Data Source:</strong>{" "}
									<a
										href="https://raw.githubusercontent.com/h1rdr3v2/watchman-hymns-json/main/hymns.json"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:underline break-all"
									>
										https://raw.githubusercontent.com/h1rdr3v2/watchman-hymns-json/main/hymns.json
									</a>
								</p>
								<p className="text-gray-700 mb-3">
									<strong>Updates:</strong> The app checks for hymn updates
									every 24 hours to ensure you have the latest content.
								</p>
								<p className="text-gray-700">
									<strong>No Personal Data Sent:</strong> Only standard HTTP
									requests to fetch public JSON data. No personal information is
									transmitted.
								</p>
							</div>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								6. Permissions Required
							</h2>
							<div className="mb-4">
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									iOS Permissions:
								</h3>
								<ul className="list-disc pl-6 space-y-2 text-gray-700">
									<li>
										<strong>App Tracking Transparency:</strong> For personalized
										ads (optional - you can decline and still use the app)
									</li>
									<li>
										<strong>Internet Access:</strong> To download hymn updates
										and display ads
									</li>
								</ul>
							</div>
							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									Android Permissions:
								</h3>
								<ul className="list-disc pl-6 space-y-2 text-gray-700">
									<li>
										<strong>Internet Access:</strong> To download hymn updates
										and display ads
									</li>
									<li>
										<strong>Network State:</strong> To check connectivity before
										loading content
									</li>
								</ul>
							</div>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								7. Age Restrictions and COPPA Compliance
							</h2>
							<p className="text-gray-700 mb-4">
								Watchman's Hymnal is designed for a general audience of all
								ages, including children and the elderly:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
								<li>
									<strong>No Minimum Age Requirement:</strong> The app is
									accessible to anyone who can read hymns
								</li>
								<li>
									<strong>Target Audience:</strong> General audience (all ages)
								</li>
								<li>
									<strong>COPPA Compliant:</strong> We have configured
									child-directed ad treatment to protect children's privacy
								</li>
								<li>
									<strong>Family-Friendly:</strong> All content is appropriate
									for all ages
								</li>
								<li>
									<strong>No Age Verification:</strong> Not required since we
									don't collect personal information
								</li>
								<li>
									<strong>No Accounts/Registration:</strong> No personal
									information collection at any age
								</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								8. Data Security
							</h2>
							<p className="text-gray-700 mb-4">
								We take data security seriously:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
								<li>
									<strong>Local Storage Only:</strong> User data (favorites,
									preferences) is stored only on your device
								</li>
								<li>
									<strong>No Servers:</strong> We don't operate servers that
									store user data
								</li>
								<li>
									<strong>HTTPS:</strong> All network requests use secure HTTPS
									connections
								</li>
								<li>
									<strong>Third-Party Security:</strong> Our third-party
									services (Google, RevenueCat) implement industry-standard
									security measures
								</li>
							</ul>
							<p className="text-gray-700">
								Since we don't collect or transmit personal information, there
								is minimal risk to your privacy when using Watchman's Hymnal.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								9. Your Rights and Choices
							</h2>
							<p className="text-gray-700 mb-4">
								You have the following rights and options:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
								<li>
									<strong>Opt-Out of Personalized Ads:</strong> On iOS, decline
									the ATT permission. On Android, adjust ad settings in your
									device settings.
								</li>
								<li>
									<strong>Delete Local Data:</strong> Clear app data through
									your device settings or uninstall the app to remove all
									locally stored information.
								</li>
								<li>
									<strong>Remove Ads:</strong> Purchase the "Remove Ads Forever"
									option to stop seeing ads entirely.
								</li>
								<li>
									<strong>Report Issues:</strong> Contact us at{" "}
									<a
										href="mailto:support@bleon.co"
										className="text-blue-600 hover:underline"
									>
										support@bleon.co
									</a>{" "}
									for any privacy concerns.
								</li>
								<li>
									<strong>Purchase Refunds:</strong> Handled through Apple App
									Store or Google Play Store policies.
								</li>
							</ul>
							<p className="text-gray-700">
								Under the Nigerian Data Protection Regulation (NDPR), you have
								rights regarding your personal data. However, since we don't
								collect personal data, most of these rights don't apply to our
								app.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								10. Data Retention
							</h2>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>
									<strong>Local Data:</strong> Retained on your device until you
									uninstall the app or clear app data
								</li>
								<li>
									<strong>Bug Reports:</strong> Stored indefinitely in Google
									Sheets for quality improvement purposes
								</li>
								<li>
									<strong>No Personal Data Retention:</strong> Since we don't
									collect personal information, we don't retain it
								</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								11. Content Disclaimer
							</h2>
							<p className="text-gray-700 mb-4">
								<strong>Important Notice:</strong> We are a content aggregator
								and curator:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
								<li>
									<strong>We DO NOT own the hymns:</strong> The hymns, lyrics,
									and music are believed to be in the public domain or belong to
									their original authors and composers
								</li>
								<li>
									<strong>We DO NOT own icons/images:</strong> Icons and images
									used in the app are believed to be from the public domain,
									third-party sources, or open-source libraries
								</li>
								<li>
									<strong>No Guarantee of Ownership Verification:</strong> While
									we believe content is in the public domain, we have not
									conducted exhaustive copyright verification
								</li>
							</ul>
							<p className="text-gray-700">
								If you believe any content infringes your copyright, please
								contact us at{" "}
								<a
									href="mailto:support@bleon.co"
									className="text-blue-600 hover:underline"
								>
									support@bleon.co
								</a>
								.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								12. Changes to This Privacy Policy
							</h2>
							<p className="text-gray-700 mb-4">
								We may update this Privacy Policy from time to time to reflect
								changes in our practices or for legal, operational, or
								regulatory reasons. When we make material changes, we will:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
								<li>
									Update the "Last Updated" date at the top of this policy
								</li>
								<li>Notify you through app updates or in-app notices</li>
								<li>Post the updated policy on our website at this URL</li>
							</ul>
							<p className="text-gray-700">
								We encourage you to review this Privacy Policy periodically.
								Your continued use of Watchman's Hymnal after changes are posted
								constitutes your acceptance of the updated policy.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								13. Compliance with Nigerian Data Protection Regulation (NDPR)
							</h2>
							<p className="text-gray-700 mb-4">
								As a Nigerian company, Bleon Co Ltd is committed to compliance
								with the Nigerian Data Protection Regulation (NDPR) and
								applicable Nigerian data protection laws.
							</p>
							<p className="text-gray-700">
								Since Watchman's Hymnal does not collect personal data, most
								NDPR requirements do not apply. However, we remain committed to
								protecting user privacy and ensuring transparency in our
								operations.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								14. International Users
							</h2>
							<p className="text-gray-700">
								While Watchman's Hymnal is operated from Nigeria, it is
								available to users worldwide. Please note that data collected by
								third-party services (Google AdMob, RevenueCat) may be
								transferred to and processed in countries outside Nigeria. These
								third parties are responsible for their own data handling
								practices as described in their respective privacy policies.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								15. Contact Us
							</h2>
							<p className="text-gray-700 mb-4">
								If you have any questions, concerns, or requests regarding this
								Privacy Policy or our privacy practices, please contact us:
							</p>
							<div className="bg-gray-50 p-4 rounded-lg">
								<p className="text-gray-700 mb-2">
									<strong>Email:</strong>{" "}
									<a
										href="mailto:support@bleon.co"
										className="text-blue-600 hover:underline"
									>
										support@bleon.co
									</a>
								</p>
								<p className="text-gray-700 mb-2">
									<strong>Company:</strong> Bleon Co Ltd
								</p>
								<p className="text-gray-700">
									<strong>Address:</strong> Abia State, Nigeria
								</p>
							</div>
							<p className="text-gray-700 mt-4">
								We will respond to your inquiries within a reasonable timeframe,
								typically within 7-14 business days.
							</p>
						</section>

						<div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
							<p className="text-gray-700 font-semibold">
								Thank you for trusting Watchman's Hymnal for your worship and
								devotional needs. We are committed to providing a
								privacy-friendly experience that helps you connect with God
								through spiritual songs and hymns.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
