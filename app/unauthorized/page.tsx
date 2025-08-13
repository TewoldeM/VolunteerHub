// import Link from "next/link";

// function UnauthorizedPage() {
//   return (
//     <div className="flex flex-col items-center mt-12 h-screen">
//       <img
//         src="/unautherized.png"
//         alt="Add Your Photo"
//         className="object-cover rounded w-50 h-50"
//         width={300}
//         height={200}
//       />
//       <div className="text-red-500 text-3xl font-bold mb-4">
//         Unauthorized Access
//       </div>
//       <div className="text-red-500 text-lg font-medium mb-8">
//         You do not have permission to access this page!
//       </div>
//       <Link href="/">
//         <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
//           Go Back to Home
//         </button>
//       </Link>
//     </div>
//   );
// }

// export default UnauthorizedPage;



    // <Form {...form}>
    //   <form
    //     onSubmit={form.handleSubmit(onSubmit)}
    //     className="space-y-8 mt-10 bg-slate-300 py-6"
    //   >
    //     <div className="flex justify-center items-center flex-col gap-8">
    //       <h1 className="text-3xl">Date and Time</h1>
    //       <div className="flex justify-center items-center gap-4 flex-col">
    //         <h1>Are there specific Date</h1>
    //         <div className="flex flex-row gap-6 items-center justify-center">
    //           <FormField
    //             control={form.control}
    //             name="city"
    //             render={({ field }) => (
    //               <FormItem>
    //                 <FormLabel className="text-lg">yes</FormLabel>
    //                 <FormControl></FormControl>
    //                 <FormMessage />
    //               </FormItem>
    //             )}
    //           />
    //           <FormField
    //             control={form.control}
    //             name="city"
    //             render={({ field }) => (
    //               <FormItem>
    //                 <FormLabel className="text-lg">No</FormLabel>
    //                 <FormControl>
    //                   <Checkbox {...field} className="ml-2" />
    //                 </FormControl>
    //                 <FormMessage />
    //               </FormItem>
    //             )}
    //           />
    //         </div>
    //       </div>

    //       <div className="flex justify-center items-center gap-4 flex-col">
    //         <h1>Does this Opportunity have shift</h1>
    //         <div className="flex flex-row gap-6 items-center justify-center">
    //           <FormField
    //             control={form.control}
    //             name="city"
    //             render={({ field }) => (
    //               <FormItem>
    //                 <FormLabel className="text-lg">yes</FormLabel>
    //                 <FormControl>
    //                   <Checkbox {...field} className="ml-2" />
    //                 </FormControl>
    //                 <FormMessage />
    //               </FormItem>
    //             )}
    //           />
    //           <FormField
    //             control={form.control}
    //             name="city"
    //             render={({ field }) => (
    //               <FormItem>
    //                 <FormLabel className="text-lg">No</FormLabel>
    //                 <FormControl>
    //                   <Checkbox {...field} className="ml-2" />
    //                 </FormControl>
    //                 <FormMessage />
    //               </FormItem>
    //             )}
    //           />
    //         </div>
    //       </div>

    //       <div className="flex flex-col gap-6">
    //         <h1 className="text-2xl text-gray-500">Time Slots</h1>
    //         <span className="flex flex-row justify-between items-center gap-6 md:gap-44">
    //           <h1>When Can Volunteers Participate?</h1>
    //           <FormField
    //             control={form.control}
    //             name="city"
    //             render={({ field }) => (
    //               <FormItem>
    //                 <FormLabel className="text-lg">Selelc all</FormLabel>
    //                 <FormControl>
    //                   <Checkbox {...field} className="ml-2" />
    //                 </FormControl>
    //                 <FormMessage />
    //               </FormItem>
    //             )}
    //           />
    //         </span>
    //       </div>
    //       <div className="flex flex-col gap-2">
    //         <span className="flex flex-row gap-6 px-48 py-4 justify-end items-center bg-gray-400">
    //           <p className="md:ml-40">Weekdays</p>
    //           <p className="md:ml-40">Weekends</p>
    //         </span>
    //         <span className="flex flex-row gap-6 px-48 py-4 justify-end items-center bg-gray-400">
    //           <p className="md:-ml-48 px-60">Daytime</p>
    //           <div className="flex gap-48">
    //             <FormField
    //               control={form.control}
    //               name="city"
    //               render={({ field }) => (
    //                 <FormItem className=" ">
    //                   <FormLabel className="text-lg"></FormLabel>
    //                   <FormControl>
    //                     <Checkbox {...field} className="ml-2" />
    //                   </FormControl>
    //                   <FormMessage />
    //                 </FormItem>
    //               )}
    //             />{" "}
    //             <FormField
    //               control={form.control}
    //               name="city"
    //               render={({ field }) => (
    //                 <FormItem>
    //                   <FormLabel className="text-lg"></FormLabel>
    //                   <FormControl>
    //                     <Checkbox {...field} className="ml-2" />
    //                   </FormControl>
    //                   <FormMessage />
    //                 </FormItem>
    //               )}
    //             />
    //           </div>
    //         </span>
    //         <span className="flex flex-row gap-6 px-48 py-4 justify-end items-center bg-gray-400">
    //           <p className="ml-2 px-4 md:-ml-48 md:px-60">Daytime</p>
    //           <div className="flex gap-11 md:gap-48">
    //             <FormField
    //               control={form.control}
    //               name="city"
    //               render={({ field }) => (
    //                 <FormItem className=" ">
    //                   <FormLabel className="text-lg"></FormLabel>
    //                   <FormControl>
    //                     <Checkbox {...field} className="ml-2" />
    //                   </FormControl>
    //                   <FormMessage />
    //                 </FormItem>
    //               )}
    //             />{" "}
    //             <FormField
    //               control={form.control}
    //               name="city"
    //               render={({ field }) => (
    //                 <FormItem>
    //                   <FormLabel className="text-lg"></FormLabel>
    //                   <FormControl>
    //                     <Checkbox {...field} className="ml-2" />
    //                   </FormControl>
    //                   <FormMessage />
    //                 </FormItem>
    //               )}
    //             />
    //           </div>
    //         </span>
    //       </div>
    //     </div>
    //   </form>
    // </Form>;