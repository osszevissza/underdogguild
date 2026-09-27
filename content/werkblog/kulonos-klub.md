---
title: "Az első munka: Különös Klub bemutatása"
date: 2026-09-27
---

2025 tavaszán jelentkeztem egy front-end bevezető kurzusra a [Prooktatásnál](https://www.prooktatas.hu/), az ott készült vizsgamunkám a [Különös Klub](https://klub-osszevissza.statichost.eu/), egy fiktív lovecrafti horror szerepjátékos klub weboldala.

Akkoriban még nem tarolt ennyire az AI, legalábbis azon a szinten nem, ahol most tartanak a modellek. Egyébként egészen durva fejlődés, ami szűk két év alatt lezajlott.

## Az ötlet

Hosszan gondolkoztam a tematikán, majd a rám jellemző ötlettelenségbe bevillant Az Ötlet: nem készítem el a sokadik tetováló szalon, random szolgáltatás honlapját, hanem a hobbijaim után megyek. Úgyse megrendelőnek készül, túl nagy tét sincs, lehetek akár önmagam. Sokat szerepjátékoztunk akkoriban, a lovecrafti horroroknak pedig nagy tisztelője vagyok. Gyorsan összeállt az elképzelés, milyen hangulatot szeretnék "vászonra vinni".

Egy kedves barátom nagyon sokat segített, az ő ötlete volt a gomolygó [vanta.js](https://www.vantajs.com/) köd és a hangulatot támogató betűtípusok is. Igazából az elrendezés is, hogy a menü a cím alá kerüljön középre, klasszikus módon, ne a mostanában domináns fejléc (mobilon hamburger) elrendezésben. Erre majd kitérek egy-két szóra lejjebb. A kalandok képeit is ő generálta, én csak a mesélőket és a Filter Klubot a character break szekcióban. Szóval az én legfőbb érdemem, hogy jól választok barátokat :)

## A mesélők és kalandok

Ezeket a részeket részben személyes élmények inspirálták, részben LLM ötletelés. Ez volt a legmókásabb rész, mert a karakterek véletlenül sztereotipikusak lettek:

- a jócsaj Kíra, aki feltűnik a nerd klubban és "frissességet, dinamizmust hoz a csapat életébe".
- Aztán ott a kötelező vicces karakter Brazil, akit én kreáltam egy közkedvelt kollégám mintájára.
- Végül "Nemezis", a főnök: az a kép jajj, csábító mosolya zseniális.

<figure class="post-figure">
  <a class="js-lightbox" href="/img/ksk5_nemezis.webp">
    <img src="/img/ksk5_nemezis.webp" alt="Nemezis, a klub főnöke" width="1026" height="431" loading="lazy" decoding="async">
    <span class="visually-hidden"> (teljes méretű kép)</span>
  </a>
</figure>

## Botlások

Voltak persze kezdő hibák is.

Nem volt rutinom a moduláris programozásban, ezért egy hatalmas global.css-be került minden, érthető okokból egy méreten túl a fejemre nőtt. Szándékom szerint nem korrigálok utólag, itt határeset, erősen gondolkoztam rajta. De arra jutottam, ami működik, azt ne bántsuk.

Kedves barátom említette a statikus oldalgenerátorokat - de nem tudtam pontosan, kicsit félreértettem, mit jelent és valahogy csalásként éltem meg. Mintha programmal elkészíttetnék valamit, ami a vizsgamunkában lényegében a feladatom lenne. Szóval úgy rémlik még baseof.html sincs (talán az van), minden teljesen manuálisan készült. Semmi értelme nyilván, de azt még nem tudtam 3 hónap front-end kurzus után. Néha túl "okos" vagyok.

Összességében - főleg, ha nem nézünk a motorháztető alá -, büszke vagyok az oldalra. Igényes első munka lett és tényleg élmény volt dolgozni rajta. A Prooktatásnál kiváló értékelést kapott, sajnos a honlapon található vizsgamunkák közé nem válogatták be, de erre mondják: sebaj :)

- **Elkészülési idő:** 2 hét körül
- **LLM-használat:** inkább kiegészítésként, nem dominánsan. Képeknél, JavaScript kódok egy részében, szövegeknél alapot adni, CSS-debugolásnál nem keveset.
- **Eszközök:** vanilla CSS/HTML/JS, GitHub, statichost.eu, különböző modellek

<ul class="post-gallery">
  <li>
    <figure>
      <a class="js-lightbox" href="/img/ksk1_main.webp">
        <img src="/img/ksk1_main.webp" alt="A Különös Klub nyitólapja" width="1440" height="1742" loading="lazy" decoding="async">
        <span class="visually-hidden"> (teljes méretű kép)</span>
      </a>
      <figcaption>Főoldal</figcaption>
    </figure>
  </li>
  <li>
    <figure>
      <a class="js-lightbox" href="/img/ksk2_kaland.webp">
        <img src="/img/ksk2_kaland.webp" alt="Egy kaland bemutató oldala a Különös Klubban" width="1175" height="1705" loading="lazy" decoding="async">
        <span class="visually-hidden"> (teljes méretű kép)</span>
      </a>
      <figcaption>Kaland</figcaption>
    </figure>
  </li>
  <li>
    <figure>
      <a class="js-lightbox" href="/img/ksk3_form.webp">
        <img src="/img/ksk3_form.webp" alt="A Különös Klub űrlapja" width="1007" height="1735" loading="lazy" decoding="async">
        <span class="visually-hidden"> (teljes méretű kép)</span>
      </a>
      <figcaption>Űrlap</figcaption>
    </figure>
  </li>
  <li>
    <figure>
      <a class="js-lightbox" href="/img/ksk4_kapcsolat.webp">
        <img src="/img/ksk4_kapcsolat.webp" alt="A Különös Klub kapcsolat oldala" width="1147" height="1734" loading="lazy" decoding="async">
        <span class="visually-hidden"> (teljes méretű kép)</span>
      </a>
      <figcaption>Kapcsolat</figcaption>
    </figure>
  </li>
</ul>

Nos, a menü. Nem terveztem külön fejezetet neki, de végül hosszabb lett, mint maga a projekt bemutatása :)

