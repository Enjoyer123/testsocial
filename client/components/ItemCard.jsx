import React from 'react';
import Link from 'next/link';
import { deleteItem } from '../lib/api';

export default function ItemCard({ item, onDelete }) {
  const handleDelete = async () => {
    if (confirm('คุณแน่ใจหรือไม่ที่จะลบรายการนี้?')) {
      try {
        await deleteItem(item.id);
        onDelete(item.id);
      } catch (error) {
        console.error('Error deleting item:', error);
        alert('เกิดข้อผิดพลาดในการลบ');
      }
    }
  };

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="text-xl font-bold mb-2">{item.name}</h2>
      <p className="text-gray-700 mb-4">{item.description || 'ไม่มีคำอธิบาย'}</p>
      
      <div className="flex justify-between mt-4">
        <Link 
          href={`/edit/${item.id}`}
          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
        >
          แก้ไข
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
        >
          ลบ
        </button>
      </div>
      
      <div className="text-xs text-gray-500 mt-2">
        สร้างเมื่อ: {item.create_at}
      </div>
    </div>
  );
}