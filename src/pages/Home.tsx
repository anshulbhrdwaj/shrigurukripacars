import { MoveRight } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "@/redux/slices/themeSlice";
import { Button, CtaButton } from "@/components/ui/button";
import { Link } from "react-router";
// import Review from "@/components/Review";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { cn } from "@/lib/utils";
import {
	heading3,
	primaryBtn,
	section,
	heading,
	heading2,
	cardBtn,
} from "@/lib/classes";
import AnimatedTestimonials from "@/components/ui/animated-testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { useLenis } from "@/hooks/useLenis";

const Home = () => {
	useLenis();
	return (
		<main className="flex flex-col md:space-y-8 overflow-x-hidden">
			<Hero />
			<Explore />
			<Gallery />
			<About />
			<Testimonials />
			<CtaSection />
		</main>
	);
};

export default Home;

const Hero = () => {
	const dispatch = useDispatch();
	return (
		<section
			className={cn(
				section,
				"gap-0 sm:gap-0 xl:gap-0 items-center justify-center"
			)}
		>
			<h1 className={cn(heading, "text-nowrap")}>CLASSIC CARS</h1>

			<Card className=" w-full h-[60vh] relative rounded-[2rem] rounded-br-[4rem]  md:rounded-[4rem] grainy bg-foreground border-none shadow-none">
				<CardContent>
					<Button
						className={cn(primaryBtn, cardBtn, "h-[5dvh] sm:h-[3dvh] py-6 px-12 sm:py-3 sm:px-6 rounded-full")}
						onClick={() => dispatch(toggleTheme())}
					>
						<MoveRight size={48} />
					</Button>
				</CardContent>
			</Card>
		</section>
	);
};

const Explore = () => {
	return (
		<section className={cn(section)}>
			<div className="flex flex-col text-center lg:text-start lg:flex-row w-full h-full sm:h-[60%] gap-8 max-w-screen">
				<div className="flex-grow relative flex flex-col items-start gap-6">
					<h1 className={cn(heading2)}>UNIQUE CARS</h1>
					<CtaButton />
				</div>

				<div className="sm:min-w-[50vw] lg:min-w-[40vw] xl:min-w-[35vw] bg-foreground h-[60vh] rounded-[2rem] sm:rounded-[4rem]" />
			</div>

			<div className="flex flex-col sm:flex-row justify-around items-center gap-8">
				<p className="w-full sm:w-[25%] leading-6">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
					veritatis, quo enim perferendis delectus quam consectetur officia
					consequuntur dolor eaque error sit reiciendis, repudiandae vel facilis
					rem autem harum debitis.
				</p>
				<p className="w-full sm:w-[25%] leading-6">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
					veritatis, quo enim perferendis delectus quam consectetur officia
					consequuntur dolor eaque error sit reiciendis, repudiandae vel facilis
					rem autem harum debitis.
				</p>
				<p className="w-full sm:w-[25%] leading-6">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
					veritatis, quo enim perferendis delectus quam consectetur officia
					consequuntur dolor eaque error sit reiciendis, repudiandae vel facilis
					rem autem harum debitis.
				</p>
			</div>
		</section>
	);
};

const Gallery = () => {
	return (
		<section className={cn(section, "")}>
			<div className="flex flex-col sm:flex-row items-start xl:items-center justify-center min-h-[50dvh] gap-8 ">
				<div className="min-w-full sm:min-w-[50vw] lg:min-w-[40vw] xl:min-w-[20vw] bg-foreground h-[42vh] md:h-[40vh] lg:h-[32vh] rounded-[2rem] sm:rounded-[4rem] mt-4 xl:-mt-10 order-2 sm:order-1"></div>
				<div className="flex flex-col xl:flex-row items-center h-[30vh] gap-2 xl:gap-0 2xl:gap-4 order-1 sm:order-2 pt-0">
					<h1 className={cn(heading2, "xl:text-center")}>BEST CARS</h1>
					<p className="max-w-[80%] sm:max-w-full text-center sm:text-start xl:max-w-[30%]">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
						cum, deleniti ratione, atque esse dicta rerum voluptatibus numquam
						earum obcaecati explicabo reiciendis quam dolorem, pariatur minus
						molestias asperiores sit nisi!
					</p>
				</div>
			</div>
			<div className="flex flex-col sm:flex-row items-center min-h-[50dvh] max-w-screen justify-between gap-12 sm:gap-0">
				<div className="min-h-[50vh] w-full sm:w-3/5 bg-foreground rounded-[2rem] sm:rounded-[4rem]"></div>
				<div className="flex flex-col-reverse sm:flex-col items-start h-[50vh] w-full sm:w-1/3 justify-between ">
					<CtaButton />
					<div className="w-full bg-foreground h-8/10 rounded-[2rem] sm:rounded-[4rem]" />
				</div>
			</div>
		</section>
	);
};

const About = () => {
	return (
		<section className={cn(section, "")}>
			<h1 className={cn(heading3)}>Shri Gurukripa Cars</h1>

			<div className=" w-full h-full sm:h-[60vh] relative rounded-[2rem] md:rounded-[4rem] grainy bg-foreground p-8 gap-8 lg:gap-12 xl:p-16 flex flex-col justify-between sm:flex-row">
				<div className="bg-background rounded-[2rem] md:rounded-[4rem] h-6/10 sm:h-full w-full sm:w-6/10"></div>
				<div className="rounded-[2rem] md:rounded-[4rem] h-full w-full sm:w-4/10 xl:w-3/10 flex flex-col justify-around">
					<div className="flex flex-col gap-8">
						<Button
							variant={"outline"}
							className=" rounded-full text-background border-background w-[12rem] h-[3rem]"
						>
							About Us
						</Button>

						<p className="w-full sm:w-3/4 leading-8 text-background text-lg self-start">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Cupiditate veritatis, quo enim perferendis delectus quam
							consectetur officia consequuntur dolor eaque error sit reiciendis,
							repudiandae vel facilis rem autem harum debitis.
						</p>
					</div>

					<Link
						to="/about-us"
						className=" text-lg text-primary flex items-center gap-2"
					>
						Learn More <MoveRight size={24} />
					</Link>
				</div>
			</div>
		</section>
	);
};

const Testimonials = () => {
	const testimonials = useSelector((store: RootState) => store.testimonials);

	return <AnimatedTestimonials testimonials={testimonials} />;
};

const CtaSection = () => {
	return (
		<section
			className={cn(
				section,
				"bg-foreground min-h-[10vh] w-screen "
			)}
		>
			<div className={cn(heading, "font-recoleta text-background")}>
				Elegance and Affordability meet
				<Button className={cn(primaryBtn, "rounded-full h-[8dvh] sm:h-[6vh] py-6 px-12 sm:py-3 sm:px-6")}>
					<MoveRight size={48} />
				</Button>
			</div>
		</section>
	);
};
