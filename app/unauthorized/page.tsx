import Link from "next/link";

function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center mt-12 h-screen">
      <img
        src="/unautherized.png"
        alt="Add Your Photo"
        className="object-cover rounded w-50 h-50"
        width={300}
        height={200}
      />
      <div className="text-red-500 text-3xl font-bold mb-4">
        Unauthorized Access
      </div>
      <div className="text-red-500 text-lg font-medium mb-8">
        You do not have permission to access this page!
      </div>
      <Link href="/">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Go Back to Home
        </button>
      </Link>
    </div>
  );
}

export default UnauthorizedPage;
