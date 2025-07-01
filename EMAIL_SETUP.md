# Email Setup Instructions

The contact form on the DevePolers website uses **Resend** for reliable email delivery. Follow these steps to set it up:

## Option 1: Using Resend (Recommended)

### Step 1: Create Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### Step 2: Get API Key
1. Go to [API Keys](https://resend.com/api-keys) in your Resend dashboard
2. Click "Create API Key"
3. Name it something like "DevePolers Website"
4. Copy the generated API key

### Step 3: Configure Domain (Optional but Recommended)
1. Go to [Domains](https://resend.com/domains) in your Resend dashboard
2. Add your domain (e.g., `devepolers.com`)
3. Follow the DNS setup instructions
4. Wait for verification (usually takes a few minutes)

### Step 4: Update Environment Variables
1. Open `.env.local` file in the project root
2. Replace `your_resend_api_key_here` with your actual API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```
3. If you set up a custom domain, update the FROM_EMAIL:
   ```
   FROM_EMAIL=noreply@yourdomain.com
   ```
4. Update TO_EMAIL if needed:
   ```
   TO_EMAIL=devepolers@gmail.com
   ```

### Step 5: Test the Setup
1. Start the development server: `npm run dev`
2. Go to the contact form on your website
3. Fill out and submit the form
4. Check your email inbox for the message

## Option 2: Using Gmail with Nodemailer (Alternative)

If you prefer to use Gmail instead of Resend:

### Step 1: Set Up Gmail App Password
1. Enable 2-factor authentication on your Google account
2. Go to [App Passwords](https://myaccount.google.com/apppasswords)
3. Generate a new app password for "Mail"
4. Copy the 16-character password

### Step 2: Update API Route
1. Uncomment the Gmail configuration lines in `.env.local`
2. Replace the API route code back to use nodemailer (see git history)
3. Update these variables:
   ```
   EMAIL_USER=devepolers@gmail.com
   EMAIL_PASS=your_16_character_app_password
   ```

## Troubleshooting

### Common Issues:

1. **"Email service is not configured" error**
   - Make sure `RESEND_API_KEY` is set in `.env.local`
   - Restart the development server after changing environment variables

2. **"Invalid API key" error**
   - Double-check your API key in the Resend dashboard
   - Make sure there are no extra spaces in the `.env.local` file

3. **Emails not arriving**
   - Check spam folder
   - Verify the TO_EMAIL address is correct
   - Check Resend dashboard for delivery logs

4. **Domain verification issues**
   - Make sure DNS records are properly set
   - Wait up to 24 hours for DNS propagation
   - You can still send emails without domain verification (they'll be from resend.dev)

## Free Tier Limits

**Resend Free Tier:**
- 100 emails per day
- 3,000 emails per month
- Perfect for a business contact form

## Security Notes

- Never commit real API keys to version control
- The `.env.local` file is already in `.gitignore`
- Rotate API keys regularly for security

## Support

- Resend Documentation: [resend.com/docs](https://resend.com/docs)
- For issues with this setup, check the browser console and server logs