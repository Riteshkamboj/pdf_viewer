# PDF Viewer

A basic web-based PDF viewer that displays PDF files from the `pdfs` folder.

## Features

- 📄 Display PDF files from the pdfs folder
- 🔍 Zoom in and out functionality
- 📑 Navigate between pages
- 🎨 Clean and responsive UI
- 📱 Mobile-friendly design

## Getting Started

### Prerequisites

- A web browser (Chrome, Firefox, Safari, etc.)
- A simple HTTP server (Python's built-in server or any other)

### Installation

1. Clone this repository
2. Place your PDF files in the `pdfs` folder
3. Update the `pdfFiles` array in `js/viewer.js` to include your PDF filenames

### Running the Viewer

1. Start a local web server in the project directory:
   ```bash
   python3 -m http.server 8000
   ```
   Or using Node.js:
   ```bash
   npx http-server -p 8000
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

3. Select a PDF from the dropdown menu to view it

## Usage

- **Select PDF**: Use the dropdown menu to choose which PDF to view
- **Navigate**: Click "Previous" or "Next" buttons to move between pages
- **Zoom**: Use "Zoom In" and "Zoom Out" buttons to adjust the view size
- **Page Info**: View current page number and total pages in the center

## Project Structure

```
pdf_viewer/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Styles for the viewer
├── js/
│   └── viewer.js      # PDF rendering logic
├── lib/
│   ├── pdf.min.js     # PDF.js library
│   └── pdf.worker.min.js  # PDF.js web worker
├── pdfs/
│   └── sample.pdf     # Sample PDF file (add your PDFs here)
└── README.md          # This file
```

## Adding Your Own PDFs

1. Copy your PDF files to the `pdfs` folder
2. Open `js/viewer.js` and update the `pdfFiles` array:
   ```javascript
   const pdfFiles = [
       'sample.pdf',
       'your-pdf-file.pdf',
       'another-file.pdf'
   ];
   ```
3. Refresh the browser to see your PDFs in the dropdown

## Technologies Used

- **PDF.js**: Mozilla's PDF rendering library
- **HTML5**: Canvas for PDF rendering
- **CSS3**: Modern styling and responsive design
- **JavaScript**: Interactive functionality

## License

This project is open source and available under the MIT License.
