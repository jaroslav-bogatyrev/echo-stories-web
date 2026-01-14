# SEO and Analytics Setup Guide

This guide covers everything you need to get your website indexed by Google and track visitors.

## ✅ Already Completed

1. **Sitemap Generation**: Automatically generates `sitemap-index.xml` when you build the site
2. **robots.txt**: Updated with correct sitemap URL
3. **SEO Meta Tags**: Added Open Graph, Twitter cards, and canonical URLs
4. **Google Analytics**: Template added (needs your tracking ID)

## 🔧 Required Actions

### 1. Get Google Analytics Tracking ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for `echo-stories.cz`
3. Get your Measurement ID (format: `G-XXXXXXXXXX`)
4. Replace `G-XXXXXXXXXX` in `/src/layouts/Layout.astro` (lines 58 and 62) with your actual ID

**File to edit:** `/src/layouts/Layout.astro`
```astro
<!-- Replace G-XXXXXXXXXX with your actual tracking ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ACTUAL-ID"></script>
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR-ACTUAL-ID');
</script>
```

### 2. Submit to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add property: `https://echo-stories.cz`
3. Verify ownership using one of these methods:
   - **DNS verification** (recommended): Add a TXT record to your domain
   - **HTML file**: Download the verification file and add it to `/public/` folder
   - **HTML tag**: Add a meta tag to the Layout.astro head section
   - **Google Analytics**: If already connected, you can verify via Analytics

4. After verification, submit your sitemap:
   - URL: `https://echo-stories.cz/sitemap-index.xml`
   - Go to "Sitemaps" section and submit this URL

### 3. Deploy Your Changes

Build and deploy your updated site:

```bash
npm run build
```

Then deploy the `dist` folder to your hosting.

### 4. Monitor Indexing (After Deployment)

In Google Search Console, you can:
- Request indexing for specific pages
- Monitor crawl errors
- See search performance
- View indexed pages

**Note**: It can take 1-2 weeks for Google to fully index your site.

## 📊 What You'll Get

### Analytics Features
- Real-time visitor tracking
- Page views and session duration
- Geographic data
- Traffic sources
- Device breakdown (mobile/desktop)

### SEO Features
- Automatic sitemap generation
- Social media preview cards (Facebook, Twitter)
- Canonical URLs to prevent duplicate content
- Proper meta descriptions for search results
- Schema.org structured data support

## 🔍 Quick Test After Deployment

1. **Check sitemap**: Visit `https://echo-stories.cz/sitemap-index.xml`
2. **Check robots.txt**: Visit `https://echo-stories.cz/robots.txt`
3. **Test SEO tags**: Use [Meta Tags Checker](https://metatags.io/?url=https://echo-stories.cz)
4. **Test Analytics**: Visit your site and check real-time reports in Google Analytics

## 📝 Additional SEO Tips

### For Better Rankings:
1. Add unique descriptions to all project pages
2. Use descriptive image alt texts (already done in your code)
3. Keep content updated regularly
4. Build backlinks (share your site on social media, film databases, etc.)
5. Submit to film production directories:
   - IMDb
   - European Film Academy
   - National film databases
   - Industry platforms where you participate

### Structured Data (Future Enhancement)
Consider adding JSON-LD structured data for:
- Organization markup
- Movie/VideoObject markup for projects
- BreadcrumbList for navigation

## 🚀 Post-Launch Checklist

- [ ] Replace Google Analytics tracking ID
- [ ] Verify site in Google Search Console
- [ ] Submit sitemap to Google Search Console
- [ ] Deploy updated site
- [ ] Test sitemap accessibility
- [ ] Verify Analytics is tracking (check Real-time reports)
- [ ] Request indexing for key pages in Search Console
- [ ] Share site on social media (creates backlinks)
- [ ] Add site to film industry directories

## 📞 Need Help?

If Google Search Console shows crawl errors or if pages aren't being indexed:
1. Check that your server is returning proper HTTP status codes
2. Ensure robots.txt isn't blocking important pages
3. Verify sitemap is accessible and valid
4. Check for broken links
5. Ensure pages load quickly and are mobile-friendly

