# Deployment & Scaling Guide (Finova 2.0)

## 1. Hosting (Vercel)
We recommend deploying Finova 2.0 on **Vercel** because it natively supports Next.js Server Actions and Edge networking.
1. Push this codebase to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Add the following Environment Variables in the Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Click **Deploy**. Vercel will automatically build the app and deploy it on a global CDN.

## 2. Supabase Optimization (For 1000+ Users)

### Connection Pooling
If you are expecting massive traffic spikes, standard database connections can drop. 
However, **because we use the Supabase JS Client (`@supabase/ssr`) over REST**, connection pooling is handled for you organically by Supabase's API layer. The direct REST API effectively functions as its own connection pool, meaning you will not hit the standard Postgres connection limits no matter how many users hit your site.

### Authentication & Email Limits
By default, Supabase limits Auth emails (confirmation, password resets) to **4 per hour** on their built-in SMTP server. For a launch with 100+ users, this will fail.

**Option A: Disable Email Confirmation (Recommended for Hackathons)**
If you do not have a custom domain (like `yourhackathon.com`), you cannot easily set up an external email provider. The fastest solution is to disable email confirmation.
1. Go to your Supabase Dashboard -> **Authentication** -> **Providers** -> **Email**.
2. Toggle **Confirm email** to `OFF`.
3. Hit Save.
*(Note: If you do this, we need to update the codebase to log users in immediately and skip the `/verify-email` page).*

**Option B: Setup Custom SMTP (Resend)**
If you have a custom domain and want to send real confirmation emails:
1. Create a free account at [Resend](https://resend.com/).
2. Add your custom domain and verify the DNS records.
3. Generate an API Key in Resend.
4. Go to Supabase -> **Project Settings** -> **Authentication** -> **SMTP Settings**.
5. Enable Custom SMTP:
   - Host: `smtp.resend.com`
   - Port: `465` (SSL/TLS)
   - User: `resend`
   - Password: `[YOUR_RESEND_API_KEY]`
   - Sender email: `noreply@yourdomain.com`

## 3. Launch Checklist
- Run `supabase-schema.sql` completely to establish all backend tables.
- Add initial Team/Admin data to your `operators` table.
- Test your LIVE Vercel URL to verify Database CORS policies are allowing requests.
