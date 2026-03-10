# Deploying OliveWorld to Render

This guide explains how to deploy the OliveWorld website to Render.com as a static site.

## Prerequisites

- A Render.com account
- Git repository with the OliveWorld code
- All dependencies installed (`npm install`)

## Deployment Configuration

The project is already configured for Render deployment with:

1. **render.yaml** - Render service configuration
2. **Production build script** - Optimized build process
3. **Environment variables** - Production environment setup

## Deployment Steps

### 1. Push to Git Repository

Ensure your code is pushed to a Git repository (GitHub, GitLab, etc.):

```bash
git add .
git commit -m "Configure for Render deployment"
git push origin main
```

### 2. Connect to Render

1. Sign in to [Render.com](https://render.com)
2. Click "New +" and select "Static Site"
3. Connect your Git repository
4. Render will automatically detect the `render.yaml` configuration

### 3. Verify Configuration

Render will use the following settings from `render.yaml`:

- **Build Command**: `npm run build:production`
- **Publish Directory**: `./dist`
- **Node Version**: Latest (or specify in your Render dashboard)

### 4. Deploy

Click "Create Static Site" to start the deployment. Render will:

1. Install dependencies
2. Run the production build
3. Deploy the `dist` folder to their CDN

## Build Optimization

The production build includes:

- **Code splitting** - Separate vendor chunks for better caching
- **Minification** - ESBuild minification for smaller bundle sizes
- **Environment optimization** - Production environment variables
- **Asset optimization** - Compressed fonts and images

## Environment Variables

The following environment variables are configured:

- `NODE_ENV=production` - Production mode
- `VITE_APP_NAME=OliveWorld` - Application name
- `VITE_APP_DESCRIPTION=A modern cleaning services platform` - App description

## Troubleshooting

### Build Fails

1. Check the build logs in Render dashboard
2. Ensure all dependencies are in `package.json`
3. Verify TypeScript compilation: `npm run type-check`

### Deployment Issues

1. Ensure `render.yaml` is in the root directory
2. Check that the build command produces files in `./dist`
3. Verify the repository is properly connected

### Performance Issues

1. Check bundle sizes in the build output
2. Monitor Core Web Vitals in Render analytics
3. Consider adding caching headers for static assets

## Custom Domain

To use a custom domain:

1. Go to your service settings in Render
2. Add your custom domain
3. Update DNS records as instructed by Render
4. SSL certificates are automatically provisioned

## Continuous Deployment

Render automatically deploys when you push to your connected branch. To control this:

- Use branch-specific environments (staging, production)
- Set up manual deploys if needed
- Configure webhook triggers for CI/CD integration

## Monitoring

Monitor your deployed site:

- Render dashboard for service health
- Build logs for deployment issues
- Analytics for performance metrics
- Error tracking for runtime issues
