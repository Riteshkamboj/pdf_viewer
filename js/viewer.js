// PDF.js configuration
pdfjsLib.GlobalWorkerOptions.workerSrc = 'lib/pdf.worker.min.js';

// Global variables
let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;
let scale = 1.5;

// DOM elements
const canvas = document.getElementById('pdf-canvas');
const ctx = canvas.getContext('2d');
const pdfSelect = document.getElementById('pdf-select');
const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');
const pageNumSpan = document.getElementById('page-num');
const pageCountSpan = document.getElementById('page-count');
const zoomInButton = document.getElementById('zoom-in');
const zoomOutButton = document.getElementById('zoom-out');
const zoomLevelSpan = document.getElementById('zoom-level');
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');

// List of PDFs in the pdfs folder
const pdfFiles = [
    'sample.pdf'
    // Add more PDF files here as they are added to the pdfs folder
];

/**
 * Initialize the PDF viewer
 */
function init() {
    // Populate the PDF select dropdown
    pdfFiles.forEach(file => {
        const option = document.createElement('option');
        option.value = file;
        option.textContent = file;
        pdfSelect.appendChild(option);
    });
    
    // Event listeners
    pdfSelect.addEventListener('change', handlePdfSelect);
    prevButton.addEventListener('click', onPrevPage);
    nextButton.addEventListener('click', onNextPage);
    zoomInButton.addEventListener('click', onZoomIn);
    zoomOutButton.addEventListener('click', onZoomOut);
    
    // Auto-load first PDF if available
    if (pdfFiles.length > 0) {
        pdfSelect.value = pdfFiles[0];
        loadPdf(pdfFiles[0]);
    }
}

/**
 * Handle PDF selection change
 */
function handlePdfSelect(e) {
    const selectedPdf = e.target.value;
    if (selectedPdf) {
        loadPdf(selectedPdf);
    }
}

/**
 * Load a PDF file
 */
function loadPdf(filename) {
    showLoading();
    hideError();
    
    const url = `pdfs/${filename}`;
    
    pdfjsLib.getDocument(url).promise.then(pdf => {
        pdfDoc = pdf;
        pageNum = 1;
        pageCountSpan.textContent = pdf.numPages;
        hideLoading();
        renderPage(pageNum);
        updateButtons();
    }).catch(error => {
        hideLoading();
        showError(`Error loading PDF: ${error.message}`);
        console.error('Error loading PDF:', error);
    });
}

/**
 * Render a page
 */
function renderPage(num) {
    pageRendering = true;
    showLoading();
    
    pdfDoc.getPage(num).then(page => {
        const viewport = page.getViewport({ scale: scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };
        
        const renderTask = page.render(renderContext);
        
        renderTask.promise.then(() => {
            pageRendering = false;
            hideLoading();
            
            if (pageNumPending !== null) {
                renderPage(pageNumPending);
                pageNumPending = null;
            }
        });
    });
    
    pageNumSpan.textContent = num;
}

/**
 * Queue page rendering
 */
function queueRenderPage(num) {
    if (pageRendering) {
        pageNumPending = num;
    } else {
        renderPage(num);
    }
}

/**
 * Previous page
 */
function onPrevPage() {
    if (pageNum <= 1) {
        return;
    }
    pageNum--;
    queueRenderPage(pageNum);
    updateButtons();
}

/**
 * Next page
 */
function onNextPage() {
    if (pageNum >= pdfDoc.numPages) {
        return;
    }
    pageNum++;
    queueRenderPage(pageNum);
    updateButtons();
}

/**
 * Zoom in
 */
function onZoomIn() {
    scale += 0.25;
    updateZoomLevel();
    queueRenderPage(pageNum);
}

/**
 * Zoom out
 */
function onZoomOut() {
    if (scale <= 0.5) {
        return;
    }
    scale -= 0.25;
    updateZoomLevel();
    queueRenderPage(pageNum);
}

/**
 * Update zoom level display
 */
function updateZoomLevel() {
    const percentage = Math.round((scale / 1.5) * 100);
    zoomLevelSpan.textContent = `${percentage}%`;
}

/**
 * Update navigation buttons state
 */
function updateButtons() {
    if (!pdfDoc) {
        prevButton.disabled = true;
        nextButton.disabled = true;
        return;
    }
    
    prevButton.disabled = pageNum <= 1;
    nextButton.disabled = pageNum >= pdfDoc.numPages;
}

/**
 * Show loading indicator
 */
function showLoading() {
    loadingDiv.classList.add('show');
}

/**
 * Hide loading indicator
 */
function hideLoading() {
    loadingDiv.classList.remove('show');
}

/**
 * Show error message
 */
function showError(message) {
    errorDiv.textContent = message;
    errorDiv.classList.add('show');
}

/**
 * Hide error message
 */
function hideError() {
    errorDiv.classList.remove('show');
}

// Initialize the viewer when the page loads
document.addEventListener('DOMContentLoaded', init);
