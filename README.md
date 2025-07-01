# DevePolers Games - Strona Wizytówka

Nowoczesna strona wizytówka dla firmy DevePolers Games, specjalizującej się w sprzedaży assetów i tworzeniu gier.

## 🚀 Technologie

- **Next.js 15** - React framework z App Router
- **TypeScript** - Typowane JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Linting dla jakości kodu

## 🎨 Funkcjonalności

### Sekcje strony:
- **Hero Section** - Główna sekcja z logo i przyciskami CTA
- **O nas** - Informacje o firmie i misji
- **Usługi** - Dwie główne usługi:
  - Sprzedaż assetów (grafiki, animacje, efekty, muzyka, skrypty)
  - Tworzenie gier (mobilne, PC/Console, przeglądarkowe, prototypy)
- **Kontakt** - Formularz kontaktowy i informacje
- **Footer** - Stopka z linkami prawnymi

### Design:
- Nowoczesny dark theme z gradientami
- Responsywny design (mobile-first)
- Płynne animacje i hover effects
- Miejsce przygotowane na logo (czarne tło, białe napisy)

## 🛠️ Instalacja i uruchomienie

```bash
# Instalacja zależności
npm install

# Uruchomienie w trybie deweloperskim
npm run dev

# Build produkcyjny
npm run build

# Uruchomienie wersji produkcyjnej
npm start
```

Aplikacja będzie dostępna pod adresem: `http://localhost:3000`

## 📁 Struktura projektu

```
src/
├── app/
│   ├── layout.tsx      # Layout główny z metadanymi
│   ├── page.tsx        # Strona główna
│   ├── globals.css     # Style globalne
│   └── favicon.ico     # Ikona strony
```

## 🎯 TODO - Kolejne kroki

1. **Logo** - Dodanie rzeczywistego logo firmy
2. **Funkcjonalność** - Podpięcie formularza kontaktowego
3. **Treści** - Dodanie prawdziwych portfolio/projektów
4. **SEO** - Optymalizacja meta tagów i structured data
5. **Analityka** - Integracja z Google Analytics
6. **Hosting** - Deploy na Vercel/Netlify

## 🎨 Kolory i branding

- **Główne kolory**: 
  - Niebieski: `#2563eb` do `#3b82f6`
  - Fioletowy: `#9333ea` do `#a855f7`
  - Czarny/Szary: `#000000` do `#374151`

- **Logo**: Miejsce przygotowane na czarnym tle z białymi napisami (zgodnie z wymaganiami)

## 📱 Responsywność

Strona jest w pełni responsywna i działa na:
- Desktop (1024px+)
- Tablet (768px - 1023px)  
- Mobile (320px - 767px)

## 🔧 Customizacja

Aby dostosować stronę:

1. **Kolory** - Edytuj `tailwind.config.js` lub bezpośrednio klasy w komponentach
2. **Treści** - Modyfikuj `src/app/page.tsx`
3. **Metadane** - Aktualizuj `src/app/layout.tsx`
4. **Styling** - Dodaj style w `src/app/globals.css`

---

**DevePolers Games** - Tworzymy gry, sprzedajemy assety! 🎮✨
