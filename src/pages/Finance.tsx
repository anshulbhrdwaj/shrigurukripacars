import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { section } from "@/lib/classes";
import { cn } from "@/lib/utils";
import { RootState } from "@/redux/store";
import { BadgeIndianRupee, Calendar, IndianRupee, Percent } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const Finance = () => {
	const { carId } = useParams();
	const car = useSelector((state: RootState) =>
		state.cars.find((car) => car.id === Number(carId))
	);
	
	const defaultValues = {
		price: car?.price || 500000,
		downPayment: 50000,
		period: 36,
		interestRate: 8.5,
	};
	const defaultResult = {
		monthlyPayment: 0,
		totalInterest: 0,
		totalCost: 0,
	};
	const [values, setValues] = useState(defaultValues);
	const [result, setResult] = useState(defaultResult);

	useEffect(() => {
		const loanAmount = values.price - values.downPayment;
		const rate = values.interestRate / 100 / 12;
		const n = values.period;

		const emi =
			(loanAmount * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);

		const totalCost = emi * n;
		const totalInterest = totalCost - loanAmount;

		setResult({
			monthlyPayment: emi,
			totalInterest,
			totalCost,
		});
	}, [values]);

	useEffect(() => {
		console.log(result);
	}, [result]);

	return (
		<section
			className={cn(section, "gap-4 sm:gap-4 xl:gap-4 py-[2.1dvw] h-[83%]")}
		>
			<div className=" w-[95vw] h-full relative rounded-[2rem] md:rounded-[4rem] grainy bg-foreground p-1 gap-8 lg:gap-8 xl:p-2 flex flex-col justify-between font-recoleta">
				<div className="bg-background rounded-[2rem] md:rounded-[4rem] min-h-[50vh] sm:h-full w-full flex flex-col lg:flex-row items-center justify-around p-[5vw] sm:p-[1vw] xl:p-0 gap-4">
					<div className="flex flex-col justify-center items-center w-full max-w-sm gap-4 lg:gap-8 h-1/2 sm:h-full sm:w-1/2 ">
						<div className="flex gap-8">
							<div className="flex flex-col gap-1.5">
								<Label htmlFor="price" className="text-lg">
									<IndianRupee className="w-4 h-4" />
									Price
								</Label>
								<Input
									type="number"
									id="price"
									placeholder="Car Price"
									value={values.price}
									onChange={(e) =>
										setValues((prev) => ({
											...prev,
											price: Number(e.target.value),
										}))
									}
								/>
							</div>{" "}
							<div className="flex flex-col gap-1.5">
								<Label htmlFor="downpayment" className="text-lg">
									<BadgeIndianRupee className="w-4 h-4" />
									Downpayment
								</Label>
								<Input
									type="number"
									id="downpayment"
									placeholder="Downpayment"
									value={values.downPayment}
									onChange={(e) =>
										setValues((prev) => ({
											...prev,
											downPayment: Number(e.target.value),
										}))
									}
								/>
							</div>{" "}
						</div>

						<div className="flex gap-8">
							<div className="flex flex-col gap-1.5">
								<Label htmlFor="period" className="text-lg">
									<Calendar className="w-4 h-4" />
									Period (months)
								</Label>
								<Input
									type="number"
									id="period"
									placeholder="36 months"
									value={values.period}
									onChange={(e) =>
										setValues((prev) => ({
											...prev,
											period: Number(e.target.value),
										}))
									}
								/>
							</div>{" "}
							<div className="flex flex-col gap-1.5">
								<Label htmlFor="interestRate" className="text-lg">
									<Percent className="w-4 h-4" />
									Interest Rate
								</Label>
								<Input
									type="number"
									id="interestRate"
									placeholder="Loan Interest Rate"
									value={values.interestRate}
									onChange={(e) =>
										setValues((prev) => ({
											...prev,
											interestRate: Number(e.target.value),
										}))
									}
								/>
							</div>
						</div>
					</div>

					<Separator
						orientation="vertical"
						className="hidden lg:block h-8/10"
					/>
					<Separator className="w-8/10 lg:hidden" />

					<div className="flex flex-col text-foreground font-bold text-2xl lg:text-3xl xl:text-4xl  h-1/2 sm:h-full sm:w-1/2 items-center justify-around md:py-[5dvh] gap-4">
						<p>Monthly EMI: ₹{result.monthlyPayment.toFixed(2)}</p>
						<Separator />
						<p>Total Interest: ₹{result.totalInterest.toFixed(2)}</p>
						<Separator />
						<p>Total Payable: ₹{result.totalCost.toFixed(2)}</p>
					</div>
				</div>

				<div className="rounded-[2rem] md:rounded-[4rem] h-full w-full flex flex-col justify-around gap-10 px-14 pb-12">
					<div className="flex flex-col gap-4">
						<Button
							variant={"outline"}
							className=" rounded-full text-background border-background w-[12rem] h-[3rem] pointer-events-none mx-auto sm:mx-0"
						>
							EMI Calculator
						</Button>

						<p className="w-full sm:w-9/10 text-center sm:text-start leading-8 text-background text-lg self-start pl-2">
							Use our free car EMI calculator to estimate your monthly payments
							and plan your purchase with confidence. Just enter the car price,
							down payment, loan period, and interest rate to see real-time
							results. Perfect for budgeting your next second-hand car in India.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Finance;
