# Web3Forms Contact Form Setup

## Quick Start (5 minutes)

### Step 1: Get Your Access Key

1. Go to https://web3forms.com
2. Enter your email address (where you want to receive form submissions)
3. Click "Create Access Key"
4. Copy the access key they send you

### Step 2: Add Access Key to Project

**Option A: Environment Variable (Recommended)**

1. Create a file named `.env.local` in the project root
2. Add this line:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
   ```
3. Replace `your_actual_access_key_here` with your actual key
4. Restart the dev server

**Option B: Direct Code (Quick Test)**

1. Open `src/components/sections/ConsultationForm.tsx`
2. Find line 49: `access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',`
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual key
4. Save the file

### Step 3: Test the Form

1. Go to http://localhost:3000
2. Scroll to the contact form
3. Fill it out and submit
4. Check your email - you should receive the form submission!

## For Production (Vercel)

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add:
   - Key: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - Value: your access key
5. Redeploy

## Customization

### Change Email Template

The form sends:
- Subject: "Neue Beratungsanfrage von [Name]"
- All form fields: name, email, phone, company, annual profit, message

To customize, edit the `body` in `ConsultationForm.tsx` line 48-57.

### Change Recipient Email

1. Go to https://web3forms.com
2. Log in with your email
3. Update notification settings
4. Or create a new access key for different email

## For Client Handoff

### If keeping Web3Forms:

1. Client creates their own Web3Forms account with their email
2. Get new access key
3. Update the environment variable
4. Done!

### If replacing with custom solution:

The hosting company should replace the `onSubmit` function (lines 39-71 in `ConsultationForm.tsx`) with their preferred email handler.

## Troubleshooting

**Form not working?**
- Check access key is correct
- Verify `.env.local` exists and has correct variable name
- Restart dev server after adding `.env.local`
- Check browser console for errors

**Not receiving emails?**
- Check spam folder
- Verify email address used in Web3Forms
- Test with Web3Forms dashboard

**Need help?**
- Web3Forms docs: https://docs.web3forms.com
- Support: https://web3forms.com/support
