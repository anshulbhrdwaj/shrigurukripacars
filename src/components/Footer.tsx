import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
	return (
		<footer className="grid p-width items-center grid-cols-3 py-6 text-xs">
			<div className="flex gap-1 md:gap-4">
				<Link to="/terms-and-conditions">Terms and Conditions</Link>
				<Link to="/privacy-policy">Privacy Policy</Link>
			</div>
			<div className="flex flex-col text-center sm:flex-row justify-center">
				Copyright &copy; {new Date().getFullYear()}{" "}
				<span className="text-nowrap">Shri Gurukripa Cars</span>
			</div>
			<div className="flex justify-end gap-2 md:gap-4">
				<Link to="/">
					<Instagram />
				</Link>
				<Link to="/">
					<Facebook />
				</Link>
				<Link to="/">
					<Youtube />
				</Link>
				<Link to="/">
					<Linkedin />
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
