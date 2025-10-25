# SkyBridge Deployment Guide

## GitHub Pages Deployment

This application is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Prerequisites

1. A GitHub repository
2. GitHub Pages enabled in repository settings
3. Required secrets configured in GitHub repository

### Required GitHub Secrets

Go to your repository Settings > Secrets and variables > Actions, and add these secrets:

```
VITE_SUPABASE_PROJECT_ID=pqhujeynnpebqmbthchq
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxaHVqZXlubnBlYnFtYnRoY2hxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxMzg0MTMsImV4cCI6MjA3NTcxNDQxM30.QoJkNG3KB9UqpLdVu1WTrJSiUqHHHpAfY_jqG_X-Poo
VITE_SUPABASE_URL=https://pqhujeynnpebqmbthchq.supabase.co
VITE_RESEND_API_KEY=re_NsyWj9rB_8D5s2eHctd5PFiwkqoSwWdpF
VITE_CONTACT_EMAIL=contact.skybride@gmail.com
```

### Deployment Steps

1. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Automatic Deployment**:
   - GitHub Actions will automatically build and deploy
   - Check the Actions tab for deployment status
   - Site will be available at: `https://yourusername.github.io/skybridge-ai-ops/`

### Manual Build and Deploy

If you prefer manual deployment:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# The dist/ folder contains the built application
# Upload the contents to your hosting provider
```

### Environment Configuration

- **Development**: Uses `.env` file
- **Production**: Uses `.env.production` file and GitHub secrets
- **Build**: Automatically configured for GitHub Pages base path

### Features Included

✅ **Email Functionality**: Demo requests are sent via Resend API
✅ **WhatsApp Integration**: Opens WhatsApp with pre-filled message
✅ **Responsive Design**: Works on all devices
✅ **Production Ready**: Optimized build with code splitting
✅ **SEO Optimized**: Meta tags and social sharing
✅ **Error Handling**: Comprehensive error handling and validation

### Troubleshooting

1. **Build Fails**: Check that all dependencies are installed
2. **Email Not Working**: Verify RESEND_API_KEY is correct
3. **404 on GitHub Pages**: Ensure base path is correctly configured
4. **Environment Variables**: Make sure all required secrets are set

### Custom Domain (Optional)

To use a custom domain:

1. Add your domain to the `cname` field in `.github/workflows/deploy.yml`
2. Configure DNS to point to GitHub Pages
3. Enable custom domain in repository settings

### Support

For deployment issues, check:
- GitHub Actions logs
- Browser console for errors
- Network tab for API failures