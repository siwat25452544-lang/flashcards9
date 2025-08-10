# English Trainer – Flashcards + Match + Audio (UI9)

Single-file web app for English vocabulary training. Buttons (Again/Read/Know) are placed **under the flashcard**. Supports import from local CSV/JSON **and** from URL, export sets, and offline via Service Worker.

## Deploy to GitHub Pages (New Repository)
1. Create a new **public** repository on GitHub (e.g., `flashcards9`).  
2. Upload **all files and folders** from this bundle (keep structure).  
3. Go to **Settings → Pages**:  
   - **Source**: *Deploy from a branch*  
   - **Branch**: `main` / root (`/`)  
4. Open: `https://<username>.github.io/flashcards9/?v=9`  
   (the `?v=9` busts cache on first load)

## Data format
- CSV columns: `w,th,s,cat` (split multiple example sentences in `s` using `|`)  
- JSON: `[{ "w":"happy", "th":"มีความสุข", "s":["I am happy.", "I feel happy."], "cat":"adjective" }]`

## Built-in URL Samples
- `./data/sample.csv`  
- `./data/sample.json`

## Notes
- Local uploads are saved in **localStorage** per device; not auto-synced.  
- Use **Import from URL** to load the same set on another device (e.g., your CSV in this repo).  