## A Különös Klub oldalon miért nincs fejlécben a menü (se mobilon hamburger), amikor mindenki oda teszi?

A vizsgamunka és az Underdog Guild is hobbioldal. Nincs ezres látogatottságom - igazából 100 se :) - nincs A/B tesztem, nincs túl sok ügyfelem, akinek meg kell magyarázni a döntéseimet. Ez az underdog guild szabadsága: megtehetem, hogy nem a megszokott sablont használom.

Amikor elkezdtem összerakni a vizsgaprojektemet, a struktúrához érve próbáltam kiválasztani a stílust, milyen hamburger menü legyen mobilon, ahogy mindenhol látom, csak kicsit egyedibben. De egy barátom rögtön vétózta, hogy leginkább semmilyen :)

Szóval maradtam a régimódi, középre helyezett, mindig látható menünél: felül a cím, alatta egy külön sávban középen a linkek. Mobilon sincs hamburger, csak törik két sorba.

### 1. Amit elrejtesz, azt nem használják

A legerősebb érv nem ízlés, hanem mérés, szóval utánajártam. A Nielsen Norman Group 179 emberrel, 6 valós oldalon tesztelte a rejtett / látható navigációt:

- Asztali nézetben a rejtett menüt az esetek 27%-ában használták, a láthatót 48%-ban, a részben láthatót 50%-ban. Tehát majdnem feleannyian.
- Mobilon 57% vs. 86% a kombinált, részben látható javára.
- Rejtett menüvel több mint 20%-ot esett, hogy megtalálták a keresett tartalmat, 21%-kal nehezebbnek érezték a feladatot, mint a látható menüvel (a részben láthatóhoz képest 11%-kal), asztali nézetben 39%-kal, mobilon 15%-kal lassabbak voltak.

A magyarázat egyszerű és ismerős mindenkinek: out of sight, out of mind.

A hamburger mögötti lista extra kattintás, extra gondolkodás. A ☰ ikon önmagában nem mond semmit, nem derül ki belőle, hogy bent van-e az, amit keresel.

Ezzel szemben pl. a Főoldal | Projektek | Rólam | Blog | Kapcsolat egy pillantással szkennelhető. Ezt hívják information scentnek: nem találgatnod kell, hanem felismerned.

Ráadásul egy nagy monitoron egy pici hamburger vizuálisan eltűnik.

