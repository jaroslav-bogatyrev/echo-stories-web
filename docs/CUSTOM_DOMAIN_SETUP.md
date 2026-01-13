# Custom Domain Setup - echo-stories.cz

## ✅ Configuration Complete

Your site is configured for **echo-stories.cz**:
- `public/CNAME` → `echo-stories.cz`
- `astro.config.mjs` → `site: 'https://echo-stories.cz'`, `base: '/'`
- Build tested successfully ✓

## 📋 Steps to Deploy

### 1. Push to GitHub

```bash
git add .
git commit -m "Configure custom domain: echo-stories.cz"
git push origin master
```

### 2. Configure DNS at Your Registrar

Add these **A records** for echo-stories.cz:

| Type | Host | Value           | TTL  |
|------|------|-----------------|------|
| A    | @    | 185.199.108.153 | 3600 |
| A    | @    | 185.199.109.153 | 3600 |
| A    | @    | 185.199.110.153 | 3600 |
| A    | @    | 185.199.111.153 | 3600 |

**Optional** - Add CNAME for www (removes GitHub Pages warning):

| Type  | Host | Value                        | TTL  |
|-------|------|------------------------------|------|
| CNAME | www  | jaroslav-bogatyrev.github.io | 3600 |

**Note:** For WEDOS, enter without trailing dot. WEDOS adds it automatically.

**Common registrars:**
- **Cloudflare:** DNS → Records (set to DNS only / gray cloud)
- **Namecheap:** Domain List → Manage → Advanced DNS
- **GoDaddy:** My Products → DNS → Manage DNS

### 3. Configure GitHub Pages

1. Go to https://github.com/jaroslav-bogatyrev/echo-stories-web/settings/pages
2. Enter: `echo-stories.cz`
3. Click **Save**
4. Wait for DNS verification ✓
5. Enable **Enforce HTTPS**

### 4. Wait for DNS (15 min - 24 hours)

Check status:
```bash
dig echo-stories.cz +short
```
Or: https://www.whatsmydns.net/

### 5. Done! 🎉

Visit https://echo-stories.cz

## 🔧 Troubleshooting

**"www subdomain is improperly configured" error:**
- This is **normal** if you didn't add CNAME for www
- Your site will still work perfectly on `echo-stories.cz`
- GitHub automatically redirects `www` → main domain
- To remove error: Add CNAME record on WEDOS (see step 2 above)
- Or simply ignore it - not critical!

**DNS not resolving:**
- Clear cache: `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`
- Try incognito mode
- Wait longer (up to 24 hours)
- **Check authoritative DNS:** `dig @ns.wedos.cz echo-stories.cz +short`
  - If WEDOS returns correct IPs but your local DNS doesn't, it's just propagation delay
  - This is normal and will resolve itself within 6-24 hours

**GitHub Pages 404:**
- Verify CNAME file exists in repo
- Check custom domain is set in GitHub Pages settings

**Can't enable HTTPS:**
- Wait for DNS verification to complete
- GitHub auto-generates SSL certificate

**Cloudflare users:**
- Set proxy to "DNS only" initially
- Enable proxy after HTTPS works

## 📝 What Changed

**URLs:**
- Old: `jaroslav-bogatyrev.github.io/echo-stories-web/`
- New: `echo-stories.cz/`

**Files:**
- `public/CNAME` → `echo-stories.cz`
- `astro.config.mjs` → site + base updated

## 🔄 Rollback

To revert:
1. Delete `public/CNAME`
2. Restore `astro.config.mjs`:
   ```javascript
   site: 'https://jaroslav-bogatyrev.github.io',
   base: '/echo-stories-web',
   ```
3. Remove custom domain from GitHub Pages
4. `npm run build && git push`

