// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function AddInitialPage() {
//   const [name, setName] = useState('');
//   const router = useRouter();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name.trim()) {
//       router.push(`/add/${encodeURIComponent(name)}`);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">เพิ่มข้อมูลใหม่</h1>
      
//       <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
//               ชื่อ
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
          
//           <button
//             type="submit"
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
//           >
//             ยืนยัน
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }




// client/src/app/add/page.js (หน้าป้อนชื่อ - ปรับปรุงใหม่)
// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';

// export default function AddInitialPage() {
//   const [name, setName] = useState('');
//   const [generatedUrl, setGeneratedUrl] = useState(null);
//   const router = useRouter();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name.trim()) {
//       // สร้าง URL แต่ยังไม่เปลี่ยนหน้า
//       const url = `/add/${encodeURIComponent(name.trim())}`;
//       setGeneratedUrl(url);
//     }
//   };

//   // ฟังก์ชันสำหรับคัดลอกลิงก์
//   const copyToClipboard = () => {
//     const fullUrl = window.location.origin + generatedUrl;
//     navigator.clipboard.writeText(fullUrl)
//       .then(() => {
//         alert('คัดลอกลิงก์เรียบร้อยแล้ว');
//       })
//       .catch(err => {
//         console.error('ไม่สามารถคัดลอกลิงก์ได้:', err);
//       });
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">เพิ่มข้อมูลใหม่</h1>
      
//       <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
//               ชื่อ
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
          
//           <button
//             type="submit"
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
//           >
//             ยืนยัน
//           </button>
//         </form>
        
//         {/* แสดง URL ที่สร้างขึ้น (ถ้ามี) */}
//         {generatedUrl && (
//           <div className="mt-6 pt-6 border-t border-gray-200">
//             <h3 className="text-lg font-medium mb-2">ลิงก์สำหรับเพิ่มข้อมูล:</h3>
//             <div className="flex items-center mb-4">
//               <input
//                 type="text"
//                 value={window.location.origin + generatedUrl}
//                 readOnly
//                 className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none bg-gray-50"
//               />
//               <button
//                 onClick={copyToClipboard}
//                 className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-r-md border-t border-r border-b border-gray-300"
//               >
//                 คัดลอก
//               </button>
//             </div>
            
//             <Link 
//               href={generatedUrl}
//               className="w-full inline-block text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
//             >
//               ไปยังหน้าเพิ่มข้อมูล
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