Az egyik tesztelt oldalon, a Slate-en a látogatók csak 17%-a használta egyáltalán a navigációt (az asztali oldalak átlaga 42% volt), és átlagosan 33 másodpercbe telt, mire egyáltalán használták a navigációt, szemben a 25 mp-es asztali átlaggal. Azt hinném, ezt le se kell írni, de pont egyre több weboldalnál látom asztali nézetben is, csak azért, hogy nagyobb helye legyen a dekoráció képnek például. (Igen, HBO, te! :) )

És igen, tudom: 2025-ben már szinte mindenki felismeri a hamburger ikont. Az NN/g friss cikke szerint ez ma már nem misztikus jel.

De attól még interakciós költség marad: felismerem, de még mindig rá kell kattintanom, hogy egyáltalán lássam, van-e nekem való menüpont alatta. Ha nincs helyhiány, miért kérném ezt?

Nekem nincs helyhiányom. Néhány menüpontom van. Azok az oldalak, amiknek tényleg muszáj rejteniük, pl. BBC, Amazon, nagy hírportálok, 20+ szekcióval dolgoznak. Én nem. Nálam elfér egy sorban, mobilon két sorban.

Van itt egy pszichológiai apróság is: a mindig ugyanott lévő, mindig látható menüt második látogatásra már nem olvassák, hanem odanyúlnak. Térbeli memória.

Hogy fair legyek: nem minden "középső" jó. Ugyanaz a kutatócég kimérte, hogy középre tett logóval hatszor valószínűbb, hogy a felhasználó nem jut vissza a főoldalra egy kattintással, mert reflexből bal fent keresi.

Az 5-6 link egyszerűen törik, középre rendezve, nagy, 44px-es érintési felülettel. Nem a legmodernebb megoldás dizájner szemmel, de egy buszon, napfényben, hüvelykujjal sokkal eltalálhatóbb, mint egy jobb felső sarokba szorított ikon.

Aki sok menüponttal küzd, annak jó kompromisszum ötvözni: a néhány fontos látható link, a többi egy nagy, feliratos Menü ▼ gomb alatt.

Nem állítom, hogy a hamburger gonosz. Nagy oldalon, helyhiányban szükséges rossz, viszont egy néhány oldalas átlag honlapon fölösleges rejtegetni azt a pár szót. Én ezért tartom meg a középső, mindig látható menüt és ha tehetem, nincs hamburgerem. A saját oldalamon pedig egy egyoldalas anchor-nav van, mobil nézetben is.

Sajnos pont az utolsó megrendelői projekt bizonyítja, hogy nem mindig tehetem meg: egy fogászati rendelői oldalon 6 menüpont + infók + CTA kellett sticky fejlécben, ott mobilon a hamburger kompromisszum volt.

Nincsenek kőbe vésett szabályok, mindig alkalmazkodni kell.

## Források

A navigációs érvek nagyrészt egy műhelyhez, a Nielsen Norman Grouphoz nyúlnak vissza. Ők 2015–2016-ban mérték ezt kvantitatívan (179 fős teszt), 2025-ben pedig azt vizsgálták újra, hogy mennyire felismerhető ma a hamburger ikon. Ezért hivatkozom őket ennyit.

- [Pernice, Budiu – Hamburger Menus and Hidden Navigation Hurt UX Metrics](https://www.nngroup.com/articles/hamburger-menus/)
- [Beyond the Hamburger on Desktops](https://www.nngroup.com/articles/find-navigation-desktop-not-hamburger/) / [on Mobile](https://www.nngroup.com/articles/find-navigation-mobile-even-hamburger/)
- [Mobile First is NOT Mobile Only](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)
- [Kaplan 2025 – Hamburger icon recognizability](https://www.nngroup.com/articles/hamburger-menu-icon-recognizability/)
- [Menu-Design Checklist 2024](https://www.nngroup.com/articles/menu-design/)
- [Centered Logos Hurt Navigation](https://www.nngroup.com/articles/centered-logos/)
- [Flat UI Less Attention](https://www.nngroup.com/articles/flat-ui-less-attention-cause-uncertainty/) / [Long-Term Exposure to Flat](https://www.nngroup.com/articles/flat-design-long-exposure/) / [Low-Contrast](https://www.nngroup.com/articles/low-contrast/)
- [Erik Runyon / Notre Dame carousel](https://www.smashingmagazine.com/2015/02/carousel-usage-exploration-on-mobile-e-commerce-websites/)
- [Baymard: 10 UX Requirements for Homepage Carousels](https://baymard.com/research-articles/homepage-carousel)
