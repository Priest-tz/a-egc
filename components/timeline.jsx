"use client";
import { useRef, useEffect, useState } from "react";

export default function Timeline() {
	const timelineRef = useRef(null);
	const [activeSection, setActiveSection] = useState(null);
	const sectionRefs = useRef([]);

	// Company sections data based on provided content
	const sections = [
		{
			id: "about",
			title: "Who We Are",
			content:
				"All-Encompassing Global Consult Limited is a premier consultancy firm dedicated to business transformation, regulatory strategy, and investment facilitation. We bring extensive experience in navigating complex markets and delivering customized solutions for organizations aiming to expand, optimize, and scale their operations. With a global outlook and deep industry insights, we bridge the gap between opportunities and execution, helping our clients achieve long-term success.",
		},
		{
			id: "services",
			title: "Our Services",
			subsections: [
				{
					id: "business-strategy",
					title: "1. Business Strategy & Growth Consulting",
					items: [
						"Comprehensive market analysis & feasibility studies",
						"Business expansion & scaling strategies",
						"Competitive positioning & risk management",
					],
				},
				{
					id: "government-advisory",
					title: "2. Government & Regulatory Advisory",
					items: [
						"Regulatory compliance & policy advisory",
						"Government initiatives & public-private partnerships",
						"Policy impact assessments & implementation",
					],
				},
				{
					id: "investment-solutions",
					title: "3. Investment & High-Net-Worth Client Solutions",
					items: [
						"Strategic investment advisory",
						"Private wealth business structuring",
						"High-value investment opportunity identification",
					],
				},
				{
					id: "banking-consulting",
					title: "4. Banking & Financial Consulting",
					items: [
						"Banking regulatory compliance & transformation",
						"Mergers, acquisitions & financial restructuring",
						"Risk assessment & mitigation strategies",
					],
				},
				{
					id: "corporate-solutions",
					title: "5. Corporate & Enterprise Solutions",
					items: [
						"Business process optimization & efficiency strategies",
						"Technology & digital transformation consulting",
						"Change management & executive leadership support",
					],
				},
			],
		},
		{
			id: "why-choose-us",
			title: "Why Choose Us?",
			items: [
				{
					title: "1. Profitability-Driven Approach",
					content:
						"We focus on tangible financial impact, ensuring that every strategy we develop contributes to your bottom line.",
				},
				{
					title: "2. Global & Local Expertise",
					content:
						"Our consultants possess deep industry knowledge and extensive global experience, giving you a competitive edge in any market.",
				},
				{
					title: "3. High-Level Strategic Insights",
					content:
						"We provide top-tier executive advisory services, ensuring that decision-makers receive actionable insights for sustainable growth.",
				},
				{
					title: "4. Tailored Solutions for Maximum Impact",
					content:
						"We customize every engagement to suit your unique business needs, regulatory environment, and financial goals.",
				},
				{
					title: "5. Strong Network & Partnerships",
					content:
						"Our connections with key industry players, regulators, and investors open doors to exclusive opportunities.",
				},
			],
		},
		{
			id: "industries",
			title: "Industries We Serve",
			items: [
				"Banking & Financial Services",
				"Government & Public Sector",
				"High-Net-Worth & Private Investment",
				"Corporate Enterprises",
				"Technology & Digital Transformation",
				"Real Estate & Infrastructure",
			],
		},
	];

	useEffect(() => {
		// Initialize section refs
		sectionRefs.current = sectionRefs.current.slice(0, sections.length);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				rootMargin: "-20% 0px -70% 0px",
				threshold: 0.1,
			}
		);

		// Observe all section elements
		sectionRefs.current.forEach((ref) => {
			if (ref) observer.observe(ref);
		});

		return () => {
			sectionRefs.current.forEach((ref) => {
				if (ref) observer.unobserve(ref);
			});
		};
	}, [sections.length]);

	// Smooth scroll to section
	const scrollToSection = (id) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	return (
		<div className="relative mt-12 border-b border-gray-200">
			{/* Timeline navigation */}
			<div className="sticky top-0 z-10 bg-gradient-to-r from-blue-50 to-purple-50 border-b hidden md:flex">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<nav className="flex space-x-8 overflow-x-auto no-scrollbar">
						{sections.map((section) => (
							<button
								key={section.id}
								onClick={() => scrollToSection(section.id)}
								className={`whitespace-nowrap py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 ${
									activeSection === section.id
										? "bg-blue-600 text-white shadow-lg"
										: "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600"
								}`}>
								{section.title}
							</button>
						))}
					</nav>
				</div>
			</div>

			{/* Main timeline content */}
			<div
				className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
				ref={timelineRef}>
				<div className="relative">
					{/* Timeline scroll beam */}
					<div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 to-purple-200">
						<div
							className="absolute w-1 bg-gradient-to-b from-blue-500 via-purple-600 to-[#4492d7] transition-all duration-500 ease-in-out"
							style={{
								top: "0",
								height: activeSection
									? `${
											((sections.findIndex(
												(s) => s.id === activeSection
											) +
												1) /
												sections.length) *
											100
									  }%`
									: "0%",
							}}
						/>
					</div>

					{/* Timeline content */}
					<div className="space-y-24 pl-8">
						{sections.map((section, idx) => (
							<div
								key={section.id}
								id={section.id}
								ref={(el) => (sectionRefs.current[idx] = el)}
								className="relative">
								{/* Timeline node */}
								<div
									className={`absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-white transition-all duration-300 ${
										activeSection === section.id
											? "bg-gradient-to-br from-blue-500 to-purple-500 scale-125"
											: "bg-gray-300"
									}`}
								/>

								{/* Section content */}
								<div>
									<h2 className="text-2xl font-bold text-gray-900 mb-4">
										{section.title}
									</h2>

									{section.content && (
										<p className="text-gray-700 mb-6 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-sm">
											{section.content}
										</p>
									)}

									{section.subsections && (
										<div className="space-y-8">
											{section.subsections.map(
												(subsection) => (
													<div
														key={subsection.id}
														className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
														<h3 className="text-xl font-semibold text-gray-800 mb-4">
															{subsection.title}
														</h3>
														{subsection.items && (
															<ul className="space-y-2">
																{subsection.items.map(
																	(
																		item,
																		i
																	) => (
																		<li
																			key={
																				i
																			}
																			className="flex items-start">
																			<span className="text-blue-500 mr-2">
																				•
																			</span>
																			<span className="text-gray-600">
																				{
																					item
																				}
																			</span>
																		</li>
																	)
																)}
															</ul>
														)}
													</div>
												)
											)}
										</div>
									)}

									{section.items &&
										!section.subsections &&
										Array.isArray(section.items) &&
										typeof section.items[0] ===
											"string" && (
											<ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
												{section.items.map(
													(item, i) => (
														<li
															key={i}
															className="flex items-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
															<span className="text-blue-500 mr-2">
																•
															</span>
															<span className="text-gray-600">
																{item}
															</span>
														</li>
													)
												)}
											</ul>
										)}

									{section.items &&
										!section.subsections &&
										Array.isArray(section.items) &&
										typeof section.items[0] ===
											"object" && (
											<div className="space-y-4">
												{section.items.map(
													(item, i) => (
														<div
															key={i}
															className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
															<h3 className="text-lg font-semibold text-gray-800 mb-2">
																{item.title}
															</h3>
															<p className="text-gray-600">
																{item.content}
															</p>
														</div>
													)
												)}
											</div>
										)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* Call-to-Action Section */}
			<div className="mb-16 bg-blue-900 text-white shadow-lg rounded-lg overflow-hidden p-8 text-center">
				<h2 className="text-3xl font-bold mb-6">
					Ready to Transform Your Business?
				</h2>
				<p className="text-lg mb-8">
					Partner with us for expert guidance and strategies that
					drive growth and success.
				</p>
				<div className="flex flex-col md:flex-row justify-center items-center gap-4">
					<button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
						Contact Us
					</button>
					<button className="bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
						Get Your Free Consultation
					</button>
				</div>
			</div>
		</div>
	);
}
