# MWM Carmaster – Astro + Cloudflare Pages

To jest statyczny projekt Astro przygotowany na podstawie istniejącej strony HTML.

## Wymagania

- Node.js `22.12.0` lub nowszy
- npm

## Start lokalny

```bash
npm install
npm run dev
```

## Build produkcyjny

```bash
npm install
npm run build
```

Gotowe pliki trafią do katalogu `dist/`.

## Wrzucenie na Cloudflare Pages

### Opcja 1: przez Git

1. Wrzuć projekt do repozytorium Git.
2. W Cloudflare przejdź do **Workers & Pages**.
3. Utwórz nowy projekt Pages z repozytorium.
4. Ustaw:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** `22.12.0`

### Opcja 2: ręczny upload buildu

```bash
npm install
npm run build
```

Następnie wrzuć zawartość katalogu `dist/` do Cloudflare Pages jako statyczną stronę.

## Struktura

- `src/layouts/BaseLayout.astro` – wspólny layout
- `src/components/` – nagłówek, stopka, subnawigacja, cookies
- `src/pages/` – podstrony
- `public/` – obrazy, CSS, JS oraz `_headers`

## Uwagi

- Zachowane zostały adresy typu `*.html`, żeby nie rozjechały się istniejące linki.
- Strona jest przygotowana jako **static Astro site**, więc nie wymaga adaptera SSR.
