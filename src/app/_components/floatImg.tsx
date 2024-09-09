// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image'; // Use this if you're using Next.js, otherwise use your Image component

// const FloatImg = () => {
//     return (
//         <div className="flex items-start justify-center min-h-screen">
//             <motion.div
//                 className="relative -top-10 right-20 w-[300px] h-[200px] cursor-pointer"
//                 whileHover="hover"
//             >
//                 <motion.div
//                     className="absolute -top-[20%] rounded-2xl  left-[25%] w-[300px] h-[300px] shadow-[0_0_10px_#00000088] z-20"
//                     initial={{ translateX: '-45%', translateY: '35%', rotate: 0, scale: 1 }}
//                     variants={{
//                         hover: {
//                             translateX: '0%',
//                             translateY: '25%',
//                             rotate: 0,
//                             scale: 1,
//                         },
//                     }}
//                     transition={{ duration: 0.3 }}
//                 >
//                     <Image
//                         src={'/call.jpg'}
//                         alt="call"
//                         layout='fill'
//                         sizes='1'
//                         className="absolute inset-0 rounded-2xl object-cover"
//                     />
//                 </motion.div>

//                 <motion.div
//                     className="absolute top-[20%] rounded-2xl left-[25%] w-[300px] h-[300px] shadow-[0_0_10px_#00000088]"
//                     initial={{ translateX: '0%', translateY: '-48%', rotate: 0, scale: 0.6 }}
//                     variants={{
//                         hover: {
//                             translateX: '-40%',
//                             translateY: '0%',
//                             rotate: -10,
//                             scale: 0.8,
//                             transition: { delay: 0.1 },
//                         },
//                     }}
//                     transition={{ duration: 0.3 }}
//                 >
//                     <Image
//                         src={'/sales.jpg'}
//                         alt="sales"
//                         layout='fill'
//                         sizes='1'
//                         className="absolute inset-0 rounded-2xl object-cover"
//                     />
//                 </motion.div>

//                 <motion.div
//                     className="absolute top-[20%] rounded-2xl left-[25%] w-[300px] h-[300px] shadow-[0_0_10px_#00000088]"
//                     initial={{ translateX: '60%', translateY: '0%', rotate: 0, scale: 0.75 }}
//                     variants={{
//                         hover: {
//                             translateX: '40%',
//                             translateY: '0%',
//                             rotate: 10,
//                             scale: 0.8,
//                             transition: { delay: 0.2 },
//                         },
//                     }}
//                     transition={{ duration: 0.3 }}
//                 >
//                     <Image
//                         src={'/checks.jpg'}
//                         alt="checks"
//                         layout='fill'
//                         sizes='1'
//                         className="absolute inset-0 rounded-2xl object-cover"
//                     />
//                 </motion.div>
//             </motion.div>
//         </div>
//     );
// };

// export default FloatImg;
