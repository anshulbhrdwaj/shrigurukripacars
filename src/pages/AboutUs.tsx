import { Button } from "@/components/ui/button";
import { section } from "@/lib/classes";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import { Link } from "react-router";

const AboutUs = () => {
	return (
		<section className={cn(section, "gap-4 sm:gap-4 xl:gap-4")}>
			<div className=" w-full h-full relative rounded-[2rem] md:rounded-[4rem] grainy bg-foreground p-1 gap-8 lg:gap-8 xl:p-2 flex flex-col justify-between">
				<div className="bg-background rounded-[2rem] md:rounded-[4rem] min-h-[50vh] sm:h-full w-full "></div>

				<div className="rounded-[2rem] md:rounded-[4rem] h-full w-full flex flex-col justify-around gap-10 px-14 pb-12">
					<div className="flex flex-col gap-4">
						<Button
							variant={"outline"}
							className=" rounded-full text-background border-background w-[12rem] h-[3rem] pointer-events-none mx-auto sm:mx-0"
						>
							About Us
						</Button>

						<p className="w-full sm:w-9/10 text-center sm:text-start leading-8 text-background text-lg self-start pl-2">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Cupiditate veritatis, quo enim perferendis delectus quam
							consectetur officia consequuntur dolor eaque error sit reiciendis,
							repudiandae vel facilis rem autem harum debitis.
						</p>
					</div>

					<Link
						to="/about-us"
						className=" text-lg text-primary flex items-center justify-center sm:justify-start gap-2 pl-2 w-full mx-auto"
					>
						Explore Our Collection <MoveRight size={24} />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
