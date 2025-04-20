'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllItems } from '../lib/api';
import ItemCard from '../components/ItemCard';

export default function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const data = await getAllItems();
      console.log('Fetched items:', data);
      setItems(data);
      setError(null);
    } catch (err) {
      setError('เกิดข้อผิดพลาดในการโหลดข้อมูล');
      console.error('Error fetching items:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = (deletedId) => {
    setItems(items.filter(item => item.id !== deletedId));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">ระบบจัดการข้อมูล</h1>
        <Link
          href="/add"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          เพิ่มข้อมูล
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-10">กำลังโหลด...</div>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      ) : items.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          ไม่มีข้อมูล กรุณาเพิ่มข้อมูลใหม่
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => (
            <ItemCard key={item.id} item={item} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}