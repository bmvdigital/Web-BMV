# 📤 Guía de Despliegue en Hostgator cPanel

## ¿Qué archivo subo?

La carpeta **`out/`** generada por `npm run build` contiene todo lo que necesitas.

```
out/
├── index.html                    ← Página de inicio
├── sitemap.xml                   ← Mapa del sitio (para Google)
├── robots.txt                    ← Configuración para buscadores
├── .htaccess                     ← Configuración Apache (HTTPS, rutas limpias)
├── favicon.svg                   ← Logo favorito navegador
├── apple-touch-icon.svg          ← Logo para iOS
├── servicios/
│   ├── index.html               ← Página de servicios
│   ├── desarrollo-web/index.html
│   ├── analisis-datos/index.html
│   ├── desarrollo-software/index.html
│   ├── auditoria-seo/index.html
│   ├── auditoria-geo/index.html
│   └── cursos-ia/index.html
├── portafolio/
│   └── index.html               ← Página de portafolio
├── contacto/
│   └── index.html               ← Página de contacto
├── 404/
│   └── index.html               ← Página de error personalizada
└── _next/
    └── static/                  ← CSS, JS, fonts (hashed, seguros cachear 1 año)
```

---

## 📋 Pasos para subir en cPanel Hostgator

### 1. **Entra a tu cPanel**
   - URL: `https://tudominio.com:2083` (o usa el enlace de Hostgator)
   - Usuario: tu email o usuario cPanel
   - Contraseña: tu contraseña cPanel

### 2. **Abre el Administrador de Archivos**
   - En cPanel, busca **"File Manager"**
   - Click → Se abre en una nueva pestaña

### 3. **Navega a `public_html`**
   - En la columna izquierda, selecciona `public_html`
   - IMPORTANTE: **Asegúrate de que la carpeta esté VACÍA** (o guarda una copia si ya tienes contenido)

### 4. **Sube los archivos**
   
   **Opción A: Subir carpeta `out/` completa (RECOMENDADO)**
   - En tu PC: ve a `/home/user/Web-BMV/out/`
   - Selecciona TODO el contenido (Ctrl+A)
   - Arrastra y suelta en cPanel File Manager → `public_html/`
   - O usa el botón **Upload** en cPanel

   **Opción B: Comprimir primero (más rápido si conexión es lenta)**
   ```bash
   # En tu PC/Mac/Linux:
   cd /home/user/Web-BMV/out
   zip -r bmv-digital-site.zip .   # Comprime TODO
   ```
   - Sube el `bmv-digital-site.zip` a `public_html/`
   - En cPanel, haz click derecho → **Extract**

### 5. **Verifica que `.htaccess` se subió**
   
   En cPanel File Manager:
   - Click en **Settings** (esquina superior derecha)
   - Marca ✓ **"Show Hidden Files"**
   - Deberías ver `.htaccess` en la lista
   - Si no está, sube `out/.htaccess` manualmente

### 6. **Prueba en el navegador**
   ```
   https://bmvdigital.com.mx          ← Home
   https://bmvdigital.com.mx/servicios/    ← Servicios
   https://bmvdigital.com.mx/contacto/     ← Contacto
   ```

   ⚠️ **Si ves errores 404 o la página no carga:**
   - Espera 5-10 minutos (DNS propagación)
   - Limpia caché del navegador (Ctrl+Shift+Del)
   - Si persiste: revisa que `.htaccess` esté en `public_html/`

---

## 🔍 Lista de Archivos Críticos

| Archivo | Ubicación | Qué hace | Crítico |
|---------|-----------|----------|---------|
| `index.html` | `/public_html/` | Página principal | ✅ Sí |
| `.htaccess` | `/public_html/` | Redirige HTTP→HTTPS, rutas limpias | ✅ Sí |
| `sitemap.xml` | `/public_html/` | Mapa para Google Search Console | ✅ Sí |
| `robots.txt` | `/public_html/` | Reglas para buscadores y IA | ✅ Sí |
| `favicon.svg` | `/public_html/` | Logo navegador | 🟡 Recomendado |
| `_next/static/` | `/public_html/_next/static/` | Estilos y scripts | ✅ Sí |
| Carpetas `servicios/`, `portafolio/`, `contacto/` | `/public_html/` | Páginas de servicios | ✅ Sí |

---

## ⚙️ Configuración Post-Despliegue

### 1. **Google Search Console**
   - Ve a: https://search.google.com/search-console
   - Añade tu dominio
   - Ve a **Sitemaps**
   - Envía: `https://www.bmvdigital.com.mx/sitemap.xml`

### 2. **Verifica robots.txt**
   - Abre: https://www.bmvdigital.com.mx/robots.txt
   - Deberías ver:
     ```
     User-agent: *
     Allow: /
     ...
     Sitemap: https://www.bmvdigital.com.mx/sitemap.xml
     ```

### 3. **DNS y HTTPS**
   - Hostgator proporciona **Let's Encrypt SSL gratis**
   - Ve a cPanel → **AutoSSL**
   - Instala certificado (debe estar ya hecho)
   - El `.htaccess` forzará HTTPS automáticamente

### 4. **Performance**
   - `.htaccess` habilita **gzip compression** → páginas cargan más rápido
   - CSS/JS están hashed → seguros cachear 1 año sin actualizar
   - Imágenes SVG son ligeras

---

## 🆘 Troubleshooting

### Problema: "404 Not Found"
**Causa:** `.htaccess` no está en `public_html/` o no se subió bien

**Solución:**
1. En cPanel File Manager, entra a `public_html/`
2. Haz click en **Settings** → ✓ **Show Hidden Files**
3. Deberías ver `.htaccess`
4. Si no está: sube manualmente `out/.htaccess`

### Problema: "HTTPS no funciona / página no carga"
**Causa:** Propagación DNS o certificado SSL

**Solución:**
1. Espera 15-30 minutos
2. En otra pestaña: `http://bmvdigital.com.mx` (sin S)
   - Si funciona: es problema de HTTPS
   - Revisa cPanel → AutoSSL
3. Limpia caché: Ctrl+Shift+Del

### Problema: "Las imágenes/estilos no cargan"
**Causa:** Ruta de `_next/static/` mal

**Solución:**
1. Verifica que `_next/` esté en `public_html/_next/`
2. No debería estar en una subcarpeta más profunda
3. Si está mal:
   - Corta `_next/` desde donde esté
   - Pégalo directo en `public_html/`

---

## ✅ Checklist Final

- [ ] Contenido de `out/` subido a `public_html/`
- [ ] `.htaccess` visible en `public_html/` (con "Show Hidden Files" activado)
- [ ] `https://bmvdigital.com.mx/` carga correctamente
- [ ] `https://bmvdigital.com.mx/servicios/` funciona
- [ ] `https://bmvdigital.com.mx/contacto/` funciona
- [ ] `https://bmvdigital.com.mx/sitemap.xml` es accesible
- [ ] `https://bmvdigital.com.mx/robots.txt` es accesible
- [ ] Sitemap enviado a Google Search Console
- [ ] HTTPS está activo (verde 🔒 en navegador)
- [ ] Favicon aparece en pestaña del navegador

---

## 📞 Soporte Hostgator

Si tienes problemas:
- **Chat en vivo:** Entra a tu cuenta Hostgator → Support
- **Email:** support@hostgator.com
- **Teléfono:** +1-866-HOSTGATOR

**Dile:** "Mi sitio estático Next.js no carga desde `public_html/`. Me da 404 en rutas como `/servicios/`."

Hostgator verá que tienes `.htaccess` correctamente y debería funcionar.

---

**¡Tu sitio está listo para ir en vivo! 🚀**
