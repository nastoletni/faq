---
title: Matematyka w programowaniu
date: 2000-02-01
link: matematyka
category: section
---

Na jakim poziomie matematyki potrzebujesz do programowania?

Wszystko zależy przede wszystkim od tego, która gałąź programowania Cię interesuje. Jest to wręcz najważniejsza kwestia.

- Programowanie stron internetowych czy pisanie aplikacji użytkowych nie wymaga znajomości matematyki na poziomie większym, niż podstawowy. Na ogół nie ma tam nic, co mogłoby wymagać specjalnych umiejętności matematycznych i nie ma zastosowań dla aparatów matematyki wyższej, nawet podstaw. Rzadko kiedy przyda się wiedza z gimnazjum.
- Weźmy kolejny szczebel: pisanie czegoś, co ma być szybkie. Tutaj ważna jest algorytmika i matematyka dyskretna, ogólnie nacisk na znajomość i zastosowanie algorytmów, możemy przyjąć, że to część matematyki. Wówczas niebywałe szukanie optymalnych rozwiązań jest naturalne.
- Gamedev. Fizyka przydaje się na pewno. Modelowanie świata wymaga zastosowania odpowiednich narzędzi i formuł, a takie właśnie opisuje fizyka. Matematyka również jest kluczową rolą - trygonometria (na poziomie licealnym), macierze i ogólnie algebra liniowa, być może podstawy rachunku różniczkowego i całkowego, no i jeszcze raz fizyka. Silniki graficzne to jeszcze więcej rachunku różniczkowego. Dla przykładu równania antyaliasingu czy innych efektów graficznych bardzo często zawierają całki; operuje się na macierzach i tak dalej.
- AI, sztuczna inteligencja. Ogólnie przerobienie prawdopodobieństwa wymaga całek, fajna (choć może niekonieczna) jest też podstawa topologii. Dlaczego? Chociażby do tego, że metody probabilistyczne wykorzystywane są np. w sieciach neuronowych, a dla dobrego zrozumienia probabilistyki wypadałoby znać podstawy topologii. Silne powiązania między poszczególnymi dziedzinami sprawiają, że na tym szczeblu przydatna jest naprawdę spora wiedza i umiejętności matematyczne.

Zawsze znajdą się wyjątki; to tylko zarys ogólny. Na wszelki wypadek lepiej jednak matematykę umieć, gdyż powiększa ona nasze perspektywy.

### Literatura
#### Algorytmy i struktury danych
*   <cite>[Wprowadzenie do algorytmów]</cite> Thomas Cormen - podstawowa lektura każdego samouka w dziedzinie informatyki. Informacje o podstawowych algorytmach - o sztuce pisania wydajnych programów.
*   <cite>[Algorytmy + struktury danych = programy]</cite> Niklaus Wirth - często, zwłaszcza na początku nauki, nie zdajemy sobie sprawy o tym, jaką rolę pełnią struktury danych. O tym, że algorytmy są podstawą wydajnych programów, wie chyba każdy - ale ta pozycja podchodzi do programowania w pełni, ukazuje development w całości - co z resztą można wywnioskować z tytułu. Teoretyczne, ale i praktyczne podejście do wybierania, konstruowania i stosowania rozmaitych struktur i algorytmów podczas tworzenia oprogramowania.
*   <cite>[Algorytmika praktyczna. Nie tylko dla mistrzów]</cite> Piotr Stańczyk - zadania olimpijskie dzielą się na trzy typy. Na te, które (czasem po niezbyt długiej analizie) są banalne i do zrobienia przez każdego, na te, które "umiemy" zrobić (i zawsze otrzymujemy za nie mniej niż 30% przewidzianych punktów, nasz program przekracza dopuszczalny czas i popadamy w paranoję) i na te, które są czystą abstrakcją. Książka ta jest "do rany przyłóż" - traktuje o algorytmach i strukturach w podejściu stricte konkursowym, będąc obowiązkową lekturą dla olimpijczyków. "[Algorytmika praktyczna w konkursach informatycznych]" to tytuł pracy magistrskiej autora, dostępnej za darmo na stronie Uniwersytetu Mikołaja Kopernika w formacie PDF - również polecana jako przygotowanie w olimpiadach

#### Matematyka
*   <cite>[Rachunek rózniczkowy i całkowy]</cite> Grigorij Fichtenholz - podstawowa pozycja aspirującego matematyka, ambitna lektura obejmująca to, co potrzebne jest przy tworzeniu gier czy pracy nad sztuczną inteligencją.
*   <cite>Analiza matematyczna 1: definicje, twierdzenia, wzory</cite> Marian Gewert, Zbigniew Skoczylas - podręcznik matematyczny, zwięzły wykład rachunku różniczkowego i całkowego. Niezbędne minimum w bardziej wymagających gałęziach informatyki.
*   <cite>Algebra liniowa 1: definicje, twierdzenia, wzory</cite> Teresa Jurlewicz, Zbigniew Skoczylas - kolejna pozycja, w której omówione są podstawy matematyki wyższej niezbędne do tworzenia gier czy inteligentnych programów. Rachunek wektorowy i macierzowy, geometria analityczna - absolutne minimum.

O dwie ostatnie pozycje ciężko w internetowych księgarniach, warto rozglądać się na portalach z książkami używanymi oraz w bibliotekach (zwłaszcza uczelni technicznych).

[Wprowadzenie do algorytmów]: https://helion.pl/ksiazki/wprowadzenie-do-algorytmow-cormen-thomas-h-leiserson-charles-e-rivest-rol,a_006d.htm
[Algorytmy + struktury danych = programy]: http://www.empik.com/algorytmy-struktury-danych-programy-wirth-niklaus,307409,ksiazka-p
[Algorytmika praktyczna. Nie tylko dla mistrzów]: https://helion.pl/ksiazki/algorytmika-praktyczna-nie-tylko-dla-mistrzow-stanczyk-piotr,a_0056.htm
[Algorytmika praktyczna w konkursach informatycznych]: http://www-users.mat.umk.pl/~stencel/acm/algorytmika_praktyczna.pdf
[Rachunek rózniczkowy i całkowy]: https://ksiegarnia.pwn.pl/Rachunek-rozniczkowy-i-calkowy-Tom-1,68704455,p.html
