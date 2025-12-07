# Pawgress App - Hostinger Deployment Guide

## 📁 Files Ready for Upload

Your static site files are located in the `out/` folder. These files are ready to upload to Hostinger.

## 🚀 Hostinger Deployment Steps

### Option 1: Using Hostinger File Manager (Recommended)

1. **Log in to Hostinger hPanel**
   - Go to [hostinger.com](https://hostinger.com)
   - Log into your hosting account

2. **Access File Manager**
   - In hPanel, find "File Manager" or "Files"
   - Navigate to your domain's `public_html` folder

3. **Upload Files**
   - Select all files and folders from the `out/` directory
   - Upload them to `public_html` (or your domain's root folder)
   - Make sure `index.html` is in the root of `public_html`

### Option 2: Using FTP Client (FileZilla, etc.)

1. **Get FTP Credentials**
   - In hPanel, go to "FTP Accounts"
   - Create or use existing FTP account

2. **Connect via FTP**
   - Host: Your domain or FTP hostname from hPanel
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (usually)

3. **Upload Files**
   - Navigate to `public_html` on remote server
   - Upload all contents of `out/` folder

## 📋 File Structure on Hostinger

Your `public_html` should look like this after upload:
```
public_html/
├── index.html          (main page)
├── 404.html           (error page)
├── favicon.ico        (site icon)
├── pawgress-logo.png  (your logo)
├── animations/        (Lottie animations)
├── mission/           (mission page)
├── _next/             (Next.js assets)
└── other files...
```

## 🔧 Domain Configuration

1. **If using main domain**: Upload files directly to `public_html`
2. **If using subdomain**: 
   - Create subdomain in hPanel
   - Upload files to subdomain's folder (e.g., `public_html/app/`)

## 🌐 Custom Domain Setup (Optional)

If you want a custom domain:
1. Point domain to Hostinger nameservers
2. Add domain in hPanel
3. Upload files to domain's folder

## ✅ After Upload

1. Visit your domain URL
2. Check that all pages work:
   - Homepage: `yourdomain.com`
   - Mission page: `yourdomain.com/mission/`
3. Verify animations and images load correctly

## 🛠️ Troubleshooting

- **404 errors**: Make sure `index.html` is in the correct folder
- **Missing images**: Check that all files uploaded correctly
- **Animations not working**: Ensure `animations/` folder uploaded
- **Styling issues**: Verify `_next/` folder and contents uploaded

## 📞 Support

If you encounter issues:
- Check Hostinger's knowledge base
- Contact Hostinger support
- Verify file permissions (usually 644 for files, 755 for folders)

---

**Your Pawgress app is now ready to go live on Hostinger! 🎉**