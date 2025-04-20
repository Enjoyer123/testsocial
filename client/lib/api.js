const API_URL = 'http://localhost:8000/api';

export async function getAllItems() {
  const response = await fetch(`${API_URL}/items`);
  if (!response.ok) {
    throw new Error('Failed to fetch items');
  }
  return response.json();
}

export async function getItemById(id) {
  const response = await fetch(`${API_URL}/items/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch item');
  }
  return response.json();
}

export async function createItem(data) {
  const response = await fetch(`${API_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create item');
  }
  return response.json();
}

export async function updateItem(id, data) {
  const response = await fetch(`${API_URL}/items/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to update item');
  }
  return response.json();
}

export async function deleteItem(id) {
  const response = await fetch(`${API_URL}/items/${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error('Failed to delete item');
  }
  return response.json();
}


// 2. เพิ่มฟังก์ชันใน client/src/lib/api.js
// เพิ่มฟังก์ชันใหม่สำหรับตรวจสอบชื่อ

export async function checkNameExists(name) {
    const response = await fetch(`${API_URL}/items/check-name/${encodeURIComponent(name)}`);
    if (!response.ok) {
      throw new Error('Failed to check name');
    }
    return response.json();
  }