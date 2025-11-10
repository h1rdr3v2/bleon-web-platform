import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Terms of Service | Watchman's Hymnal - Bleon Co LTD",
	description:
		"Terms of Service for Watchman's Hymnal mobile application - Read the terms and conditions for using our app.",
}

export default function WatchmanHymnalTermsOfService() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						Terms of Service
					</h1>
					<p className="text-sm text-gray-600 mb-8">
						Last Updated: November 10, 2025
					</p>

					<div className="prose prose-lg max-w-none">
						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								1. Introduction and Acceptance of Terms
							</h2>
							<p className="text-gray-700 mb-4">
								Welcome to Watchman's Hymnal (also referred to as "Watchmans
								Hymns"), a mobile application operated by Bleon Co Ltd ("we,"
								"us," "our," or "Company"). These Terms of Service ("Terms")
								govern your access to and use of the Watchman's Hymnal mobile
								application (the "App") available on iOS and Android platforms.
							</p>
							<p className="text-gray-700 mb-4">
								By downloading, installing, accessing, or using the App, you
								("user," "you," or "your") acknowledge that you have read,
								understood, and agree to be bound by these Terms and our Privacy
								Policy. If you do not agree to these Terms, you must not use the
								App.
							</p>
							<p className="text-gray-700">
								<strong>Contact Information:</strong>
							</p>
							<div className="bg-gray-50 p-4 rounded-lg mt-2">
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
								2. Description of Service
							</h2>
							<p className="text-gray-700 mb-4">
								Watchman's Hymnal is a free mobile application that provides
								access to a collection of spiritual songs and hymns for worship
								and personal devotion. The App's primary purpose is to make
								hymns accessible to believers worldwide.
							</p>
							<p className="text-gray-700 mb-4">
								<strong>Key Features:</strong>
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
								<li>
									<strong>Browse Hymns:</strong> Access to 300+ spiritual songs
									and hymns
								</li>
								<li>
									<strong>Search Functionality:</strong> Find hymns by title,
									number, or keywords
								</li>
								<li>
									<strong>Favorites:</strong> Bookmark favorite hymns (stored
									locally on your device)
								</li>
								<li>
									<strong>Offline Mode:</strong> Access downloaded hymns without
									internet connection
								</li>
								<li>
									<strong>Dark Mode:</strong> Automatic dark/light theme support
								</li>
								<li>
									<strong>Text Size Adjustment:</strong> Customize font size for
									reading
								</li>
								<li>
									<strong>Categories:</strong> Browse hymns by category
								</li>
								<li>
									<strong>Report Issues:</strong> Submit feedback about errors
									in hymn content
								</li>
								<li>
									<strong>Haptic Feedback:</strong> Tactile feedback on
									interactions (iOS)
								</li>
							</ul>
							<p className="text-gray-700">
								The App is provided free of charge and supported by optional
								in-app advertisements and voluntary purchases.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								3. Acceptable Use
							</h2>
							<p className="text-gray-700 mb-4">
								Watchman's Hymnal is intended for religious, worship, and
								devotional purposes. By using the App, you agree to:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
								<li>Use the App only for lawful purposes</li>
								<li>
									Use the App in a manner consistent with its intended purpose
									(worship and spiritual devotion)
								</li>
								<li>Respect the intellectual property rights of others</li>
								<li>
									Not attempt to reverse engineer, decompile, or disassemble the
									App
								</li>
								<li>
									Not use the App in any way that could damage, disable,
									overburden, or impair our services
								</li>
								<li>
									Not attempt to gain unauthorized access to any part of the App
									or related systems
								</li>
								<li>
									Not use automated systems (bots, scrapers) to access the App
								</li>
								<li>
									Not copy, reproduce, distribute, or create derivative works
									from the App without permission
								</li>
							</ul>
							<p className="text-gray-700">
								<strong>Prohibited Activities:</strong> You may not use the App
								to engage in any activity that is illegal, harmful, threatening,
								abusive, harassing, defamatory, vulgar, obscene, or otherwise
								objectionable.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								4. Content Ownership and Intellectual Property
							</h2>

							<div className="mb-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									4.1 Hymn Content - Public Domain Disclaimer
								</h3>
								<p className="text-gray-700 mb-3">
									<strong>IMPORTANT NOTICE:</strong> We are a content aggregator
									and curator providing free access to religious hymn content.
								</p>
								<ul className="list-disc pl-6 space-y-2 text-gray-700 mb-3">
									<li>
										<strong>WE DO NOT OWN THE HYMNS:</strong> The hymns, lyrics,
										melodies, and music contained in the App are believed to be
										in the public domain or belong to their original authors,
										composers, and copyright holders.
									</li>
									<li>
										<strong>WE DO NOT OWN ICONS/IMAGES:</strong> Icons, images,
										and graphics used in the App are believed to be from the
										public domain, third-party sources, or open-source
										libraries.
									</li>
									<li>
										<strong>NO GUARANTEE OF OWNERSHIP VERIFICATION:</strong>{" "}
										While we believe the content is in the public domain, we
										have not conducted exhaustive copyright verification for
										every hymn.
									</li>
									<li>
										<strong>NO WARRANTY OF ACCURACY:</strong> We make reasonable
										efforts to ensure accuracy but do not guarantee error-free
										content. Hymns are provided "as-is" for worship and
										devotional purposes.
									</li>
								</ul>
							</div>

							<div className="mb-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									4.2 App Code and Design
								</h3>
								<p className="text-gray-700">
									The App's source code, user interface design, features,
									functionality, and compilation (excluding hymn content) are
									owned by Bleon Co Ltd and protected by copyright, trademark,
									and other intellectual property laws of Nigeria and
									international treaties.
								</p>
							</div>

							<div className="mb-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									4.3 Copyright Infringement Claims
								</h3>
								<p className="text-gray-700 mb-3">
									If you believe that any content in the App infringes your
									copyright or intellectual property rights, please contact us
									immediately:
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
									<p className="text-gray-700">
										<strong>Subject:</strong> Copyright Infringement Claim -
										Watchman's Hymnal
									</p>
								</div>
								<p className="text-gray-700 mt-3">
									Please provide: (1) identification of the copyrighted work,
									(2) identification of the infringing material in the App, (3)
									your contact information, (4) a statement of good faith belief
									that use is not authorized, and (5) a statement that the
									information is accurate and you are authorized to act on
									behalf of the copyright owner.
								</p>
								<p className="text-gray-700 mt-3">
									<strong>
										We will investigate claims promptly and remove infringing
										content if verified.
									</strong>
								</p>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									4.4 User Submissions (Bug Reports)
								</h3>
								<p className="text-gray-700">
									When you submit bug reports or feedback through the App, you
									grant us a non-exclusive, worldwide, royalty-free license to
									use, reproduce, and incorporate such feedback for the purpose
									of improving the App. We may use your feedback without
									attribution or compensation.
								</p>
							</div>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								5. Monetization and Purchases
							</h2>

							<div className="mb-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									5.1 Free App with Advertisements
								</h3>
								<p className="text-gray-700 mb-3">
									Watchman's Hymnal is free to download and use. The App is
									supported by advertisements provided by Google AdMob:
								</p>
								<ul className="list-disc pl-6 space-y-2 text-gray-700">
									<li>Interstitial ads displayed at appropriate intervals</li>
									<li>Maximum ad frequency: 1 ad per hour</li>
									<li>
										Child-friendly ad settings (PG rating, COPPA compliant)
									</li>
									<li>
										Ads may be personalized based on your advertising identifier
										(subject to your device permissions)
									</li>
								</ul>
							</div>

							<div className="mb-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									5.2 Optional In-App Purchases
								</h3>
								<p className="text-gray-700 mb-3">
									You may choose to support the App through optional purchases:
								</p>
								<ul className="list-disc pl-6 space-y-2 text-gray-700 mb-3">
									<li>
										<strong>"Remove Ads Forever":</strong> One-time purchase for
										lifetime ad removal
									</li>
									<li>
										<strong>"Yearly Supporter Plan":</strong> Annual
										subscription to support ongoing development
									</li>
								</ul>
								<p className="text-gray-700 mb-3">
									<strong>Important:</strong> Purchases are completely optional.
									You can use the App's full functionality with ads at no cost.
								</p>
							</div>

							<div className="mb-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									5.3 Payment Processing
								</h3>
								<p className="text-gray-700 mb-3">
									All purchases are processed through:
								</p>
								<ul className="list-disc pl-6 space-y-2 text-gray-700">
									<li>
										<strong>Apple App Store</strong> (for iOS devices) - subject
										to Apple's terms and conditions
									</li>
									<li>
										<strong>Google Play Store</strong> (for Android devices) -
										subject to Google's terms and conditions
									</li>
								</ul>
								<p className="text-gray-700 mt-3">
									We use RevenueCat to manage subscriptions and purchases. We do
									not directly process or store payment information.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									5.4 Refunds
								</h3>
								<p className="text-gray-700">
									Refund requests are subject to the policies of Apple App Store
									or Google Play Store. We do not control refund decisions. To
									request a refund, contact Apple or Google directly through
									your respective app store account. For assistance with refund
									requests, you may contact us at{" "}
									<a
										href="mailto:support@bleon.co"
										className="text-blue-600 hover:underline"
									>
										support@bleon.co
									</a>
									.
								</p>
							</div>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								6. Age Requirements and Family-Friendly Use
							</h2>
							<p className="text-gray-700 mb-4">
								Watchman's Hymnal is designed for a general audience of all
								ages:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
								<li>
									<strong>No Minimum Age Requirement:</strong> The App is
									accessible to anyone who can read hymns, including children
									and the elderly
								</li>
								<li>
									<strong>Family-Friendly Content:</strong> All hymn content is
									appropriate for all ages
								</li>
								<li>
									<strong>COPPA Compliant:</strong> We have implemented
									child-directed ad treatment to protect children's privacy
								</li>
								<li>
									<strong>No Registration Required:</strong> The App does not
									require account creation or personal information
								</li>
							</ul>
							<p className="text-gray-700">
								<strong>Parental Guidance:</strong> While the App is
								family-friendly, we recommend that parents or guardians
								supervise children's use of mobile devices and manage any in-app
								purchase permissions through device parental controls.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								7. Third-Party Services
							</h2>
							<p className="text-gray-700 mb-4">
								The App integrates with the following third-party services:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
								<li>
									<strong>Google AdMob:</strong> For displaying advertisements (
									<a
										href="https://policies.google.com/privacy"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:underline"
									>
										Privacy Policy
									</a>
									)
								</li>
								<li>
									<strong>RevenueCat:</strong> For managing in-app purchases (
									<a
										href="https://www.revenuecat.com/privacy"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:underline"
									>
										Privacy Policy
									</a>
									)
								</li>
								<li>
									<strong>GitHub:</strong> For fetching hymn content updates
									from our public repository
								</li>
								<li>
									<strong>Google Sheets:</strong> For collecting voluntary bug
									reports (via Google Apps Script)
								</li>
							</ul>
							<p className="text-gray-700">
								<strong>Disclaimer:</strong> We are not responsible for the
								practices, policies, or content of these third-party services.
								Your use of these services is subject to their respective terms
								and privacy policies. We encourage you to review them.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								8. Privacy and Data Protection
							</h2>
							<p className="text-gray-700 mb-4">
								Your privacy is important to us. Our Privacy Policy explains how
								we handle information in the App. Key points:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
								<li>
									<strong>We DO NOT collect personal information</strong> such
									as names, email addresses, or phone numbers
								</li>
								<li>
									<strong>Local data only:</strong> Your favorites and
									preferences are stored only on your device
								</li>
								<li>
									<strong>Third-party data collection:</strong> Google AdMob and
									RevenueCat may collect certain data as described in our
									Privacy Policy
								</li>
								<li>
									<strong>NDPR Compliance:</strong> We comply with the Nigerian
									Data Protection Regulation
								</li>
							</ul>
							<p className="text-gray-700">
								Please read our full{" "}
								<a
									href="/watchman-hymnal/policies/privacy"
									className="text-blue-600 hover:underline"
								>
									Privacy Policy
								</a>{" "}
								for complete details.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								9. Disclaimers and Warranties
							</h2>

							<div className="mb-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									9.1 "AS-IS" Disclaimer
								</h3>
								<p className="text-gray-700 mb-3">
									<strong>
										THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
										WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
									</strong>
								</p>
								<p className="text-gray-700">
									To the fullest extent permitted by law, Bleon Co Ltd disclaims
									all warranties, express or implied, including but not limited
									to:
								</p>
								<ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
									<li>Warranties of merchantability</li>
									<li>Fitness for a particular purpose</li>
									<li>Non-infringement of intellectual property rights</li>
									<li>
										Accuracy, completeness, or reliability of hymn content
									</li>
									<li>Uninterrupted or error-free operation</li>
									<li>Security of data transmission</li>
								</ul>
							</div>

							<div className="mb-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									9.2 Content Accuracy Disclaimer
								</h3>
								<p className="text-gray-700">
									While we make reasonable efforts to ensure the accuracy of
									hymn lyrics, attributions, and numbering, we do not warrant
									that all content is error-free. Hymns are provided for worship
									and devotional purposes. Users can report errors through the
									App's feedback feature, which we will investigate and correct
									when verified.
								</p>
							</div>

							<div className="mb-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									9.3 Availability Disclaimer
								</h3>
								<p className="text-gray-700">
									We do not guarantee that the App will be available at all
									times. The App may be temporarily unavailable due to
									maintenance, updates, technical issues, or circumstances
									beyond our control. We reserve the right to modify, suspend,
									or discontinue the App (in whole or in part) at any time
									without prior notice.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									9.4 Third-Party Services Disclaimer
								</h3>
								<p className="text-gray-700">
									We are not responsible for issues, errors, or downtime caused
									by third-party services (Google AdMob, RevenueCat, GitHub,
									Google Sheets, Apple App Store, Google Play Store). Your use
									of these services is at your own risk.
								</p>
							</div>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								10. Limitation of Liability
							</h2>
							<p className="text-gray-700 mb-4">
								<strong>
									TO THE MAXIMUM EXTENT PERMITTED BY NIGERIAN LAW, BLEON CO LTD,
									ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, AND AFFILIATES
									SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING FROM YOUR USE OF
									THE APP.
								</strong>
							</p>
							<p className="text-gray-700 mb-4">
								This includes but is not limited to:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
								<li>
									Direct, indirect, incidental, consequential, or punitive
									damages
								</li>
								<li>
									Loss of profits, revenue, data, or business opportunities
								</li>
								<li>
									Personal injury or property damage related to your use of the
									App
								</li>
								<li>Errors, inaccuracies, or omissions in hymn content</li>
								<li>
									Intellectual property infringement claims related to hymn
									content
								</li>
								<li>
									Unauthorized access to or alteration of your device or data
								</li>
								<li>
									Third-party conduct or content (advertisements, external
									links, etc.)
								</li>
								<li>
									Any issues arising from third-party services (AdMob,
									RevenueCat, etc.)
								</li>
							</ul>
							<p className="text-gray-700">
								<strong>
									IF YOU ARE DISSATISFIED WITH THE APP, YOUR SOLE REMEDY IS TO
									STOP USING THE APP AND UNINSTALL IT.
								</strong>
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								11. Indemnification
							</h2>
							<p className="text-gray-700 mb-4">
								You agree to indemnify, defend, and hold harmless Bleon Co Ltd,
								its directors, officers, employees, agents, and affiliates from
								and against any and all claims, liabilities, damages, losses,
								costs, expenses, or fees (including reasonable attorneys' fees)
								arising from:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Your use or misuse of the App</li>
								<li>Your violation of these Terms</li>
								<li>
									Your violation of any rights of another person or entity
								</li>
								<li>
									Your violation of any applicable laws or regulations in
									Nigeria or your jurisdiction
								</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								12. Termination
							</h2>

							<div className="mb-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									12.1 Termination by You
								</h3>
								<p className="text-gray-700">
									You may stop using the App at any time by uninstalling it from
									your device. Uninstalling the App will delete all locally
									stored data (favorites, preferences, cached hymns).
								</p>
							</div>

							<div className="mb-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									12.2 Termination by Us
								</h3>
								<p className="text-gray-700">
									We reserve the right to suspend or terminate your access to
									the App at any time, without notice, for any reason, including
									but not limited to:
								</p>
								<ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
									<li>Violation of these Terms</li>
									<li>Fraudulent, abusive, or illegal activity</li>
									<li>Requests by law enforcement or government authorities</li>
									<li>
										Technical or security issues that require immediate action
									</li>
									<li>Discontinuation of the App</li>
								</ul>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									12.3 Effect of Termination
								</h3>
								<p className="text-gray-700">
									Upon termination, your right to use the App will immediately
									cease. Sections of these Terms that by their nature should
									survive termination (including disclaimers, limitations of
									liability, indemnification, and dispute resolution) will
									survive.
								</p>
							</div>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								13. Governing Law
							</h2>
							<p className="text-gray-700 mb-4">
								These Terms shall be governed by and construed in accordance
								with the laws of the{" "}
								<strong>Federal Republic of Nigeria</strong>, without regard to
								its conflict of law provisions.
							</p>
							<p className="text-gray-700">The App is subject to:</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
								<li>
									<strong>
										Nigerian Data Protection Regulation (NDPR), 2019
									</strong>
								</li>
								<li>
									<strong>
										Nigerian Copyright Act (Cap C28, LFN 2004, as amended)
									</strong>
								</li>
								<li>
									<strong>
										Other applicable Nigerian laws and regulations
									</strong>
								</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								14. Dispute Resolution
							</h2>

							<div className="mb-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									14.1 Informal Resolution (Mandatory First Step)
								</h3>
								<p className="text-gray-700 mb-3">
									Before initiating any formal dispute resolution process, you
									agree to first contact us at{" "}
									<a
										href="mailto:support@bleon.co"
										className="text-blue-600 hover:underline"
									>
										support@bleon.co
									</a>{" "}
									to attempt to resolve the dispute informally.
								</p>
								<p className="text-gray-700">
									We will make good faith efforts to resolve disputes amicably
									within 30 days of receiving your complaint.
								</p>
							</div>

							<div className="mb-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									14.2 Mediation (Mandatory Before Litigation)
								</h3>
								<p className="text-gray-700 mb-3">
									If informal resolution fails, both parties agree to submit the
									dispute to <strong>mediation</strong> before pursuing
									litigation.
								</p>
								<p className="text-gray-700 mb-3">
									<strong>Mediation Terms:</strong>
								</p>
								<ul className="list-disc pl-6 space-y-2 text-gray-700 mb-3">
									<li>
										<strong>Location:</strong> Mediation shall be conducted in
										Abia State, Nigeria (or virtually with mutual consent)
									</li>
									<li>
										<strong>Mediator:</strong> A neutral mediator mutually
										agreed upon by both parties, or appointed by a recognized
										mediation center in Nigeria
									</li>
									<li>
										<strong>Costs:</strong> Mediation costs (including mediator
										fees) shall be shared equally by both parties unless
										otherwise agreed
									</li>
									<li>
										<strong>Timeframe:</strong> Mediation shall be completed
										within 60 days of initiation unless both parties agree to an
										extension
									</li>
									<li>
										<strong>Confidentiality:</strong> Mediation proceedings
										shall be confidential
									</li>
								</ul>
								<p className="text-gray-700">
									<strong>
										Both parties agree to participate in mediation in good
										faith.
									</strong>
								</p>
							</div>

							<div className="mb-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									14.3 Jurisdiction (If Mediation Fails)
								</h3>
								<p className="text-gray-700 mb-3">
									If mediation does not result in a resolution, either party may
									pursue legal remedies in the courts of{" "}
									<strong>Abia State, Nigeria</strong>.
								</p>
								<p className="text-gray-700">
									By using the App, you consent to the exclusive jurisdiction of
									the courts of Abia State, Nigeria for the resolution of any
									disputes arising from or relating to these Terms or your use
									of the App.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									14.4 No Class Actions
								</h3>
								<p className="text-gray-700">
									You agree to bring any disputes on an individual basis only,
									and not as part of a class action, collective action, or
									representative proceeding.
								</p>
							</div>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								15. Changes to These Terms
							</h2>
							<p className="text-gray-700 mb-4">
								We reserve the right to modify or update these Terms at any time
								at our sole discretion. When we make material changes, we will:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
								<li>
									Update the "Last Updated" date at the top of these Terms
								</li>
								<li>
									Notify you through app updates, in-app notices, or by other
									reasonable means
								</li>
								<li>Post the updated Terms on our website</li>
							</ul>
							<p className="text-gray-700 mb-4">
								<strong>
									Your continued use of the App after changes are posted
									constitutes your acceptance of the updated Terms.
								</strong>{" "}
								If you do not agree to the updated Terms, you must stop using
								the App and uninstall it.
							</p>
							<p className="text-gray-700">
								We encourage you to review these Terms periodically to stay
								informed of any updates.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								16. Severability
							</h2>
							<p className="text-gray-700">
								If any provision of these Terms is found to be invalid, illegal,
								or unenforceable by a court of competent jurisdiction, the
								remaining provisions shall continue in full force and effect.
								The invalid provision shall be modified to the minimum extent
								necessary to make it valid and enforceable while preserving its
								original intent.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								17. Entire Agreement
							</h2>
							<p className="text-gray-700">
								These Terms, together with our Privacy Policy, constitute the
								entire agreement between you and Bleon Co Ltd regarding the App
								and supersede all prior or contemporaneous communications,
								agreements, and understandings, whether oral or written.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								18. No Waiver
							</h2>
							<p className="text-gray-700">
								Our failure to enforce any right or provision of these Terms
								shall not constitute a waiver of such right or provision. Any
								waiver must be in writing and signed by an authorized
								representative of Bleon Co Ltd.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								19. Contact Information
							</h2>
							<p className="text-gray-700 mb-4">
								If you have any questions, concerns, or feedback regarding these
								Terms or the App, please contact us:
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
								<p className="text-gray-700 mb-2">
									<strong>Address:</strong> Abia State, Nigeria
								</p>
								<p className="text-gray-700">
									<strong>Response Time:</strong> We typically respond within
									7-14 business days
								</p>
							</div>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-4">
								20. Acknowledgment
							</h2>
							<p className="text-gray-700 mb-4">
								<strong>
									BY DOWNLOADING, INSTALLING, OR USING WATCHMAN'S HYMNAL, YOU
									ACKNOWLEDGE THAT:
								</strong>
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>You have read and understood these Terms</li>
								<li>You agree to be bound by these Terms</li>
								<li>You have read and understood our Privacy Policy</li>
								<li>
									You understand that the App is provided "as-is" without
									warranties
								</li>
								<li>
									You understand that we do not own the hymn content and make no
									guarantees about its accuracy or public domain status
								</li>
								<li>
									You agree to the dispute resolution process (informal
									resolution, then mediation, then litigation in Nigerian
									courts)
								</li>
								<li>
									You understand that purchases are optional and handled by
									Apple or Google
								</li>
							</ul>
						</section>

						<div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
							<p className="text-gray-700 font-semibold mb-2">
								Thank you for using Watchman's Hymnal!
							</p>
							<p className="text-gray-700">
								We are honored to provide this free service to support worship
								and devotion worldwide. May these hymns bring you closer to God
								and enrich your spiritual journey.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
