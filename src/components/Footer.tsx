import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
	return (
		<footer className="grid px-[15px] py-[10px] lg:px-[20px] lg:py-[10px] items-center grid-cols-3 text-xs ">
			<div className="flex gap-1 md:gap-4">
				<Link to="/terms-and-conditions">Terms and Conditions</Link>
				<Link to="/privacy-policy">Privacy Policy</Link>
			</div>
			<div className="flex flex-col text-center sm:flex-row justify-center sm:gap-2">
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
