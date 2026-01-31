# Joyce Wang Research Website

A replica of the Joyce Wang Research website built with HTML, CSS, and JavaScript, ready for GitHub Pages deployment.

## 📁 File Structure

```
joyce-wang-website/
├── index.html              # Home page
├── publications.html       # Journal articles page
├── about.html             # About page
├── books.html             # Books page
├── caplab.html            # CAP Lab page
├── styles.css             # Main stylesheet
├── script.js              # JavaScript for mobile menu
├── README.md              # This file
├── images/                # Image directory (you need to add)
│   └── joyce-wang.jpg     # Profile photo
├── pdfs/                  # PDF directory (you need to add)
│   └── (47+ PDF files)    # Research papers
└── cv/                    # CV directory (you need to add)
    └── joyce-wang-cv.pdf  # Downloadable CV
```

## 🚀 How to Deploy to GitHub Pages

### Step 1: Download Required Files from Original Site

Before deploying, you need to download these files from https://www.joycewangresearch.com/:

1. **Profile Photo**
   - Right-click on the profile photo and save it as `joyce-wang.jpg`
   - Place it in the `images/` folder

2. **PDF Publications** (47+ files)
   - Go to the Publications page
   - Download all PDF files
   - Place them in the `pdfs/` folder
   - Name them appropriately (match the links in publications.html)

3. **CV**
   - Download the CV PDF
   - Save it as `joyce-wang-cv.pdf`
   - Place it in the `cv/` folder

### Step 2: Create GitHub Repository

1. Go to https://github.com and sign in (or create an account)
2. Click the "+" icon in the top right → "New repository"
3. Name your repository (e.g., `joyce-wang-research`)
4. Make it **Public** (required for free GitHub Pages)
5. Click "Create repository"

### Step 3: Upload Files to GitHub

**Option A: Using GitHub Web Interface (Easiest)**

1. In your new repository, click "Add file" → "Upload files"
2. Drag and drop ALL the files from the `joyce-wang-website` folder
3. Include the folders: `images/`, `pdfs/`, `cv/`
4. Scroll down and click "Commit changes"

**Option B: Using Git Command Line**

```bash
# Navigate to the joyce-wang-website folder
cd path/to/joyce-wang-website

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/joyce-wang-research.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. In your repository, click "Settings" (top right)
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Under "Branch", select `main` and folder `/ (root)`
5. Click "Save"
6. Wait 1-2 minutes for deployment

### Step 5: Access Your Website

Your site will be live at:
```
https://YOUR-USERNAME.github.io/joyce-wang-research/
```

Replace `YOUR-USERNAME` with your actual GitHub username.

## 📝 Customization

### Updating Content

1. Edit the HTML files directly on GitHub:
   - Click on a file (e.g., `index.html`)
   - Click the pencil icon (✏️) to edit
   - Make your changes
   - Scroll down and click "Commit changes"

2. Changes will automatically deploy to your site in 1-2 minutes

### Adding New Publications

1. Upload the PDF to the `pdfs/` folder
2. Edit `publications.html`
3. Add a new entry to the PDF grid and/or publication list
4. Commit the changes

### Changing Colors/Styles

Edit `styles.css` and modify the CSS variables at the top:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --link-color: #3498db;
    /* etc. */
}
```

## 🎨 Features

- ✅ Responsive design (works on mobile, tablet, desktop)
- ✅ Mobile-friendly navigation menu
- ✅ Clean, professional academic layout
- ✅ Easy to update and maintain
- ✅ Fast loading times
- ✅ SEO-friendly structure

## 🔧 Technical Details

- **Platform**: Static HTML/CSS/JavaScript
- **Hosting**: GitHub Pages (free)
- **No dependencies**: Pure vanilla code, no frameworks needed
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: < 480px

## ⚠️ Important Notes

1. **Images and PDFs**: The site won't look complete until you add the images and PDF files
2. **File Names**: Make sure PDF file names in the HTML match your actual PDF file names
3. **Free Hosting**: GitHub Pages is free for public repositories
4. **Custom Domain** (optional): You can add a custom domain in GitHub Pages settings

## 🆘 Troubleshooting

**Site not showing up?**
- Wait 2-3 minutes after enabling GitHub Pages
- Check that your repository is Public
- Verify the branch is set to `main` and folder to `/ (root)`

**Images not loading?**
- Make sure images are in the `images/` folder
- Check that file names match exactly (case-sensitive)
- Verify files were committed to GitHub

**PDFs not downloading?**
- Ensure PDFs are in the `pdfs/` folder
- Check that file names in HTML match actual file names
- Verify PDFs were uploaded to GitHub

## 📞 Need Help?

If you run into issues:
1. Check the GitHub Pages documentation: https://docs.github.com/en/pages
2. Verify all files are uploaded correctly
3. Check browser console for errors (F12 → Console tab)

## 📄 License

This is a replica website. Please ensure you have permission to replicate the original content.

---

**Built with ❤️ for academic research dissemination**
