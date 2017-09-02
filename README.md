# [FAQ nastoletni.pl](http://faq.nastoletni.pl)

Kod jest na licencji MIT, a treści na licencji CC-BY-SA 4.0.

## Zarządzanie kolejnością sekcji

Z racji, że używany jest Jekyll, kolejność sekcji w FAQ jest określana za pomocą dat. Pole `date` we Front Matter każdej sekcji określa kolejność wszystkich sekcji. Jeżeli chcesz, aby nowo dodana sekcja znajdowała się *na przykład* pomiędzy sekcją z datą `2000-01-07` a sekcją z datą `2000-01-08`, to nadaj nowo tworzonej sekcji datę `2000-01-07 12:00:00`, czyli datę dokładnie w połowie tych dwóch.

## Postawienie tego u siebie

Mając zainstalowanego Jekylla:

```
jekyll serve --force_polling 
```

Używając Dockera:

```
docker run -it -v %cd%:/srv/jekyll -p 4000:4000 jekyll/jekyll jekyll serve --force_polling
```