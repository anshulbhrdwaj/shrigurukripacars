import CountUp from "react-countup";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, Suspense } from "react";

const MotionCountUp = ({ endValue }: { endValue: number }) => (
	<AnimatePresence>
		<motion.div
			key={endValue}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}
		>
			<CountUp end={endValue} duration={4} suffix="%" />
		</motion.div>
	</AnimatePresence>
);

const Preloader = () => {
	const [phase, setPhase] = useState<"counting" | "logo" | "done">("counting");

	useEffect(() => {
		const timer = setTimeout(() => setPhase("logo"), 4000);
		const logoTimer = setTimeout(() => {
			setPhase("done");
		}, 5000);

		return () => {
			clearTimeout(timer);
			clearTimeout(logoTimer);
		};
	}, []);

	return (
		<AnimatePresence>
			{phase !== "done" && (
				<motion.div
					key="preloader"
					initial={{ opacity: 1 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1 }}
					className="fixed inset-0 z-50 flex items-center justify-center bg-background font-recoleta text-7xl md:text-8xl text-muted-foreground"
				>
					{phase === "counting" ? (
						<MotionCountUp key="count" endValue={99} />
					) : (
						<motion.h1
							key="logo"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 1 }}
							className="text-center"
						>
							Shri Gurukripa Cars
						</motion.h1>
					)}
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default function PageWithPreloader({
	children,
}: {
	children: React.ReactNode;
}) {
	const [showPreloader, setShowPreloader] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowPreloader(false);
		}, 5000); // Sync with Preloader duration

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{/* Preloader Layer */}
			{showPreloader && (
				<div className="fixed inset-0 z-50">
					<Preloader />
				</div>
			)}

			{/* Main Page Content */}
			<Suspense fallback={<Loading />}>
				<motion.div
					initial={{ opacity: 1, display: "fixed" }}
					animate={{ opacity: 0, display: "none" }}
					transition={{ duration: 1 }}
					className="fixed inset-0 z-40 w-screen h-screen bg-background"
				/>
				{children}
			</Suspense>
		</>
	);
}

const Loading = () => {
	return (
		<div className="fixed inset-0 z-40 flex items-center justify-center bg-background font-recoleta text-7xl md:text-8xl text-muted-foreground">
			<h1 className="text-center animate-pulse">Shree Gurukripa Cars</h1>
		</div>
	);
};
