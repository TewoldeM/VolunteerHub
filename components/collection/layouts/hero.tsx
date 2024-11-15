// components/collection/hero.tsx
import Image from "next/image";

interface HeroProps {
  user: any; // Define a more specific type based on your user data
}

const Hero: React.FC<HeroProps> = ({ user }) => {
  return (
    <div className="hero">
      {user ? (
        <h1>Welcome back,{user.email}!</h1>
      ) : (
      <h1>Welcome to our platform!</h1>
      )}
      {/* Add other hero content here */}
      <div className="flex flex-col justify-center items-center h-screen bg-red-300">
       <div className="bg-gray-100 h-full w-full px-32 py-40">
       <img 
              src="/OIP (1).jpg" 
              alt="Add Your Photo" 
              className="w-full h-full object-cover rounded" 
            />
       </div>
       {/* <Cliamyourorg /> */}
      </div>
    </div>
  );
};

export default Hero;