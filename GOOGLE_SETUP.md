# Google Setup Guide - Contact Form

Follow these steps to enable email sending and spam protection using Google's free services.

## 1. Google reCAPTCHA v3 (Spam Protection)

 reCAPTCHA v3 works behind the scenes to detect bots without making users solve puzzles.

1.  Go to the [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/).
2.  Click **+** (Create) to register a new site.
3.  **Label**: `Portfolio`
4.  **reCAPTCHA type**: Select **reCAPTCHA v3**.
5.  **Domains**: Add `localhost` (for testing) and your actual domain (e.g., `japbastos.vercel.app`).
6.  Click **Submit**.
7.  **IMPORTANT**: Copy the **Site Key** and **Secret Key**. You will need them for step 3.

---

## 2. Google Apps Script (Email Bridge)

This script acts as a mini-server that receives your form data and sends an email to your Gmail account.

1.  Go to [script.google.com](https://script.google.com/).
2.  Click **New Project**.
3.  Rename it to `Contact Form Handler`.
4.  Delete any existing code and paste this:

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var name = data.name;
    var email = data.email;
    var message = data.message;
    
    var recipient = Session.getActiveUser().getEmail(); // Your Gmail
    var subject = "New Contact Form Submission from " + name;
    
    var body = "Name: " + name + "\n" +
               "Email: " + email + "\n\n" +
               "Message:\n" + message;
               
    MailApp.sendEmail(recipient, subject, body);
    
    return ContentService.createTextOutput(JSON.stringify({"result": "success"}))
                         .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({"result": "error", "error": error.toString()}))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}
```

5.  Click **Deploy** (blue button) > **New Deployment**.
6.  Select type: **Web App**.
7.  **Description**: `Contact Form v1`.
8.  **Execute as**: Me (your email).
9.  **Who has access**: **Anyone** (this is necessary so your website can talk to it).
10. Click **Deploy**.
11. **Authorize Access**: A popup will appear. Select your account -> Advanced -> Go to ... (unsafe) -> Allow.
12. **IMPORTANT**: Copy the **Web App URL** (it ends in `/exec`).

---

## 3. Configure Environment Variables

Create a file named `.env.local` in the root of your project (where `package.json` is) and add your keys like this:

```env
# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here

# Apps Script
GOOGLE_SCRIPT_URL=your_web_app_url_here
```