// client/src/app/add/page.js (หน้าป้อนชื่อ - รองรับการสร้างหลายลิงก์)
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AddInitialPage() {
  const [name, setName] = useState('');
  const [namew, setNamew] = useState('');
  const [generatedLinks, setGeneratedLinks] = useState([]);
  const router = useRouter();

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (name.trim()) {
//       // สร้าง URL และเพิ่มเข้าไปในรายการ
//       const newUrl = `/add/${encodeURIComponent(name.trim())}`;
//       const fullUrl = window.location.origin + newUrl;
      
//       // เพิ่มลิงก์ใหม่เข้าไปในรายการ
//       setGeneratedLinks([
//         ...generatedLinks, 
//         { name: name.trim(), url: newUrl, fullUrl: fullUrl }
//       ]);
      
//       // เคลียร์ฟอร์ม
//       setName('');
//     }
//   };
const handleSubmit = (e) => {
    e.preventDefault();
  
    if (name.trim() && namew.trim()) {
        const newUrl = `/add/${encodeURIComponent(name.trim())}`;
      const fullUrl = window.location.origin + newUrl;
  
      setGeneratedLinks([
        ...generatedLinks,
        {
          name: name.trim(),
          namew: namew.trim(),
          url: newUrl,
          fullUrl: fullUrl
        }
      ]);
  
      setName('');
      setNamew('');
    }
  };
  
  // ฟังก์ชันสำหรับคัดลอกลิงก์
  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url)
      .then(() => {
        alert('คัดลอกลิงก์เรียบร้อยแล้ว');
      })
      .catch(err => {
        console.error('ไม่สามารถคัดลอกลิงก์ได้:', err);
      });
  };
  
  // ลบลิงก์ออกจากรายการ
  const removeLink = (index) => {
    const updatedLinks = [...generatedLinks];
    updatedLinks.splice(index, 1);
    setGeneratedLinks(updatedLinks);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">เพิ่มข้อมูลใหม่</h1>
      
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              ชื่อ
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

<input
              type="text"
              id="namew"
              value={namew}
              onChange={(e) => setNamew(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            สร้างลิงก์
          </button>
        </form>
        
        {/* แสดงรายการลิงก์ที่สร้างขึ้น */}
        {generatedLinks.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-3">รายการลิงก์ ({generatedLinks.length})</h3>
            
            <div className="space-y-4">
              {generatedLinks.map((link, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">
  {link.name} - {link.namew}
</h4>

                    <button
                      onClick={() => removeLink(index)}
                      className="text-red-500 hover:text-red-700 text-sm"
                      title="ลบ"
                    >
                      ลบ
                    </button>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <input
                      type="text"
                      value={link.fullUrl}
                      readOnly
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none bg-gray-50 text-sm"
                    />

<input
                      type="text"
                      value={link.namew}
                      readOnly
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none bg-gray-50 text-sm"
                    />
                    <button
                      onClick={() => copyToClipboard(link.fullUrl +" "+link.namew)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-r-md border-t border-r border-b border-gray-300"
                    >
                      คัดลอก
                    </button>
                  </div>
                  
                  {/* <Link 
                    href={link.url}
                    className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-sm"
                  >
                    ไปยังหน้าเพิ่มข้อมูล
                  </Link> */}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}










////////////////////////////////////

// // client/src/app/add/page.js (หน้าป้อนชื่อ - สร้างลิงก์หลายรายการพร้อมเวลาหมดอายุ)
// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';

// export default function AddInitialPage() {
//   const [name, setName] = useState('');
//   const [expireTime, setExpireTime] = useState('1'); // หน่วยเป็นชั่วโมง (ค่าเริ่มต้น 1 ชั่วโมง)
//   const [generatedLinks, setGeneratedLinks] = useState([]);
//   const router = useRouter();

//   // โหลดลิงก์จาก localStorage เมื่อโหลดหน้า
//   useEffect(() => {
//     const savedLinks = localStorage.getItem('generatedLinks');
//     if (savedLinks) {
//       const links = JSON.parse(savedLinks);
//       // กรองลิงก์ที่หมดอายุออก
//       const validLinks = links.filter(link => {
//         return new Date(link.expireAt) > new Date();
//       });
//       setGeneratedLinks(validLinks);
      
//       // บันทึกลิงก์ที่ยังไม่หมดอายุกลับเข้า localStorage
//       if (validLinks.length !== links.length) {
//         localStorage.setItem('generatedLinks', JSON.stringify(validLinks));
//       }
//     }
//   }, []);

//   // ตรวจสอบลิงก์ที่หมดอายุทุก 1 นาที
//   useEffect(() => {
//     const checkExpiration = setInterval(() => {
//       const currentTime = new Date();
//       const updatedLinks = generatedLinks.filter(link => {
//         return new Date(link.expireAt) > currentTime;
//       });
      
//       if (updatedLinks.length !== generatedLinks.length) {
//         setGeneratedLinks(updatedLinks);
//         localStorage.setItem('generatedLinks', JSON.stringify(updatedLinks));
//       }
//     }, 60000); // ตรวจสอบทุก 1 นาที

//     return () => clearInterval(checkExpiration);
//   }, [generatedLinks]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (name.trim()) {
//       const newUrl = `/add/${encodeURIComponent(name.trim())}`;
//       const fullUrl = window.location.origin + newUrl;
      
//       // คำนวณเวลาหมดอายุ
//       const currentTime = new Date();
//       const expireAt = new Date(currentTime.getTime() + parseInt(expireTime) * 60 * 60 * 1000); // แปลงชั่วโมงเป็น milliseconds
      
//       // สร้างลิงก์ใหม่พร้อมเวลาหมดอายุ
//       const newLink = {
//         name: name.trim(),
//         url: newUrl,
//         fullUrl: fullUrl,
//         createdAt: currentTime.toISOString(),
//         expireAt: expireAt.toISOString(),
//       };
      
//       const updatedLinks = [...generatedLinks, newLink];
//       setGeneratedLinks(updatedLinks);
      
//       // บันทึกลิงก์ลงใน localStorage เพื่อเก็บข้อมูลไว้หลังรีเฟรชหน้า
//       localStorage.setItem('generatedLinks', JSON.stringify(updatedLinks));
      
//       // เคลียร์ฟอร์ม
//       setName('');
//     }
//   };

//   // ฟังก์ชันสำหรับคัดลอกลิงก์
//   const copyToClipboard = (url) => {
//     navigator.clipboard.writeText(url)
//       .then(() => {
//         alert('คัดลอกลิงก์เรียบร้อยแล้ว');
//       })
//       .catch(err => {
//         console.error('ไม่สามารถคัดลอกลิงก์ได้:', err);
//       });
//   };
  
//   // ลบลิงก์ออกจากรายการ
//   const removeLink = (index) => {
//     const updatedLinks = [...generatedLinks];
//     updatedLinks.splice(index, 1);
//     setGeneratedLinks(updatedLinks);
//     localStorage.setItem('generatedLinks', JSON.stringify(updatedLinks));
//   };

//   // คำนวณเวลาที่เหลือ
//   const getTimeRemaining = (expireAt) => {
//     const remainingMs = new Date(expireAt) - new Date();
//     if (remainingMs <= 0) return 'หมดอายุแล้ว';
    
//     const hours = Math.floor(remainingMs / (1000 * 60 * 60));
//     const minutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
    
//     if (hours > 0) {
//       return `${hours} ชั่วโมง ${minutes} นาที`;
//     } else {
//       return `${minutes} นาที`;
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">เพิ่มข้อมูลใหม่</h1>
      
//       <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
//         <form onSubmit={handleSubmit} className="mb-6">
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
//               ชื่อ
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
          
//           <div className="mb-4">
//             <label htmlFor="expireTime" className="block text-gray-700 font-medium mb-2">
//               หมดอายุใน (ชั่วโมง)
//             </label>
//             <select
//               id="expireTime"
//               value={expireTime}
//               onChange={(e) => setExpireTime(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="1">1 ชั่วโมง</option>
//               <option value="3">3 ชั่วโมง</option>
//               <option value="6">6 ชั่วโมง</option>
//               <option value="12">12 ชั่วโมง</option>
//               <option value="24">24 ชั่วโมง (1 วัน)</option>
//               <option value="48">48 ชั่วโมง (2 วัน)</option>
//               <option value="72">72 ชั่วโมง (3 วัน)</option>
//             </select>
//           </div>
          
//           <button
//             type="submit"
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
//           >
//             สร้างลิงก์
//           </button>
//         </form>
        
//         {/* แสดงรายการลิงก์ที่สร้างขึ้น */}
//         {generatedLinks.length > 0 && (
//           <div className="mt-4">
//             <h3 className="text-lg font-medium mb-3">รายการลิงก์ ({generatedLinks.length})</h3>
            
//             <div className="space-y-4">
//               {generatedLinks.map((link, index) => (
//                 <div key={index} className="border border-gray-200 rounded-lg p-4">
//                   <div className="flex justify-between items-center mb-2">
//                     <h4 className="font-medium">{link.name}</h4>
//                     <button
//                       onClick={() => removeLink(index)}
//                       className="text-red-500 hover:text-red-700 text-sm"
//                       title="ลบ"
//                     >
//                       ลบ
//                     </button>
//                   </div>
                  
//                   <div className="text-xs text-gray-500 mb-2">
//                     เวลาที่เหลือ: {getTimeRemaining(link.expireAt)}
//                   </div>
                  
//                   <div className="flex items-center mb-3">
//                     <input
//                       type="text"
//                       value={link.fullUrl}
//                       readOnly
//                       className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none bg-gray-50 text-sm"
//                     />
//                     <button
//                       onClick={() => copyToClipboard(link.fullUrl)}
//                       className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-r-md border-t border-r border-b border-gray-300"
//                     >
//                       คัดลอก
//                     </button>
//                   </div>
                  
//                   <Link 
//                     href={link.url}
//                     className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-sm"
//                   >
//                     ไปยังหน้าเพิ่มข้อมูล
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }