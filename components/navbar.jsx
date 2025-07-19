"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<nav className="bg-white px-4 py-6">
			<div className="container mx-auto flex justify-between items-center">
				{/* Logo  */}
				<div className="flex items-center gap-2 h-16">
					{" "}
					<div className="flex items-center mr-2">
						{" "}
						<Image
							src="/images/logo.png"
							width={80}
							height={80}
							alt="All-Encompassing Global Consult Logo"
							className="object-fit"
						/>
					</div>
					<span className="text-black text-xl md:text-2xl font-bold">
						ALL-ENCOMPASSING <br/>GLOBAL CONSULT
					</span>
				</div>

				{/* Hamburger Menu Icon for Mobile */}
				<div className="flex md:hidden">
					<button
						onClick={toggleMenu}
						className="text-black focus:outline-none">
						<svg
							className="w-8 h-8"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						</svg>
					</button>
				</div> 

				{/* Desktop Menu*/}
				<div className="hidden md:flex space-x-6">
					<Link
						href="/"
						className="text-black hover:text-black text-xl">
						Home
					</Link>
					<Link
						href="/about"
						className="text-black hover:text-black text-xl">
						Services
					</Link>
					<Link
						href="/about"
						className="text-black hover:text-black text-xl">
						About Us
					</Link>
					<Link
						href="/contact"
						className="text-black hover:text-black text-xl">
						Contact Us
					</Link>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden fixed inset-0 bg-blue-600 z-50">
					<div className="flex flex-col h-full justify-center items-center">
						{/* Close Button */}
						<button
							onClick={closeMenu}
							className="absolute top-4 right-4 text-black focus:outline-none">
							<svg
								className="w-8 h-8"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>

						{/* Navlinks  */}
						<Link
							href="/"
							onClick={closeMenu}
							className="w-full text-center text-black text-2xl py-4 border-b border-white/20 hover:bg-white/10">
							Home
						</Link>
						<Link
							href="/about"
							onClick={closeMenu}
							className="w-full text-center text-black text-2xl py-4 border-b border-white/20 hover:bg-white/10">
							Services
						</Link>
						<Link
							href="/about"
							onClick={closeMenu}
							className="w-full text-center text-black text-2xl py-4 border-b border-white/20 hover:bg-white/10">
							About Us
						</Link>
						<Link
							href="/contact"
							onClick={closeMenu}
							className="w-full text-center text-black text-2xl py-4 border-b border-white/20 hover:bg-white/10">
							Contact Us
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}
