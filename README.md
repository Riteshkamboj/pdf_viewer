# PDF & Image Viewer

A modern, robust web-based PDF and image viewer with automatic file discovery. Perfect for GitHub Pages deployment!

## Features

- 🎨 **Modern UI** - Beautiful gradient design with responsive layout
- 📱 **Mobile-Friendly** - Works great on all devices
- 🔍 **Search & Filter** - Easily find files with search and type filters
- 📊 **Statistics** - View counts of PDFs and images at a glance
- 🖼️ **Image Support** - View JPG, PNG, and GIF images alongside PDFs
- ⚡ **Fast & Lightweight** - Pure frontend, no backend required
- 🎯 **Easy to Use** - Just open index.html in a browser

## Getting Started

### Option 1: Open Locally
Simply open `index.html` in your web browser to start viewing files.

### Option 2: Deploy to GitHub Pages
1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Select the branch and root directory
4. Your viewer will be live at `https://username.github.io/pdf_viewer/`

## Adding Files

1. Place your PDF or image files in the `PDFs/` folder
2. Update the `files.json` file to include your new files

### Example files.json:
```json
[
  {
    "name": "document.pdf",
    "path": "PDFs/document.pdf",
    "type": "pdf"
  },
  {
    "name": "photo.jpg",
    "path": "PDFs/photo.jpg",
    "type": "image"
  }
]
```

### Supported File Types
- **PDFs**: `.pdf`
- **Images**: `.jpg`, `.jpeg`, `.png`, `.gif`

## Features in Detail

### Viewer Controls
- **Back Button** - Return to file list
- **Download** - Download the current file
- **Print** - Print PDFs directly
- **Zoom Controls** - For images (zoom in/out/reset)
- **Keyboard Shortcuts** - Use +/- keys to zoom images

### Search & Filtering
- Type in the search box to filter files by name
- Click filter tabs to show only PDFs or images
- View statistics showing total files, PDFs, and images

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Opera

## License

MIT
