# GUIDELINE FOR WEB

Dokumen ini adalah panduan implementasi website Memorie untuk tiga kebutuhan utama:
1. Landing page direction untuk LLM Coder.
2. Draft konten halaman Terms, Privacy, dan Support.
3. Checklist integrasi URL legal/support ke aplikasi iOS.

Dokumen ini melengkapi PRD dan fokus pada eksekusi web.

## 1. Goal and Scope

### 1.1 Goal
Membuat website yang:
1. Menyampaikan narasi brand Memorie secara emosional dan jelas.
2. Menyediakan halaman legal dan support yang siap dipublikasikan.
3. Menjadi sumber URL stabil untuk konfigurasi aplikasi iOS.

### 1.2 Scope
1. Public landing page.
2. Public Terms page.
3. Public Privacy page.
4. Public Support page.

## 2. Brand Direction for Landing Page

### 2.1 Brand narrative
1. Memorie menjaga rasa sebuah tempat, bukan sekadar gambar.
2. Pengguna mendokumentasikan wall dan artifact personal agar cerita ruang hidup tetap ada.
3. Nilai akhir: lega, hangat, dan merasa punya arsip hidup yang bermakna.

### 2.2 Messaging pillars
1. Keep places alive.
2. Private by default.
3. Curate your life.
4. Built for years, not moments.

### 2.3 Tone of voice
1. Hangat dan personal.
2. Ringkas dan mudah dipahami.
3. Emosional secukupnya, tidak melodramatis.
4. Tidak overclaim.

## 3. Visual and UI Guideline

### 3.1 Vibe
1. Warm.
2. Intimate.
3. Calm.
4. Crafted.
5. Nostalgic-modern.

### 3.2 Color palette
#### Core palette
1. Memorie Canvas: #F6F1E8
2. Memorie Sand: #E8DCCB
3. Memorie Clay: #C9A989
4. Memorie Moss: #5F6F52
5. Memorie Ink: #1F1B16
6. Memorie Fog: #FBF8F4

#### Dark palette
1. Memorie Night: #141210
2. Memorie Charcoal: #1E1A17
3. Memorie Dust: #BFA58A
4. Memorie Olive Glow: #8FA07A
5. Memorie Paper: #F4EEE6

#### Semantic token intent
1. color.bg.primary: Canvas (light) or Night (dark)
2. color.bg.secondary: Sand (light) or Charcoal (dark)
3. color.surface.card: Fog (light) or Charcoal elevated (dark)
4. color.text.primary: Ink (light) or Paper (dark)
5. color.text.secondary: reduced emphasis of primary text
6. color.action.primary: Moss (light) or Olive Glow (dark)
7. color.action.onPrimary: Paper (light) or Night (dark)
8. color.divider: subtle neutral with minimum contrast 3:1

### 3.3 Typography
1. Headline font recommendation: Fraunces or Cormorant Garamond.
2. Body and UI font recommendation: Manrope or Plus Jakarta Sans.
3. Hero size: 48-64 px desktop, 34-42 px mobile.
4. Section heading size: 30-40 px desktop, 24-30 px mobile.
5. Body size: 16-18 px.

### 3.4 Accessibility rules
1. Body text minimum contrast 4.5:1.
2. Large text minimum contrast 3:1.
3. Primary button contrast harus jelas di light dan dark.
4. Status tidak boleh mengandalkan warna saja.
5. Pastikan keyboard focus visible pada semua control interaktif.

## 4. Landing Page Implementation Brief for LLM Coder

### 4.1 Information architecture
Urutan section yang disarankan:
1. Hero.
2. Problem.
3. Solution.
4. Trust.
5. Plan.
6. FAQ.
7. Footer legal and support.

### 4.2 Section detail and copy intent
1. Hero:
   - One-liner nilai emosional.
   - Sub-copy manfaat praktis.
   - Satu primary CTA dan satu secondary CTA.
2. Problem:
   - Tunjukkan gap antara gallery biasa dan kebutuhan memori ruang.
3. Solution:
   - Jelaskan alur Capture, Curate, Revisit.
4. Trust:
   - Tekankan privacy-first dan kontrol pengguna.
5. Plan:
   - Jelaskan Free vs Essential Lifetime secara jernih.
6. FAQ:
   - Jawab keberatan umum tentang privasi, backup, pembelian.

### 4.3 Suggested CTA
1. Primary: Start Preserving My Memories.
2. Secondary: Explore How It Works.
3. Alternate Bahasa Indonesia: Mulai Simpan Kenanganku.

### 4.4 Words to avoid
1. Unlimited forever tanpa konteks.
2. Guaranteed never lost.
3. Best app.

### 4.5 Motion and interaction
1. Gunakan motion halus untuk reveal section dan card.
2. Durasi 300-500 ms, easing lembut.
3. Hindari animasi berlebihan yang mengganggu readability.
4. Respect prefers-reduced-motion.

### 4.6 Suggested stack
1. Next.js atau Astro.
2. Styling dengan CSS variables agar token warna konsisten.
3. Deploy di platform dengan HTTPS default.

## 5. Draft Copy for Terms, Privacy, and Support

Catatan penting:
1. Draft ini adalah baseline produk dan konten web.
2. Lakukan legal review sebelum publish final.

## 5.1 Draft Terms and Conditions

