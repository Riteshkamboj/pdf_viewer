# How to Add Files to Your PDF Viewer

## Quick Start

### Step 1: Add Your Files
Place your PDF or image files in the `PDFs/` folder.

Supported formats:
- PDFs: `.pdf`
- Images: `.jpg`, `.jpeg`, `.png`, `.gif`

### Step 2: Update files.json
Edit the `files.json` file to include your new files.

## Example files.json

```json
[
  {
    "name": "document.pdf",
    "path": "PDFs/document.pdf",
    "type": "pdf"
  },
  {
    "name": "report.pdf",
    "path": "PDFs/report.pdf",
    "type": "pdf"
  },
  {
    "name": "photo1.jpg",
    "path": "PDFs/photo1.jpg",
    "type": "image"
  },
  {
    "name": "diagram.png",
    "path": "PDFs/diagram.png",
    "type": "image"
  }
]
```

## File Entry Format

Each file entry needs three properties:

1. **name**: The display name of the file (usually the filename)
2. **path**: The relative path from the root (starts with `PDFs/`)
3. **type**: Either `"pdf"` or `"image"`

## Tips

- Make sure the `path` matches exactly where your file is located
- For images, always use type `"image"` regardless of format (jpg, png, gif)
- For PDFs, always use type `"pdf"`
- You can organize files in subfolders like `PDFs/reports/file.pdf`
- The name can be anything you want - it's what users will see

## Testing

After updating files.json:
1. Refresh your browser (or open index.html)
2. You should see your new files in the grid
3. Click on any file to view it

## Troubleshooting

**Files don't appear?**
- Check that files.json is valid JSON (use a JSON validator)
- Make sure file paths are correct
- Verify files exist in the PDFs folder

**Images don't load?**
- Check file path spelling
- Ensure image files are not corrupted
- Verify the file extension matches the actual file type

## Example: Adding a New File

If you add a file called `my-document.pdf` to the PDFs folder:

```json
[
  {
    "name": "My Document",
    "path": "PDFs/my-document.pdf",
    "type": "pdf"
  }
]
```

That's it! Your file will now appear in the viewer.
