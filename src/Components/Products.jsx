// import React from 'react';
// import HC from '../assets/HC.jpg';
// import UNDERKNEE from '../assets/UNDERKNEE.jpg';
// import fd from '../assets/fd.png';
// import many from '../assets/many.png';

// const ProductsPage = () => {
//   const products = [
//     {
//         title: "Custom Prosthetic Devices",
//         description: "We can make a wide range of prosthetic devices, from below-knee to above-knee prosthetics, as well as upper limb prosthetics. Our 3D technology allows us to create custom devices tailored to each patient's unique needs.",
//         image:many,

//     },
//     {
//       title: "Highest Comfort",
//       description: "The Prothea devices are custom-made using 3D technology by trained professionals. This gives a perfect fit and ensures the highest comfort level for our patients.",
//       image: HC,
//     },
//     {
//       title: "Fastest Delivery",
//       description: "Thanks to the use of 3D technology, devices can be designed and manufactured at light speed. In many cases, the patient can get fitted within 24h!",
//       image: fd,
//     },
//     {
//       title: "Highest Quality",
//       description: "Our devices have gone through rigorous testing, showing they can handle millions of cycles. Every device goes through quality control before being fitted on a patient.",
//       image: UNDERKNEE 
//     }
//   ];

//   return (
//     <section className="bg-gray-50 py-16 px-6 lg:px-24">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Some of the Devices we can make
//           </h2>
//           <div className="w-24 h-1 bg-orange mx-auto rounded-full"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {products.map((item, index) => (
//             <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
//               <div className="h-64 overflow-hidden">
//                 <img 
//                   src={item.image} 
//                   alt={item.title} 
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//               <div className="p-8">
//                 <div className="flex items-center gap-3 mb-4">
//                   {item.icon}
//                   <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
//                 </div>
//                 <p className="text-gray-600 leading-relaxed">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductsPage;