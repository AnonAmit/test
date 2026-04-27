# 📁 assets/fonts

Drop any custom/local font files here.

Recommended naming convention:
- epilogue-bold.woff2
- manrope-regular.woff2

Then reference them in css/style.css using @font-face:

@font-face {
    font-family: 'Epilogue';
    src: url('../assets/fonts/epilogue-bold.woff2') format('woff2');
    font-weight: 700;
    font-display: swap;
}

Note: The site currently loads Epilogue & Manrope from Google Fonts.
Add local files here only if you want to self-host them.
