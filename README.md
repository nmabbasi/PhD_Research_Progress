# Sezary Syndrome Research Analysis - Static Website

A comprehensive static website documenting PhD research on Sezary Syndrome with detailed analysis information, parameters, tools, and results.

## 🌟 Features

- **Complete Research Documentation**: All information from your research document included
- **Professional Academic Design**: Clean, responsive layout optimized for research presentation
- **Interactive Navigation**: Smooth scrolling between sections with active link highlighting
- **Search Functionality**: Built-in search to find specific content quickly
- **Print-Friendly**: Optimized for printing research documentation
- **Mobile Responsive**: Works perfectly on all devices
- **GitHub Pages Ready**: Optimized for deployment on GitHub Pages

## 📁 File Structure

```
sezary-static-website/
├── index.html          # Main website file with all content
├── styles.css          # Complete styling and responsive design
├── script.js           # Interactive features and navigation
└── README.md           # This documentation file
```

## 🚀 Quick Start

### Local Testing
1. Open `index.html` in any modern web browser
2. All content and functionality will work locally

### GitHub Pages Deployment

#### Option 1: Create New Repository
1. Create a new repository named `SezaryResearch` (or your preferred name)
2. Upload all files (`index.html`, `styles.css`, `script.js`, `README.md`)
3. Go to repository Settings → Pages
4. Select "Deploy from a branch" → "main" → "/ (root)"
5. Your site will be available at `https://yourusername.github.io/SezaryResearch`

#### Option 2: Use Existing Repository
1. Create a new branch called `gh-pages`
2. Upload all website files to this branch
3. Go to repository Settings → Pages
4. Select "Deploy from a branch" → "gh-pages" → "/ (root)"

## 📖 Content Structure

The website includes comprehensive information organized into these sections:

### 1. Research Overview
- Three main analysis approaches
- Visual cards for each research area
- Key statistics and tools used

### 2. Biomarker Analysis
- **Scientific Question**: Novel biomarkers identification
- **Computational Approach**: LIBRA with pseudobulk methods
- **Parameters Table**: Complete parameter specifications
- **Selection Criteria**: Detailed upregulated/downregulated gene criteria
- **Data Sources**: Malignant cell lines (L1-L7) vs Control samples
- **Results Link**: Direct link to GitHub analysis results

### 3. Signature Analysis
- **Multiple Scientific Questions**: Malignant vs control, patient heterogeneity, cell line variation
- **Differential Expression Tables**: Complete analysis results with p-values
- **Patient Comparisons**: Detailed patient-to-patient analysis results
- **Selection Criteria**: Comprehensive filtering and ranking criteria
- **Results Links**: Links to signature analysis and patient comparison results

### 4. Pathway Enrichment Analysis
- **Scientific Questions**: Biological processes and pathway alterations
- **Tools & Databases**: Fgsea, ClusterProfiler with 27 databases
- **Database Coverage**: GO, Reactome, KEGG, Hallmark descriptions
- **Analysis Tables**: Complete tool and parameter specifications
- **Results Links**: Direct access to pathway analysis results

### 5. Methods & Computational Tools
- **Detailed Tool Descriptions**: LIBRA, DESeq2, ClusterProfiler, Fgsea, Seurat
- **Key Features**: Comprehensive feature lists for each tool
- **Usage Information**: What each tool is used for in the analysis
- **Analysis Workflow**: Step-by-step methodology overview

### 6. Results & External Resources
- **Result Cards**: Visual presentation of all analysis results
- **GitHub Links**: Direct access to all analysis repositories
- **Statistics**: Key numbers and metrics for each analysis

## ✏️ Adding New Analysis Sections

The website includes a template section for easy expansion. To add new analysis:

1. **Copy the Template Section** (currently hidden in the HTML):
   ```html
   <!-- Find the section with id="new-analysis" and class="template-section" -->
   <!-- Copy this entire section -->
   ```

2. **Modify the Template**:
   - Change the `id` to a unique identifier (e.g., `id="metabolomics-analysis"`)
   - Remove `style="display: none;"` to make it visible
   - Update the section title and description
   - Fill in your research question, methodology, parameters, and results

3. **Add Navigation Link**:
   ```html
   <!-- In the navigation section, add: -->
   <li><a href="#metabolomics-analysis" class="nav-link">Metabolomics Analysis</a></li>
   ```

4. **Update Footer Links** (optional):
   ```html
   <!-- Add to footer navigation if desired -->
   <li><a href="#metabolomics-analysis">Metabolomics Analysis</a></li>
   ```

### Example New Section Structure:
```html
<section id="your-analysis" class="section">
    <div class="section-header">
        <h2 class="section-title">
            <i class="fas fa-your-icon"></i>
            Your Analysis Name
        </h2>
        <p class="section-description">
            Brief description of your analysis
        </p>
    </div>

    <div class="analysis-content">
        <!-- Copy content structure from existing sections -->
        <!-- Modify with your specific information -->
    </div>
</section>
```

