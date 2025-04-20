const express = require('express');
const router = express.Router();
const db = require('../db'); // Assuming db.js exports a MySQL connection

// Get all items
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM items ORDER BY create_at DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message+"terst" });
  }
});

// Get single item by ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM items WHERE id = ?', [req.params.id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new item
router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }
    
    const [result] = await db.query(
      'INSERT INTO items (name, description) VALUES (?, ?)',
      [name, description || '']
    );
    
    const [newItem] = await db.query('SELECT * FROM items WHERE id = ?', [result.insertId]);
    res.status(201).json(newItem[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update item
router.put('/:id', async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }
    
    await db.query(
      'UPDATE items SET name = ?, description = ? WHERE id = ?',
      [name, description || '', req.params.id]
    );
    
    const [updatedItem] = await db.query('SELECT * FROM items WHERE id = ?', [req.params.id]);
    if (updatedItem.length === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }
    
    res.json(updatedItem[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete item
router.delete('/:id', async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM items WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




// เพิ่มฟังก์ชันนี้ต่อจากโค้ดเดิม
// Check if name exists in database
router.get('/check-name/:name', async (req, res) => {
    try {
      const name = req.params.name;
      const [rows] = await db.query('SELECT COUNT(*) as count FROM items WHERE name = ?', [name]);
      
      // ส่งผลลัพธ์ว่าพบชื่อนี้ในฐานข้อมูลหรือไม่
      res.json({ 
        exists: rows[0].count > 0,
        count: rows[0].count
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;