Title:
Memorie Terms and Conditions

Effective Date:
March 31, 2026

Body:
Welcome to Memorie. By using Memorie, you agree to these Terms and Conditions.

1. Service Overview
Memorie helps users capture and curate visual memories connected to physical spaces.

2. Eligibility
You are responsible for ensuring that your use of Memorie complies with applicable laws.

3. Your Content
You retain ownership of the photos, artifacts, and related content you create or import in Memorie.

4. Acceptable Use
You agree not to use Memorie for unlawful, harmful, or infringing activities.

5. Purchases
Memorie may offer paid features such as Memorie Essential (Lifetime). Pricing and feature limits are shown in-app and may be updated in future releases.

6. Backups and Restoration
Backup and restore features are provided to help preserve your data. You remain responsible for maintaining safe backup practices.

7. Disclaimer
Memorie is provided on an as-is basis to the extent allowed by applicable law.

8. Limitation of Liability
To the extent permitted by law, Memorie is not liable for indirect or consequential damages.

9. Updates to Terms
We may update these Terms from time to time. Continued use after updates means you accept the revised Terms.

10. Contact
For questions about these Terms, contact us at:
[replace-with-support-email]

## 5.2 Draft Privacy Policy

Title:
Memorie Privacy Policy

Effective Date:
March 31, 2026

Body:
Memorie is designed with a privacy-first approach.

1. Data We Process
Memorie processes content you create or import, such as wall images, artifact images, and metadata needed for app functionality.

2. Data Storage
Your core collection data is stored on your device by default.

3. Permissions
Memorie requests camera and photo library access only to support capture and import features.

4. Purchases
If you make in-app purchases, payment and transaction handling are processed by Apple under Apple policies.

5. Backups
When you export backups, you control where backup files are saved and how they are managed.

6. Data Sharing
Memorie does not sell your personal memory content.

7. Security
We implement reasonable measures to protect app data, but no method is 100 percent risk-free.

8. Your Controls
You can manage your collection, backups, and app permissions from your device settings and in-app flows.

9. Policy Updates
We may update this Privacy Policy as the product evolves. Updated versions will be posted on this page.

10. Contact
For privacy questions, contact:
[replace-with-privacy-email]

## 5.3 Draft Support Page

Title:
Memorie Support

Body:
Need help with Memorie? We are here to support you.

1. Common Topics
- Capture and curation setup.
- Plan and purchase restore.
- Backup export and restore.
- Troubleshooting visual or performance issues.

2. How to Contact Support
Email:
[replace-with-support-email]

Please include:
- Device model.
- iOS version.
- App version.
- Short description of the issue.
- Steps to reproduce.

3. Response Time
We aim to respond within 2-5 business days.

4. Helpful Note
Do not include sensitive personal information in support emails.

## 6. URL Structure Recommendation

Gunakan URL stabil berikut:
1. https://your-domain.com/terms
2. https://your-domain.com/privacy
3. https://your-domain.com/support

Jika domain final adalah memorie.app, gunakan:
1. https://memorie.app/terms
2. https://memorie.app/privacy
3. https://memorie.app/support

## 7. iOS App Integration Checklist

### 7.1 Required keys
Set value berikut di Build Settings atau Info configuration:
1. MEMORIE_TERMS_URL
2. MEMORIE_PRIVACY_URL

Recommended additional key:
1. MEMORIE_SUPPORT_URL

### 7.2 Integration steps
1. Tentukan domain final web production.
2. Publish halaman terms, privacy, support.
3. Isi URL final ke app config.
4. Build Release.
5. Uji tombol Terms and Privacy pada paywall.
6. Pastikan Safari view membuka halaman yang benar tanpa redirect error.

### 7.3 Validation checklist
1. Semua URL menggunakan HTTPS.
2. Semua URL return status 200.
3. Halaman dapat diakses tanpa login.
4. Konten legal memiliki effective date.
5. Footer web menampilkan link Terms, Privacy, Support.

## 8. Ready-to-Use Prompt for LLM Coder

Gunakan prompt ini untuk implementasi landing page:

Build a production-ready marketing website for Memorie with these requirements:
1. Use warm, intimate, nostalgic-modern visual direction.
2. Follow this palette:
   - Light: #F6F1E8, #E8DCCB, #C9A989, #5F6F52, #1F1B16, #FBF8F4
   - Dark: #141210, #1E1A17, #BFA58A, #8FA07A, #F4EEE6
3. Use semantic CSS variables for background, surface, text, action, and divider.
4. Implement sections in this order: Hero, Problem, Solution, Trust, Plan, FAQ, Footer.
5. Keep copy tone warm, personal, and simple.
6. Include visible CTA in hero and plan section.
7. Ensure mobile-first layout and WCAG-friendly contrast.
8. Add legal/support pages at /terms, /privacy, and /support with clear readable typography.
9. Avoid generic stock visual style and keep spacing editorial and premium.
10. Output complete code and file structure for deployment.

## 9. Final Pre-Publish Checklist

1. Legal review completed.
2. Privacy review completed.
3. Support email active and monitored.
4. Terms, Privacy, Support pages live on production domain.
5. App keys MEMORIE_TERMS_URL and MEMORIE_PRIVACY_URL filled with production URLs.
6. App release build and archive pass.
