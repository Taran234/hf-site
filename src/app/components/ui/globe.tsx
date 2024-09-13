// import { useEffect, useRef } from "react";
// import createGlobe from "cobe";

// export const Globe = ({ className }: any) => {
//     const canvasRef = useRef(null);

//     useEffect(() => {
//         let phi = 0;

//         if (!canvasRef.current) return;

//         const globe = createGlobe(canvasRef.current, {
//             devicePixelRatio: 2,
//             width: 500 * 2,
//             height: 500 * 2,
//             phi: 0,
//             theta: 0,
//             dark: 1,
//             diffuse: 1.2,
//             mapSamples: 4000,
//             mapBrightness: 4,
//             baseColor: [0.3, 0.3, 0.3],
//             markerColor: [0.1, 0.8, 1],
//             glowColor: [1, 1, 1],
//             markers: [
//                 { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
//                 { location: [40.7128, -74.006], size: 0.03 }, // New York
//                 { location: [51.5074, -0.1278], size: 0.03 }, // London
//                 { location: [43.65107, -79.347015], size: 0.03 }, // Toronto


//             ],
//             onRender: (state: any) => {
//                 state.phi = phi;
//                 phi += 0.01;
//             },
//         });

//         return () => {
//             globe.destroy();
//         };
//     }, []);

//     return (
//         <canvas
//             ref={canvasRef}
//             style={{ width: 350, height: 350, maxWidth: "100%", aspectRatio: 1 }}
//             className={className}
//         />
//     );
// };
