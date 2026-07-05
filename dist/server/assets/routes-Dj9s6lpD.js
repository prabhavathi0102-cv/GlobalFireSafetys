import { t as getServerFnById } from "./__23tanstack-start-server-fn-resolver-DAY_0Kr-.js";
import { i as createServerFn, p as TSS_SERVER_FUNCTION } from "./esm-Dova13aH.js";
import * as React from "react";
import { useEffect, useState } from "react";
import { isRedirect, useRouter } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { z } from "zod";
import { ArrowRight, Award, Bot, Building2, CheckCircle2, DoorClosed, Droplets, Flame, HardHat, Home as Home$1, Mail, MapPin, Menu, MessageCircle, Phone, Send, Shield, Siren, Users, Wrench, X } from "lucide-react";
//#region node_modules/@tanstack/react-start/dist/esm/useServerFn.js
function useServerFn(serverFn) {
	const router = useRouter();
	return React.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
//#endregion
//#region node_modules/@tanstack/start-server-core/dist/esm/createSsrRpc.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
//#region src/lib/enquiry.functions.ts
var EnquirySchema = z.object({
	name: z.string().trim().min(1).max(100),
	phone: z.string().trim().min(1).max(40),
	email: z.string().trim().email().max(255),
	company: z.string().trim().max(200).optional().default(""),
	product: z.string().trim().min(1).max(100),
	message: z.string().trim().min(1).max(2e3)
});
var submitEnquiry = createServerFn({ method: "POST" }).inputValidator((data) => EnquirySchema.parse(data)).handler(createSsrRpc("617707e00effff11fe2ad158ad24aa66c3e087d1885e1e35dc054328f3e2b494"));
//#endregion
//#region src/assets/logo.png
var logo_default = "/assets/logo-D5YwWTse.png";
//#endregion
//#region src/components/Navbar.tsx
var nav = [
	{
		label: "Home",
		href: "#home"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Services",
		href: "#services"
	},
	{
		label: "Products",
		href: "#products"
	},
	{
		label: "Clients",
		href: "#clients"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function Navbar() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs("header", {
		className: `fixed top-0 inset-x-0 z-40 transition-all ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "#home",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("img", {
						src: logo_default,
						alt: "GSE Logo",
						className: "h-10 w-10 object-contain"
					}), /* @__PURE__ */ jsxs("div", {
						className: `leading-tight ${scrolled ? "text-foreground" : "text-white"}`,
						children: [/* @__PURE__ */ jsx("div", {
							className: "font-display font-bold text-sm md:text-base",
							children: "GLOBAL SAFETY"
						}), /* @__PURE__ */ jsx("div", {
							className: "text-[10px] md:text-xs tracking-widest text-fire font-semibold",
							children: "ENTERPRISES (P) LTD"
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "hidden lg:flex items-center gap-8",
					children: [nav.map((n) => /* @__PURE__ */ jsx("a", {
						href: n.href,
						className: `text-sm font-medium transition-colors hover:text-fire ${scrolled ? "text-foreground" : "text-white/90"}`,
						children: n.label
					}, n.href)), /* @__PURE__ */ jsxs("a", {
						href: "#contact",
						className: "inline-flex items-center gap-2 gradient-fire text-white px-5 py-2.5 rounded-md text-sm font-semibold shadow-fire hover:opacity-90 transition",
						children: [/* @__PURE__ */ jsx(Flame, { className: "h-4 w-4" }), " Get a Quote"]
					})]
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: () => setOpen(!open),
					className: `lg:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`,
					"aria-label": "Toggle menu",
					children: open ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {})
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "lg:hidden bg-background border-t border-border",
			children: /* @__PURE__ */ jsxs("div", {
				className: "px-4 py-4 flex flex-col gap-1",
				children: [nav.map((n) => /* @__PURE__ */ jsx("a", {
					href: n.href,
					onClick: () => setOpen(false),
					className: "py-3 px-2 text-foreground font-medium border-b border-border last:border-0",
					children: n.label
				}, n.href)), /* @__PURE__ */ jsx("a", {
					href: "#contact",
					onClick: () => setOpen(false),
					className: "mt-3 gradient-fire text-white text-center py-3 rounded-md font-semibold",
					children: "Get a Quote"
				})]
			})
		})]
	});
}
//#endregion
//#region src/components/Footer.tsx
var offices = [
	{
		city: "Chennai",
		addr: "No: 295, MKN Road, Alandur, Chennai, Tamil Nadu 600016"
	},
	{
		city: "Coimbatore",
		addr: "Shop No: 2, Aruksun Arcade, Chinnasamy Road, New Siddhapudur, Coimbatore 641044"
	},
	{
		city: "Tirupur",
		addr: "No 3/2, Govindarajulu Street, Avinashi Road, Tirupur 641602"
	}
];
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "gradient-navy text-white pt-16 pb-8",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-4 gap-10",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 mb-4",
							children: [/* @__PURE__ */ jsx(Flame, { className: "h-6 w-6 text-fire" }), /* @__PURE__ */ jsx("span", {
								className: "font-display font-bold text-lg",
								children: "GSE"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm text-white/70 leading-relaxed",
							children: "Global Safety Enterprises (P) Ltd — Trusted fire protection, detection and safety solutions partner since inception."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-4 flex flex-wrap gap-2 text-[10px]",
							children: [
								"ISO 9001:2015",
								"UL LISTED",
								"LPCB",
								"FM APPROVED",
								"CE"
							].map((b) => /* @__PURE__ */ jsx("span", {
								className: "px-2 py-1 bg-white/10 rounded border border-white/15 font-semibold tracking-wide",
								children: b
							}, b))
						})
					] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "font-semibold mb-4 text-sm uppercase tracking-wider",
						children: "Quick Links"
					}), /* @__PURE__ */ jsx("ul", {
						className: "space-y-2 text-sm text-white/70",
						children: [
							"About",
							"Services",
							"Products",
							"Clients",
							"Contact"
						].map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: `#${l.toLowerCase()}`,
							className: "hover:text-fire transition",
							children: l
						}) }, l))
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "font-semibold mb-4 text-sm uppercase tracking-wider",
						children: "Get in Touch"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "space-y-3 text-sm text-white/80",
						children: [/* @__PURE__ */ jsxs("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-fire shrink-0 mt-0.5" }), /* @__PURE__ */ jsxs("div", { children: [
								"+91 98404 55557",
								/* @__PURE__ */ jsx("br", {}),
								"+91 98404 55558",
								/* @__PURE__ */ jsx("br", {}),
								"+91 421 433 2208"
							] })]
						}), /* @__PURE__ */ jsxs("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-fire shrink-0 mt-0.5" }), /* @__PURE__ */ jsxs("div", { children: [
								"info@globalsafetys.in",
								/* @__PURE__ */ jsx("br", {}),
								"globalsafetyenterprises@gmail.com"
							] })]
						})]
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "font-semibold mb-4 text-sm uppercase tracking-wider",
						children: "Our Offices"
					}), /* @__PURE__ */ jsx("ul", {
						className: "space-y-3 text-sm text-white/70",
						children: offices.map((o) => /* @__PURE__ */ jsxs("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-fire shrink-0 mt-0.5" }), /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-semibold text-white",
									children: o.city
								}),
								/* @__PURE__ */ jsx("br", {}),
								o.addr
							] })]
						}, o.city))
					})] })
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/60",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Global Safety Enterprises (P) Ltd. All rights reserved."
				] }), /* @__PURE__ */ jsx("div", { children: "www.globalsafetys.in" })]
			})]
		})
	});
}
//#endregion
//#region src/components/FloatingActions.tsx
var PHONE = "+919840455557";
var WA_NUMBER = "919840455557";
var WA_MESSAGE = encodeURIComponent("Hello I am interested in your service, Please call me back");
var MAIN_MENU_TEXT = "How can we help you today? Choose an option below or type your question:";
var MENU_OPTIONS = [
	"Fire Extinguishers",
	"Fire Alarm Systems",
	"Hydrant & Sprinkler",
	"AMC & Refilling",
	"Request a Quote",
	"Contact Us"
];
var EXIT_WORDS = [
	"thank you",
	"thanks",
	"goodbye",
	"bye",
	"nothing",
	"fine",
	"okay",
	"ok"
];
function FloatingActions() {
	const [chatOpen, setChatOpen] = useState(false);
	const [messages, setMessages] = useState([{
		from: "bot",
		text: "Hi! Welcome to Global Safety Enterprises."
	}, {
		from: "bot",
		text: MAIN_MENU_TEXT,
		menu: true
	}]);
	const [input, setInput] = useState("");
	const pushBot = (text, menu = false) => setMessages((m) => [...m, {
		from: "bot",
		text,
		menu
	}]);
	const showMainMenu = () => {
		setMessages((m) => [...m, {
			from: "bot",
			text: MAIN_MENU_TEXT,
			menu: true
		}]);
	};
	const handleText = (text) => {
		const lower = text.toLowerCase().trim();
		if (EXIT_WORDS.some((w) => lower === w || lower === w + "." || lower === w + "!")) {
			pushBot("Goodbye, see you later.");
			setTimeout(() => {
				setChatOpen(false);
				setMessages([{
					from: "bot",
					text: "Hi! Welcome to Global Safety Enterprises."
				}, {
					from: "bot",
					text: MAIN_MENU_TEXT,
					menu: true
				}]);
			}, 1200);
			return;
		}
		let reply = "Thanks for reaching out! Our team will get back to you shortly. For immediate help, please call +91 98404 55557 or WhatsApp us.";
		if (lower.includes("extinguisher")) reply = "We supply ABC, CO2, Water, Foam, Clean Agent and Kitchen extinguishers in all capacities. Want a quote?";
		else if (lower.includes("alarm")) reply = "We offer Conventional & Addressable Fire Alarm panels, detectors, sounders and PA systems. Shall we schedule a site visit?";
		else if (lower.includes("hydrant") || lower.includes("sprinkler")) reply = "Our hydrant & sprinkler systems include valves, hose reels, branch pipes, sprinklers and fire brigade inlets — fully installed and maintained.";
		else if (lower.includes("amc") || lower.includes("refill")) reply = "We offer Annual Maintenance Contracts and refilling for all types of fire extinguishers as per IS standards.";
		else if (lower.includes("price") || lower.includes("quote") || lower.includes("cost")) reply = "Please share your location and requirement, or call us at +91 98404 55557 for an instant quote.";
		else if (lower.includes("contact") || lower.includes("address") || lower.includes("location")) reply = "📞 +91 98404 55557\n📧 info@globalsafetyenterprises.in\nOffices in Chennai, Coimbatore & Tirupur.";
		else if (lower.includes("hi") || lower.includes("hello") || lower.includes("hey")) reply = "Hello! Tell us a bit about your facility — industrial, commercial or residential — and what you need.";
		pushBot(reply);
		setTimeout(() => pushBot("🏠 Back to Main Menu", true), 500);
	};
	const send = (override) => {
		const text = (override ?? input).trim();
		if (!text) return;
		setMessages((m) => [...m, {
			from: "user",
			text
		}]);
		setInput("");
		setTimeout(() => handleText(text), 500);
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		className: "fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50 flex flex-col gap-3 items-end",
		children: [
			/* @__PURE__ */ jsx("a", {
				href: `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`,
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": "Chat on WhatsApp",
				className: "h-12 w-12 md:h-14 md:w-14 rounded-full bg-[oklch(0.65_0.17_150)] text-white grid place-items-center shadow-elegant hover:scale-105 transition pulse-ring",
				children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5 md:h-6 md:w-6" })
			}),
			/* @__PURE__ */ jsx("a", {
				href: `tel:${PHONE}`,
				"aria-label": "Call us",
				className: "h-12 w-12 md:h-14 md:w-14 rounded-full bg-navy text-white grid place-items-center shadow-elegant hover:scale-105 transition",
				children: /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5 md:h-6 md:w-6" })
			}),
			/* @__PURE__ */ jsx("button", {
				onClick: () => setChatOpen((v) => !v),
				"aria-label": "Open chatbot",
				className: "h-12 w-12 md:h-14 md:w-14 rounded-full gradient-fire text-white grid place-items-center shadow-fire hover:scale-105 transition",
				children: chatOpen ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Bot, { className: "h-5 w-5 md:h-6 md:w-6" })
			})
		]
	}), chatOpen && /* @__PURE__ */ jsxs("div", {
		className: "fixed right-4 bottom-24 md:right-6 md:bottom-28 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[75vh] flex flex-col bg-card border border-border rounded-xl shadow-elegant overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "gradient-fire text-white px-4 py-3 flex items-center gap-3",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "h-9 w-9 rounded-full bg-white/20 grid place-items-center",
						children: /* @__PURE__ */ jsx(Bot, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ jsx("div", {
							className: "font-semibold text-sm",
							children: "GSE Assistant"
						}), /* @__PURE__ */ jsx("div", {
							className: "text-xs opacity-90",
							children: "Typically replies instantly"
						})]
					}),
					/* @__PURE__ */ jsxs("button", {
						onClick: showMainMenu,
						"aria-label": "Back to main menu",
						className: "text-xs bg-white/15 hover:bg-white/25 transition px-2 py-1 rounded-md flex items-center gap-1",
						children: [/* @__PURE__ */ jsx(Home$1, { className: "h-3.5 w-3.5" }), " Menu"]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex-1 overflow-y-auto p-4 space-y-3 bg-muted/30",
				children: messages.map((m, i) => /* @__PURE__ */ jsxs("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ jsx("div", {
						className: `flex ${m.from === "user" ? "justify-end" : "justify-start"}`,
						children: /* @__PURE__ */ jsx("div", {
							className: `max-w-[85%] px-3 py-2 rounded-lg text-sm whitespace-pre-line ${m.from === "user" ? "bg-navy text-white rounded-br-sm" : "bg-card border border-border text-foreground rounded-bl-sm"}`,
							children: m.text
						})
					}), m.menu && m.from === "bot" && /* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap gap-2 pl-1",
						children: MENU_OPTIONS.map((opt) => /* @__PURE__ */ jsx("button", {
							onClick: () => send(opt),
							className: "text-xs px-3 py-1.5 rounded-full border border-border bg-card hover:bg-accent hover:text-accent-foreground transition",
							children: opt
						}, opt))
					})]
				}, i))
			}),
			/* @__PURE__ */ jsxs("form", {
				onSubmit: (e) => {
					e.preventDefault();
					send();
				},
				className: "border-t border-border p-2 flex gap-2 bg-card",
				children: [/* @__PURE__ */ jsx("input", {
					value: input,
					onChange: (e) => setInput(e.target.value),
					placeholder: "Type a message…",
					className: "flex-1 px-3 py-2 text-sm bg-background border border-border rounded-md outline-none focus:ring-2 focus:ring-ring"
				}), /* @__PURE__ */ jsx("button", {
					type: "submit",
					className: "px-3 py-2 gradient-fire text-white rounded-md",
					"aria-label": "Send",
					children: /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" })
				})]
			})
		]
	})] });
}
//#endregion
//#region src/assets/hero.jpg
var hero_default = "/assets/hero-2GXF-RFT.jpg";
//#endregion
//#region src/assets/about.jpg
var about_default = "/assets/about-O7a8n_cR.jpg";
//#endregion
//#region src/assets/fire-alarm.jpg
var fire_alarm_default = "/assets/fire-alarm-DS_lxS5V.jpg";
//#endregion
//#region src/assets/extinguishers.jpg
var extinguishers_default = "/assets/extinguishers-Dq0_qUPm.jpg";
//#endregion
//#region src/assets/hydrant.jpg
var hydrant_default = "/assets/hydrant-PQAtG0iV.jpg";
//#endregion
//#region src/assets/ppe.jpg
var ppe_default = "/assets/ppe-vQsoQgsa.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var services = [
	{
		icon: Flame,
		title: "Fire Extinguishers",
		desc: "ABC, CO2, Water-Foam, Clean Agent, Kitchen & Modular extinguishers in all capacities — portable & trolley mounted."
	},
	{
		icon: Siren,
		title: "Fire Alarm Systems",
		desc: "Conventional & Addressable panels, smoke/heat detectors, sounders, manual call points and PA systems."
	},
	{
		icon: Droplets,
		title: "Hydrant & Sprinkler",
		desc: "Design, supply and installation of fire hydrant networks, hose reels, UL-listed sprinklers and valves."
	},
	{
		icon: HardHat,
		title: "Personal Protection (PPE)",
		desc: "Safety helmets, harnesses, goggles, gloves, reflective jackets, eye-wash and signage."
	},
	{
		icon: DoorClosed,
		title: "Fire Rated Doors",
		desc: "120-minute fire rated single & double doors for industrial, commercial and high-rise applications."
	},
	{
		icon: Wrench,
		title: "AMC & Refilling",
		desc: "Annual maintenance contracts, refilling, hydro-testing and on-site service across South India."
	}
];
var products = [
	{
		img: fire_alarm_default,
		title: "Fire Alarm Panels",
		tags: [
			"2–128 Zone",
			"Addressable",
			"PA Systems"
		]
	},
	{
		img: extinguishers_default,
		title: "Fire Extinguishers",
		tags: [
			"ABC 2–9 Kg",
			"CO2 2–22.5 Kg",
			"Clean Agent"
		]
	},
	{
		img: hydrant_default,
		title: "Hydrants & Valves",
		tags: [
			"SS & GM",
			"Hose Reels",
			"Sprinklers"
		]
	},
	{
		img: ppe_default,
		title: "Safety Equipment",
		tags: [
			"Helmets",
			"Harness",
			"Reflective Gear"
		]
	}
];
var stats = [
	{
		v: "20+",
		l: "Years of Trust"
	},
	{
		v: "1500+",
		l: "Projects Delivered"
	},
	{
		v: "4",
		l: "Offices Pan-India"
	},
	{
		v: "24/7",
		l: "Emergency Support"
	}
];
var certs = [
	"ISO 9001:2015",
	"UL LISTED",
	"LPCB",
	"FM APPROVED",
	"CE"
];
var clients = [
	"Apollo Hospitals",
	"ITC Fortune",
	"Alliance Group",
	"Hiranandani",
	"Kauvery Hospital",
	"Bharat Petroleum",
	"CMC Vellore",
	"SRM Institute",
	"TGV Group",
	"Ambica Empire",
	"Navin's",
	"Ponni Sugars",
	"Barefoot Resorts",
	"Foxconn"
];
var distributors = [
	"New Bharat Fire Protection",
	"Ravel",
	"Newage Fire Fighting",
	"Omex",
	"Safex Fire Services",
	"ASES Security",
	"Ronak",
	"Leader Valves",
	"Lehry Valves"
];
function Home() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsxs("section", {
				id: "home",
				className: "relative min-h-screen flex items-center overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: hero_default,
						alt: "Industrial fire protection systems",
						className: "absolute inset-0 w-full h-full object-cover",
						width: 1920,
						height: 1280
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 gradient-hero" }),
					/* @__PURE__ */ jsx("div", {
						className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 md:py-40 text-white",
						children: /* @__PURE__ */ jsxs("div", {
							className: "max-w-3xl",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur border border-white/20 rounded-full text-xs font-semibold tracking-widest uppercase",
									children: [/* @__PURE__ */ jsx(Flame, { className: "h-3.5 w-3.5 text-fire" }), " Trusted Fire & Safety Partner Since 20+ Years"]
								}),
								/* @__PURE__ */ jsxs("h1", {
									className: "mt-6 font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]",
									children: [
										"Fire Safety and",
										/* @__PURE__ */ jsx("br", {}),
										/* @__PURE__ */ jsx("span", {
											className: "text-fire",
											children: "Security Solutions"
										})
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed",
									children: "End-to-end fire protection, detection and safety solutions for industrial, commercial and residential clients — engineered, installed and maintained by certified experts."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-8 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ jsxs("a", {
										href: "#contact",
										className: "inline-flex items-center gap-2 gradient-fire text-white px-6 py-3.5 rounded-md font-semibold shadow-fire hover:opacity-90 transition",
										children: ["Request a Free Site Audit ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
									}), /* @__PURE__ */ jsx("a", {
										href: "#services",
										className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/25 text-white px-6 py-3.5 rounded-md font-semibold hover:bg-white/20 transition",
										children: "Explore Services"
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-10 flex flex-wrap gap-2",
									children: certs.map((c) => /* @__PURE__ */ jsx("span", {
										className: "px-3 py-1.5 bg-white/10 backdrop-blur border border-white/20 rounded text-xs font-semibold tracking-wider",
										children: c
									}, c))
								})
							]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "absolute bottom-0 inset-x-0",
						children: /* @__PURE__ */ jsx("div", {
							className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
							children: /* @__PURE__ */ jsx("div", {
								className: "bg-card/95 backdrop-blur border border-border rounded-t-xl grid grid-cols-2 md:grid-cols-4 divide-x divide-border",
								children: stats.map((s) => /* @__PURE__ */ jsxs("div", {
									className: "p-5 md:p-6 text-center",
									children: [/* @__PURE__ */ jsx("div", {
										className: "font-display font-bold text-2xl md:text-3xl text-navy",
										children: s.v
									}), /* @__PURE__ */ jsx("div", {
										className: "text-xs md:text-sm text-muted-foreground mt-1",
										children: s.l
									})]
								}, s.l))
							})
						})
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				id: "about",
				className: "py-24 md:py-32",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [/* @__PURE__ */ jsx("img", {
							src: about_default,
							alt: "Fire sprinkler installation",
							loading: "lazy",
							width: 1400,
							height: 1e3,
							className: "rounded-xl shadow-elegant w-full h-auto object-cover aspect-[4/3]"
						}), /* @__PURE__ */ jsxs("div", {
							className: "absolute -bottom-6 -right-6 hidden md:block bg-card border border-border rounded-xl p-5 shadow-elegant max-w-[220px]",
							children: [
								/* @__PURE__ */ jsx(Award, { className: "h-8 w-8 text-fire" }),
								/* @__PURE__ */ jsx("div", {
									className: "font-display font-bold text-lg mt-2",
									children: "Certified Excellence"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "text-xs text-muted-foreground mt-1",
									children: "ISO 9001:2015 | UL | LPCB | FM | CE"
								})
							]
						})]
					}), /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs font-bold tracking-widest text-fire uppercase",
							children: "About GSE"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground",
							children: "A leader in the Fire Protection Industry."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-muted-foreground leading-relaxed",
							children: "Global Safety Enterprises is a leading fire protection company operating across Chennai, Tirupur, Bangalore and Coimbatore — providing complete solutions for fire fighting, detection and alarm systems. We specialize in planning, designing and erecting fire hydrant systems with a dedicated after-sales team."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-8 grid sm:grid-cols-2 gap-4",
							children: [
								{
									t: "Our Vision",
									d: "To provide quality services that exceed customer expectations."
								},
								{
									t: "Our Mission",
									d: "Build long-term relationships through innovation & advanced technology."
								},
								{
									t: "Core Values",
									d: "Respect, honesty and business ethics in every engagement."
								},
								{
									t: "Our Goal",
									d: "Become a key player in fire safety across the region."
								}
							].map((b) => /* @__PURE__ */ jsxs("div", {
								className: "p-4 rounded-lg border border-border bg-card",
								children: [/* @__PURE__ */ jsx("div", {
									className: "font-semibold text-navy",
									children: b.t
								}), /* @__PURE__ */ jsx("div", {
									className: "text-sm text-muted-foreground mt-1",
									children: b.d
								})]
							}, b.t))
						})
					] })]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "services",
				className: "py-24 md:py-32 bg-muted/50",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "text-xs font-bold tracking-widest text-fire uppercase",
								children: "What We Do"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "mt-3 text-3xl md:text-4xl lg:text-5xl font-bold",
								children: "Complete Fire & Safety Services"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-muted-foreground",
								children: "From compact extinguishers to full-scale hydrant networks — we design, supply, install and maintain every component."
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
						children: services.map((s) => /* @__PURE__ */ jsxs("div", {
							className: "group p-7 bg-card border border-border rounded-xl hover:shadow-elegant hover:-translate-y-1 transition-all",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "h-12 w-12 rounded-lg gradient-fire grid place-items-center shadow-fire",
									children: /* @__PURE__ */ jsx(s.icon, { className: "h-6 w-6 text-white" })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-5 font-bold text-xl",
									children: s.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed",
									children: s.desc
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "#contact",
									className: "mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-fire hover:gap-2.5 transition-all",
									children: ["Enquire ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })]
								})
							]
						}, s.title))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "products",
				className: "py-24 md:py-32",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-end justify-between gap-6",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "max-w-2xl",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-xs font-bold tracking-widest text-fire uppercase",
									children: "Our Range"
								}), /* @__PURE__ */ jsx("h2", {
									className: "mt-3 text-3xl md:text-4xl lg:text-5xl font-bold",
									children: "Premium Products. Certified Brands."
								})]
							}), /* @__PURE__ */ jsxs("a", {
								href: "#contact",
								className: "text-sm font-semibold text-navy hover:text-fire inline-flex items-center gap-2",
								children: ["Request Catalogue ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
							children: products.map((p) => /* @__PURE__ */ jsxs("div", {
								className: "group overflow-hidden rounded-xl bg-card border border-border hover:shadow-elegant transition",
								children: [/* @__PURE__ */ jsx("div", {
									className: "aspect-[4/3] overflow-hidden bg-navy-deep",
									children: /* @__PURE__ */ jsx("img", {
										src: p.img,
										alt: p.title,
										loading: "lazy",
										width: 1024,
										height: 768,
										className: "w-full h-full object-cover group-hover:scale-105 transition duration-500"
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: "p-5",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "font-bold text-lg",
										children: p.title
									}), /* @__PURE__ */ jsx("div", {
										className: "mt-3 flex flex-wrap gap-1.5",
										children: p.tags.map((t) => /* @__PURE__ */ jsx("span", {
											className: "text-[11px] font-semibold px-2 py-1 bg-muted text-muted-foreground rounded",
											children: t
										}, t))
									})]
								})]
							}, p.title))
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-16 p-8 md:p-10 rounded-2xl gradient-navy text-white",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3 text-fire text-xs font-bold tracking-widest uppercase",
									children: [/* @__PURE__ */ jsx(Building2, { className: "h-4 w-4" }), " Authorised Distributor"]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-2 text-2xl md:text-3xl font-bold",
									children: "Partnered with the industry's most trusted brands"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-6 flex flex-wrap gap-2",
									children: distributors.map((d) => /* @__PURE__ */ jsx("span", {
										className: "px-3 py-2 bg-white/10 border border-white/15 rounded text-sm",
										children: d
									}, d))
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-24 md:py-32 bg-muted/50",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "max-w-2xl mx-auto text-center",
						children: [/* @__PURE__ */ jsx("div", {
							className: "text-xs font-bold tracking-widest text-fire uppercase",
							children: "Why Choose GSE"
						}), /* @__PURE__ */ jsx("h2", {
							className: "mt-3 text-3xl md:text-4xl lg:text-5xl font-bold",
							children: "Engineered for Safety. Built on Trust."
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6",
						children: [
							{
								icon: Shield,
								t: "Certified Quality",
								d: "ISO 9001:2015, UL Listed, LPCB, FM Approved & CE certified products."
							},
							{
								icon: Users,
								t: "Expert Team",
								d: "Dedicated technicians for installation, commissioning and after-sales service."
							},
							{
								icon: Wrench,
								t: "End-to-End Service",
								d: "Design, supply, install, refill and maintain — one accountable partner."
							},
							{
								icon: Award,
								t: "Industry Leaders",
								d: "Trusted by hospitals, hotels, refineries, IT parks and manufacturing giants."
							}
						].map((c) => /* @__PURE__ */ jsxs("div", {
							className: "p-6 bg-card border border-border rounded-xl",
							children: [
								/* @__PURE__ */ jsx(c.icon, { className: "h-9 w-9 text-fire" }),
								/* @__PURE__ */ jsx("div", {
									className: "mt-4 font-bold text-lg",
									children: c.t
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm text-muted-foreground mt-1.5",
									children: c.d
								})
							]
						}, c.t))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "clients",
				className: "py-24 md:py-32",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "max-w-2xl mx-auto text-center",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "text-xs font-bold tracking-widest text-fire uppercase",
								children: "Our Clients"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "mt-3 text-3xl md:text-4xl lg:text-5xl font-bold",
								children: "Trusted by Industry Leaders"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-muted-foreground",
								children: "Serving hospitals, hotels, manufacturing, energy, education and hospitality across India."
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",
						children: clients.map((c) => /* @__PURE__ */ jsx("div", {
							className: "p-5 bg-card border border-border rounded-lg text-center font-semibold text-navy hover:border-fire hover:shadow-fire transition",
							children: c
						}, c))
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative py-20 overflow-hidden",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 gradient-fire" }), /* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center text-white",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-3xl md:text-4xl lg:text-5xl font-bold",
							children: "Ready to safeguard your facility?"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-white/90 max-w-2xl mx-auto",
							children: "Talk to our fire safety experts for a complimentary site audit and tailored solution."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap gap-3 justify-center",
							children: [/* @__PURE__ */ jsxs("a", {
								href: "tel:+919840455557",
								className: "inline-flex items-center gap-2 bg-white text-fire px-6 py-3.5 rounded-md font-bold hover:bg-white/95 transition",
								children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }), " +91 98404 55557"]
							}), /* @__PURE__ */ jsxs("a", {
								href: "#contact",
								className: "inline-flex items-center gap-2 bg-navy-deep text-white px-6 py-3.5 rounded-md font-bold hover:bg-black/90 transition",
								children: ["Request Callback ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx(ContactSection, {}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(FloatingActions, {})
		]
	});
}
var PRODUCT_OPTIONS = [
	"Fire Extinguishers",
	"Fire Alarm Systems",
	"Hydrants & Valves",
	"Sprinkler Systems",
	"Fire Rated Doors",
	"Safety Equipment (PPE)",
	"AMC & Refilling",
	"Other"
];
function ContactSection() {
	const [sent, setSent] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState(null);
	const submit = useServerFn(submitEnquiry);
	return /* @__PURE__ */ jsx("section", {
		id: "contact",
		className: "py-24 md:py-32 bg-muted/40",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("div", {
					className: "text-xs font-bold tracking-widest text-fire uppercase",
					children: "Contact Us"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-3 text-3xl md:text-4xl lg:text-5xl font-bold",
					children: "Let's secure your space."
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 text-muted-foreground max-w-md",
					children: "Reach out for quotes, site audits, AMC contracts or product enquiries. Our team responds within one business day."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 space-y-5",
					children: [
						/* @__PURE__ */ jsxs("a", {
							href: "tel:+919840455557",
							className: "flex items-start gap-4 group",
							children: [/* @__PURE__ */ jsx("div", {
								className: "h-11 w-11 rounded-lg gradient-fire grid place-items-center shadow-fire shrink-0",
								children: /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5 text-white" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: "Call us"
							}), /* @__PURE__ */ jsx("div", {
								className: "font-semibold group-hover:text-fire transition",
								children: "+91 98404 55557, +91 98404 55558"
							})] })]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: "mailto:info@globalsafetys.in",
							className: "flex items-start gap-4 group",
							children: [/* @__PURE__ */ jsx("div", {
								className: "h-11 w-11 rounded-lg bg-navy grid place-items-center shrink-0",
								children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5 text-white" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: "Email"
							}), /* @__PURE__ */ jsx("div", {
								className: "font-semibold group-hover:text-fire transition",
								children: "info@globalsafetys.in"
							})] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "h-11 w-11 rounded-lg bg-navy grid place-items-center shrink-0",
								children: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5 text-white" })
							}), /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("div", {
									className: "text-xs uppercase tracking-wider text-muted-foreground",
									children: "Head Office"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "font-semibold",
									children: "No: 295, MKN Road, Alandur, Chennai 600016"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "text-sm text-muted-foreground mt-1",
									children: "Branches: Coimbatore · Tirupur · Bangalore"
								})
							] })]
						})
					]
				})
			] }), /* @__PURE__ */ jsxs("form", {
				onSubmit: async (e) => {
					e.preventDefault();
					const form = e.currentTarget;
					const fd = new FormData(form);
					const payload = {
						name: String(fd.get("name") ?? ""),
						phone: String(fd.get("phone") ?? ""),
						email: String(fd.get("email") ?? ""),
						company: String(fd.get("company") ?? ""),
						product: String(fd.get("product") ?? ""),
						message: String(fd.get("message") ?? "")
					};
					setError(null);
					setSubmitting(true);
					try {
						await submit({ data: payload });
						setSent(true);
						form.reset();
						setTimeout(() => setSent(false), 4e3);
					} catch (err) {
						setError(err instanceof Error ? err.message : "Failed to submit enquiry");
					} finally {
						setSubmitting(false);
					}
				},
				className: "bg-card border border-border rounded-2xl p-6 md:p-8 shadow-elegant",
				children: [
					/* @__PURE__ */ jsx("h3", {
						className: "font-display font-bold text-2xl",
						children: "Send us a message"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: "We'll get back within 24 hours."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-6 grid sm:grid-cols-2 gap-4",
						children: [
							/* @__PURE__ */ jsx(Field, {
								label: "Full name",
								name: "name",
								required: true
							}),
							/* @__PURE__ */ jsx(Field, {
								label: "Phone",
								name: "phone",
								type: "tel",
								required: true
							}),
							/* @__PURE__ */ jsx("div", {
								className: "sm:col-span-2",
								children: /* @__PURE__ */ jsx(Field, {
									label: "Email",
									name: "email",
									type: "email",
									required: true
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "sm:col-span-2",
								children: /* @__PURE__ */ jsx(Field, {
									label: "Company / Site",
									name: "company"
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ jsxs("label", {
									className: "text-sm font-medium",
									children: ["Product interested", /* @__PURE__ */ jsx("span", {
										className: "text-fire",
										children: "*"
									})]
								}), /* @__PURE__ */ jsxs("select", {
									name: "product",
									required: true,
									defaultValue: "",
									className: "mt-1.5 w-full px-3 py-2.5 bg-background border border-border rounded-md outline-none focus:ring-2 focus:ring-ring",
									children: [/* @__PURE__ */ jsx("option", {
										value: "",
										disabled: true,
										children: "Select a product"
									}), PRODUCT_OPTIONS.map((p) => /* @__PURE__ */ jsx("option", {
										value: p,
										children: p
									}, p))]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ jsx("label", {
									className: "text-sm font-medium",
									children: "Your requirement"
								}), /* @__PURE__ */ jsx("textarea", {
									name: "message",
									rows: 4,
									required: true,
									className: "mt-1.5 w-full px-3 py-2.5 bg-background border border-border rounded-md outline-none focus:ring-2 focus:ring-ring resize-none"
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("button", {
						type: "submit",
						disabled: submitting,
						className: "mt-6 w-full inline-flex items-center justify-center gap-2 gradient-fire text-white py-3.5 rounded-md font-semibold shadow-fire hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed",
						children: [
							/* @__PURE__ */ jsx(Send, { className: "h-4 w-4" }),
							" ",
							submitting ? "Submitting..." : "Submit Enquiry"
						]
					}),
					sent && /* @__PURE__ */ jsxs("div", {
						className: "mt-4 flex items-center gap-2 text-sm text-[oklch(0.55_0.17_150)]",
						children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }), " Thanks! We'll be in touch shortly."]
					}),
					error && /* @__PURE__ */ jsx("div", {
						className: "mt-4 text-sm text-fire",
						children: error
					})
				]
			})]
		})
	});
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("label", {
		className: "text-sm font-medium",
		children: [label, required && /* @__PURE__ */ jsx("span", {
			className: "text-fire",
			children: "*"
		})]
	}), /* @__PURE__ */ jsx("input", {
		name,
		type,
		required,
		className: "mt-1.5 w-full px-3 py-2.5 bg-background border border-border rounded-md outline-none focus:ring-2 focus:ring-ring"
	})] });
}
//#endregion
export { Home as component };
