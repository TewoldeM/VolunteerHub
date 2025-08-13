
import { Button } from "@/components/ui/button";
import { HeroHighlight,Highlight } from "@/components/ui/hero-highlight";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
;
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/collection/Reuseable/MagicButton"
import { User } from "@prisma/client";

interface HeroProps {
  user: User | null; // Define a more specific type based on your user data
}

const Hero: React.FC<HeroProps> = ({ user }) => {
  return (
    <div className="hero">
      <HeroHighlight className="flex justify-center items-center flex-col gap-8">
        {user ? (
          <h1 className="text-7xl text-blue-200">
            Welcome back { user.name}!
          </h1>
        ) : (
          <h1>Welcome to our platform!</h1>
        )}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          VolunteerHub The largest nonprofit network connecting volunteers with
          endless opportunities
          <Highlight className="text-black dark:text-white">
            to make a difference.
          </Highlight>
        </motion.h1>

        <MagicButton
          title="Show my work"
          icon={<FaLocationArrow />}
          position="right"
        />
      </HeroHighlight>
    </div>
  );
};
// VolunteerMatch: The largest nonprofit network connecting volunteers with endless opportunities to make a difference

export default Hero;