## 🎨 Customization

### Colors and Styling
- **Primary Color**: `#667eea` (purple-blue gradient)
- **Secondary Colors**: Various complementary colors for different sections
- **Fonts**: Inter font family for modern, readable typography

### Modifying Styles
Edit `styles.css` to customize:
- **Colors**: Search for color codes and replace with your preferred palette
- **Fonts**: Change the font-family declarations
- **Layout**: Modify grid layouts, spacing, and responsive breakpoints
- **Cards**: Adjust card styles, hover effects, and animations

### Adding Icons
The website uses Font Awesome icons. To add new icons:
1. Find icons at [fontawesome.com](https://fontawesome.com/icons)
2. Use the format: `<i class="fas fa-icon-name"></i>`

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px-1199px (adjusted grid layouts)
- **Mobile**: 480px-767px (single column, optimized navigation)
- **Small Mobile**: <480px (compact layout)

## 🔍 Interactive Features

### Search Functionality
- **Location**: Top-right corner search box
- **Function**: Highlights matching text in real-time
- **Usage**: Type 3+ characters to activate search

### Navigation
- **Smooth Scrolling**: Animated scrolling between sections
- **Active Highlighting**: Current section highlighted in navigation
- **Mobile Menu**: Responsive navigation for mobile devices

### Additional Features
- **Copy Code**: Click any code element to copy to clipboard
- **Print Button**: Optimized printing with clean layout
- **Back to Top**: Floating button appears when scrolling down
- **Hover Effects**: Interactive elements with smooth animations

## 🔗 External Links

All GitHub repository links are included and functional:
- **Main LIBRA Repository**: https://github.com/neurorestore/Libra
- **Biomarkers Analysis**: https://github.com/neurorestore/Libra/Biomarkers_Analysis
- **Signature Analysis**: https://github.com/neurorestore/Libra/Signatures-pseudobulk_DE_and_Enrichement_Analysis
- **Patient Comparisons**: https://github.com/neurorestore/Libra/Pseudobulk_Patient_comparison

## 🖨️ Print Optimization

The website includes print-specific CSS for:
- **Clean Layout**: Removes navigation and interactive elements
- **Proper Page Breaks**: Sections break appropriately
- **Readable Fonts**: Optimized typography for printing
- **Color Preservation**: Important colors maintained in print

## 🔧 Technical Details

### Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Fallbacks**: Graceful degradation for older browsers

### Performance
- **Lightweight**: Minimal external dependencies
- **Fast Loading**: Optimized CSS and JavaScript
- **CDN Resources**: Font Awesome and Google Fonts from CDN

### Accessibility
- **Semantic HTML**: Proper heading structure and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: ARIA labels and semantic markup
- **Color Contrast**: WCAG compliant color combinations

## 📝 Content Management

### Updating Existing Content
1. **Open `index.html`** in any text editor
2. **Find the relevant section** using the section IDs
3. **Update text content** directly in the HTML
4. **Modify tables** by editing table rows and cells
5. **Update links** by changing href attributes

### Adding New Research Results
1. **Locate the Results section** (`id="results"`)
2. **Copy an existing result card**
3. **Modify the content** with your new results
4. **Update the GitHub link** to point to your new analysis

### Updating Parameters
1. **Find the parameters table** in the relevant analysis section
2. **Add new rows** to the table as needed:
   ```html
   <tr>
       <td><code>parameter_name</code></td>
       <td>parameter_value</td>
       <td>parameter_description</td>
   </tr>
   ```

## 🚀 Deployment Tips

### GitHub Pages Optimization
- **Repository Name**: Use a descriptive name like `SezaryResearch`
- **Branch Strategy**: Use `main` branch or dedicated `gh-pages` branch
- **Custom Domain**: Can be configured in repository settings
- **HTTPS**: Automatically enabled for GitHub Pages

### SEO Optimization
The website includes:
- **Meta Tags**: Proper title and description
- **Semantic HTML**: Search engine friendly structure
- **Fast Loading**: Optimized for search engine crawling

## 📞 Support

### Common Issues
1. **Fonts not loading**: Check internet connection for Google Fonts
2. **Icons missing**: Verify Font Awesome CDN link
3. **Styling issues**: Ensure all CSS files are in the same directory
4. **JavaScript errors**: Check browser console for specific errors

### Customization Help
- **HTML Structure**: Follow existing patterns for consistency
- **CSS Classes**: Use existing class names for consistent styling
- **JavaScript**: Modify `script.js` for additional interactive features

---

**Created for PhD Research Documentation**  
*Sezary Syndrome Molecular Analysis Framework*

This static website provides a comprehensive, professional presentation of your research that can be easily deployed to GitHub Pages and updated as your research progresses.

