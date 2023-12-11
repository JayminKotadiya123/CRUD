// import React, { useState } from 'react';

// const ProfileForm = () => {
//   const [previewImg, setPreviewImg] = useState(
//     'https://lh3.googleusercontent.com/a-/AFdZucpC_6WFBIfaAbPHBwGM9z8SxyM1oV4wB4Ngwp_UyQ=s96-c'
//   );

//   const loadFile = (event) => {
//     const input = event.target;
//     const file = input.files[0];

//     setPreviewImg(URL.createObjectURL(file));

//     // Free memory
//     URL.revokeObjectURL(previewImg);
//   };

//   return (
//     <form>
//       <div className="flex items-center space-x-6">
//         <div className="shrink-0">
//           <img
//             id="preview_img"
//             className="h-16 w-16 object-cover rounded-full"
//             src={previewImg}
//             alt="Current profile photo"
//           />
//         </div>
//         <label className="block">
//           <span className="sr-only">Choose profile photo</span>
//           <input
//             type="file"
//             onChange={loadFile}
//             className="block w-full text-sm text-slate-500
//               file:mr-4 file:py-2 file:px-4
//               file:rounded-full file:border-0
//               file:text-sm file:font-semibold
//               file:bg-violet-50 file:text-violet-700
//               hover:file:bg-violet-100"
//           />
//         </label>
//       </div>
//     </form>
//   );
// };

// export default ProfileForm;
