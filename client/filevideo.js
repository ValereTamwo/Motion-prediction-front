const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());

// Configuration de multer pour stocker les fichiers dans un dossier spécifique
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, 'public', 'videos', 'predict');
        fs.mkdirSync(uploadPath, { recursive: true });
        cb(null, uploadPath);
    },
     filename: (req, file, cb) => {
        // Déterminer l'extension de fichier appropriée
        const ext = path.extname(file.originalname) || '.avi'; // Par défaut à .mp4 si pas d'extension
        cb(null, `${Date.now()}${ext}`);
    }
});

const upload = multer({ storage: storage });

app.use(express.json());

// Endpoint pour recevoir et stocker un fichier Blob
app.post('/api/upload', upload.single('video'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    res.json({ url: `/home/valere/Documents/Memories/client/videos/predict/${req.file.filename}` });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
