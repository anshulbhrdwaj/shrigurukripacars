import { section } from "@/lib/classes";
import { cn } from "@/lib/utils";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  IconBrandGmail,
  IconBrandInstagram,
	IconBrandWhatsapp,
} from "@tabler/icons-react";
import { Textarea } from "@/components/ui/textarea";

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};


const ContactUs = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
	return (
		<section
			className={cn(section, "gap-4 sm:gap-4 xl:gap-4 py-[2.1dvw] h-[83%]")}
		>
			<div className="shadow-input mx-auto w-full max-w-xl h-full rounded-none bg-foreground/10 p-4 md:rounded-2xl md:p-8 font-recoleta my-auto overflow-scroll">
      <h2 className="text-5xl font-bold">
        Contact Us
      </h2>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground/80">
				Fill in the form below to get in touch with us.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Anshul" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Bhardwaj" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="umangbhardwajdev@gmail.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Hi there..." />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-background to-background/80 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Send &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex flex-col space-y-4">
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-background px-4 font-medium dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandWhatsapp className="h-4 w-4" />
            <span className="text-sm">
              WhatsApp
            </span>
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-background px-4 font-medium dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandGmail className="h-4 w-4" />
            <span className="text-sm">
              Gmail
            </span>
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-background px-4 font-medium dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandInstagram className="h-4 w-4" />
            <span className="text-sm">
              Instagram
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
		</section>
	);
};

export default ContactUs;