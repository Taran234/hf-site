// 'use client'
// import { useState } from "react";

// export function Contact() {
//     const [loading, setLoading] = useState(false);
//     const [submitted, setSubmitted] = useState(false);

//     async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//         e.preventDefault();
//         setLoading(true);
//         const formData = new FormData(e.currentTarget);
//         const body: Record<string, any> = {};
//         formData.forEach((value, key) => {
//             body[key] = value;
//         });

//         try {
//             const response = await fetch("https://api.web3forms.com/submit", {
//                 method: "POST",
//                 headers: {
//                     Accept: "application/json",
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     ...body,
//                     access_key: "db44416b-ca9d-48e0-9d50-30bcbcfea335",
//                 }),
//             });

//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }

//             const result = await response.json();
//             console.log(result); // Log the response from the API

//             setLoading(false);
//             setSubmitted(true);
//             resetForm();
//         } catch (error) {
//             console.error("Error submitting the form:", error);
//             setLoading(false);
//             // Handle error state if needed
//         }
//     }

//     function resetForm() {
//         const form = document.getElementById('contact-form') as HTMLFormElement;
//         if (form) {
//             form.reset();
//         }
//     }

//     return (
//         <div className="relative flex w-full justify-center  text-sm leading-5 text-white bg-inherit">
//             <div className="flex flex-col max-w-full">


//                 <form id="contact-form" onSubmit={handleSubmit} className="bg-inherit w-full flex flex-col">
//                     <input type="checkbox" className="hidden" name="botcheck" />
//                     <div className="flex flex-row max-w-full gap-4">
//                         <div className="mb-4">
//                             <input type="text" placeholder="Name" autoComplete="on"
//                                 className="w-full px-1 py-2 bg-transparent border-b-2 border-[#c5ecfd] text-[#c5ecfd] placeholder-[#c5ecfd] focus:ring-0 focus:border-[#c5ecfd]"
//                                 name="name" required />
//                         </div>
//                         <div className="mb-4">
//                             <input type="email" placeholder="Contact Email" autoComplete="on"
//                                 className="w-full px-1 py-2 bg-transparent border-b-2 border-[#c5ecfd] text-[#c5ecfd] placeholder-[#c5ecfd] focus:ring-0 focus:border-[#c5ecfd]"
//                                 name="email/phone" required />
//                         </div>
//                     </div>


//                     <div className="mb-4">
//                         <textarea placeholder="Message"
//                             className="w-full px-1 py-2 bg-transparent border-b-2 border-[#c5ecfd] text-[#c5ecfd] placeholder-[#c5ecfd] focus:ring-0 focus:border-[#c5ecfd]"
//                             name="message" required></textarea>
//                     </div>
//                     <button aria-label="Submit button" type="submit"
//                         className="w-full py-2 font-semibold text-white bg-[#39b7dd] rounded-md hover:bg-[#39b7dd]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c5ecfd]">
//                         {loading ? 'Loading...' : 'Send Message'}
//                     </button>
//                 </form>

//             </div>
//         </div >
//     );
// }
