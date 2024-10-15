"use client";
import { Github, Mail, Linkedin, Phone } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Github size={20} />,
		href: "https://github.com/madlamprey",
		label: "Github",
		handle: "MadLamprey",
	},
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/adityamisra04/",
		label: "LinkedIn",
		handle: "adityamisra04",
	},
];

const socials_micro = [
	{
		icon: <Mail size={20} />,
		href: "mailto:aditya.misra@u.nus.edu",
		label: "Email",
		value: "aditya.misra@u.nus.edu"
	},
	{
		icon: <Phone size={20} />,
		href: "tel:+6583815159",
		label: "Phone",
		value: "+65 8381 5159"
	}
]

export default function Example() {
	return (
		<div>
			<div className="container flex flex-col items-center justify-center mx-auto gap-20">
				<Navigation />
				<div className="block center flex flex-col items-center justify-center gap-10">
				<div className="text-zinc-200 text-5xl animate-title my-10">Contact Me!</div>
				<div className="relative grid grid-cols-1 gap-1 sm:mt-0 sm:grid-cols-2 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="flex flex-col items-center p-10 w-full hover:bg-zinc-800 duration-500 animate-fade-in"
							>
								<span className="relative flex items-center justify-center w-12 h-12 text-sm border rounded-full text-zinc-200 border-zinc-500 bg-zinc-900">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium xl:text-3xl text-zinc-200 font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center text-zinc-400 ">
										{s.label}
									</span>
								</div>
								</Link>
						</Card>
					))}
					{socials_micro.map((s) => (
						<Card>
							<span className="flex flex-col items-center w-full hover:bg-zinc-800 duration-500 p-10 animate-fade-in">
							<span className="relative flex items-center justify-center w-12 h-12 text-sm border rounded-full text-zinc-200 border-zinc-500 bg-zinc-900">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
								<span className="lg:text-xl text-center text-zinc-200">
										{s.value}
									</span>
									<span className="mt-4 text-sm text-center text-zinc-400 ">
										{s.label}
									</span>
								</div>
							</span>
							</Card>
					))}
				</div>
				</div>
				</div>
		</div>
	);
}
