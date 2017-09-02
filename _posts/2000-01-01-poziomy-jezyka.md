---
title: Poziomy języka
category: section
date: '2000-09-01'
---

Zapewne słyszałeś o takim pojęciu jakim jest *poziom języka programowania*, słyszysz "język niskiego poziomu" lub "wysokiego poziomu", ewentualnie angielski ekwiwalent "low" czy "high level". Nie, nie chodzi tu o poziom trudności czy skomplikowania języka.

Chodzi o poziom abstrakcji danego języka programowania.

Wyobraź sobie wieżowiec w samym sercu Nowego Jorku. Tak zobrazuję abstrakcję języka wysokiego poziomu oraz niskiego. Pisanie w języku wysokiego poziomu jest jak mieszkanie na najwyższym piętrze, a w języku niskiego poziomu - na parterze. Wieżowiec ma tylko schody, nie ma windy.  Mieszkając na parterze mamy szybki dostęp do sklepu niedaleko, do przystanku autobusowego czy stacji metra, jednak mamy paskudny widok przez okno. Natomiast z  najwyższego piętra mamy kilometry schodów do pokonania, aby dostać się do wymienionych miejsc, ale za to przepiękny miejski krajobraz. W języku niskiego poziomu mamy bardzo dużą kontrolę nad przydzielaniem pamięci, wskaźnikami, może także rzeczami jeszcze ściślej związanymi z czystymi instrukcjami procesora, jednak jest to dużo <em>surowsze</em>, przez co i mniej wygodne i wolniejsze w pisaniu niż w języku wysokiego poziomu. W językach wysokiego poziomu mamy z reguły zdecydowanie wygodniejsze biblioteki standardowe i API udostępniane przez język, przez co nie skupiamy się niepotrzebnie na przykład na implementacji stosu, tylko używamy paru predefiniowanych funkcji czy metod. Nie martwimy się o przydzielanie pamięci dla każdego kolejnego elementu stosu i tego, żeby wskaźnik wskazywał zawsze na ten najwyżej. Mamy po prostu dwie funkcje ([przykład z C#](https://msdn.microsoft.com/pl-pl/library/system.collections.stack(v=vs.110).aspx)): `Push(Object)` oraz `Pop()`.

Podsumowując: język wysokiego poziomu daje nam wygodniejszy interfejs, przez co pisze nam się szybciej i wygodniej kosztem trudniejszego (albo braku) dostępu do niżej położonych aspektów, takich jak na przykład przydzielanie pamięci, wskaźniki czy chociażby wstawki asemblerowe; język niskiego poziomu to taki, w którym mamy zdecydowanie większą kontrolę nad dostępnym sprzętem, przez co musimy się martwić o znacznie więcej rzeczy i zadbać o znacznie więcej rzeczy związanej z implementacją podstawowych rozwiązań, a nie ich użyciem, jednak z niższym poziomem zyskujemy również wydajność.
