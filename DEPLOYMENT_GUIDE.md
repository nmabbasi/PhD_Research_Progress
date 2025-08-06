# GitHub Pages Deployment Guide

This guide will walk you through deploying your Sezary Syndrome Research website to GitHub Pages step by step.

## 📋 Prerequisites

- GitHub account
- Basic familiarity with GitHub interface
- Your website files: `index.html`, `styles.css`, `script.js`, `README.md`

## 🚀 Method 1: New Repository (Recommended)

### Step 1: Create a New Repository

1. **Go to GitHub** and sign in to your account
2. **Click the "+" icon** in the top-right corner
3. **Select "New repository"**
4. **Repository Settings**:
   - **Repository name**: `SezaryResearch` (or your preferred name)
   - **Description**: "PhD Research on Sezary Syndrome - Analysis Documentation"
   - **Visibility**: Choose "Public" (required for free GitHub Pages) or "Private" (requires GitHub Pro)
   - **Initialize**: ✅ Check "Add a README file"
5. **Click "Create repository"**

### Step 2: Upload Your Website Files

1. **In your new repository**, click "uploading an existing file"
2. **Drag and drop** or select these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md` (will replace the default one)
3. **Commit message**: "Add Sezary Syndrome research website"
4. **Click "Commit changes"**

### Step 3: Enable GitHub Pages

1. **Go to repository Settings** (tab at the top of your repository)
2. **Scroll down to "Pages"** in the left sidebar
3. **Source Settings**:
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select "main"
   - **Folder**: Select "/ (root)"
4. **Click "Save"**

### Step 4: Access Your Website

1. **Wait 2-5 minutes** for deployment to complete
2. **Your website URL** will be: `https://yourusername.github.io/SezaryResearch`
3. **GitHub will show the URL** in the Pages settings once ready

## 🔄 Method 2: Existing Repository

If you already have a repository and want to add the website:

### Option A: Main Branch Deployment

1. **Navigate to your existing repository**
2. **Upload the website files** to the root directory
3. **Follow Step 3 from Method 1** to enable Pages

### Option B: Separate Branch (gh-pages)

1. **Create a new branch**:
   - Click "main" dropdown → "View all branches"
   - Click "New branch"
   - Name it `gh-pages`
   - Create from `main`

2. **Switch to gh-pages branch**:
   - Click the branch dropdown
   - Select `gh-pages`

3. **Upload website files** to this branch

4. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages`
   - Folder: "/ (root)"

## 🛠️ Custom Domain (Optional)

If you have your own domain:

1. **In Pages settings**, enter your domain in "Custom domain"
2. **Create a CNAME file** in your repository root with your domain
3. **Configure DNS** with your domain provider:
   - Add CNAME record pointing to `yourusername.github.io`

## 🔒 Private Repository Deployment

For private repositories (requires GitHub Pro):

1. **Follow the same steps** as above
2. **GitHub Pro required** for Pages on private repos
3. **All other steps identical**

## ✅ Verification Checklist

After deployment, verify:

- [ ] Website loads at your GitHub Pages URL
- [ ] All sections display correctly
- [ ] Navigation links work (smooth scrolling)
- [ ] External links to GitHub repositories work
- [ ] Search functionality works
- [ ] Print button functions
- [ ] Mobile responsiveness (test on phone)
- [ ] All styling appears correct

## 🔧 Troubleshooting

### Common Issues and Solutions

#### Website Not Loading
- **Wait 5-10 minutes** after enabling Pages
- **Check repository is public** (or you have GitHub Pro for private)
- **Verify files are in root directory** (not in a subfolder)

#### Styling Missing
- **Check file names**: Must be exactly `styles.css` and `script.js`
- **Verify file upload**: All files should be in the same directory
- **Check browser cache**: Try hard refresh (Ctrl+F5 or Cmd+Shift+R)

#### Links Not Working
- **External links**: Should work immediately
- **Internal navigation**: Requires JavaScript to be enabled
- **GitHub repository links**: Verify URLs are correct

#### Mobile Display Issues
- **Test on actual mobile device** or browser developer tools
- **Check viewport meta tag** (already included in the HTML)

### Getting Help

1. **GitHub Pages Status**: Check [GitHub Status](https://www.githubstatus.com/)
2. **Repository Settings**: Double-check Pages configuration
3. **Browser Console**: Check for JavaScript errors (F12 → Console)

## 📱 Testing Your Deployment

### Desktop Testing
1. **Open your GitHub Pages URL** in multiple browsers
2. **Test all navigation links**
3. **Try the search functionality**
4. **Click external GitHub links**
5. **Test print functionality**

### Mobile Testing
1. **Open on mobile device** or use browser developer tools
2. **Test responsive navigation**
3. **Verify all content is readable**
4. **Check touch interactions work**

## 🔄 Updating Your Website

### Making Changes
1. **Edit files directly on GitHub**:
   - Click on file → Edit (pencil icon)
   - Make changes → Commit

2. **Or upload new versions**:
   - Delete old file → Upload new version
   - Or use "Upload files" to replace

### Automatic Updates
- **Changes are live** within 1-2 minutes of committing
- **No need to reconfigure** Pages settings
- **Branch protection** can be set up for review process

## 📊 Analytics (Optional)

To track website visits:

1. **Google Analytics**:
   - Add tracking code to `index.html` `<head>` section
   - Configure in Google Analytics dashboard

2. **GitHub Insights**:
   - Repository → Insights → Traffic
   - Shows page views and visitor stats

## 🎯 SEO Optimization

Your website is already optimized with:
- ✅ Proper HTML structure
- ✅ Meta tags for search engines
- ✅ Semantic markup
- ✅ Fast loading times
- ✅ Mobile responsiveness

## 🔐 Security Considerations

- **HTTPS**: Automatically enabled for GitHub Pages
- **Content Security**: Only static files, no server-side vulnerabilities
- **Access Control**: Repository visibility controls who can see source code

## 📈 Next Steps

After successful deployment:

1. **Share your URL** with colleagues and supervisors
2. **Bookmark for easy access** to update content
3. **Consider custom domain** for professional appearance
4. **Regular updates** as research progresses
5. **Backup your files** locally

---

## 🎉 Congratulations!

Your Sezary Syndrome research website is now live and accessible to the world. The URL format will be:

**`https://yourusername.github.io/SezaryResearch`**

Replace `yourusername` with your actual GitHub username and `SezaryResearch` with your chosen repository name.

Your research is now professionally presented and easily shareable with the scientific community!

