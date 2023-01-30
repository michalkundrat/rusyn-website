<template>
    <div>
        <h1 class="text-center text-h4 pt-4">Rusyn Cyrillic Alphabet</h1>
        <h2 class="text-h5 px-9 pb-6"><b>On this page:</b></h2>
        <v-row>
            <v-btn @click="$vuetify.goTo('#what-is-cyrillic')" rounded class="grey lighten-2 ml-12 mb-3">What is Cyrillic?</v-btn>
            <v-btn @click="$vuetify.goTo('#why-to-learn-cyrillic')" rounded class="grey lighten-2 ml-2 mb-3">Why should I learn Cyrillic?</v-btn>
            <v-btn @click="$vuetify.goTo('#the-alphabet')" rounded class="grey lighten-2 ml-2 mb-3">The alphabet</v-btn>
            <v-btn @click="$vuetify.goTo('#similar-to-latin')" rounded class="grey lighten-2 ml-2 mb-3">Similar to Latin</v-btn>
            <v-btn @click="$vuetify.goTo('#same-but-different')" rounded class="grey lighten-2 ml-2 mb-3">Same, but different</v-btn>
            <v-btn @click="$vuetify.goTo('#english-sound-rusyn-letter')" rounded class="grey lighten-2 ml-2 mb-3">English sound, Rusyn letter</v-btn>
            <v-btn @click="$vuetify.goTo('#compound-sounds')" rounded class="grey lighten-2 ml-2 mb-3">Compound sounds</v-btn>
            <v-btn @click="$vuetify.goTo('#rusyn-sound-rusyn-letter')" rounded class="grey lighten-2 ml-2 mb-3">Rusyn sound, Rusyn letter</v-btn>
        </v-row>
        <p id="what-is-cyrillic" class="text-body-1 mt-1 pt-3 px-9">
            The Cyrillic script is a writing system used in various languages across Eurasia.
            It may also be referred to as the Slavonic script or the Slavic script, and it is
            the designated national script in many countries, notably Slavic countries.
            It has 250 million users as of 2019, a clear sign that the script is one which
            is very important to a multitude of countries.
        </p>
        <p id="why-to-learn-cyrillic" class="text-body-1 px-9">
            It is vital for the learners of the Rusyn language to learn how to use the Cyrillic
            script, as it enables clear communication and prevents misunderstanding, particularly
            with natives.<br>
            Though some people still choose to use the Latin alphabet to communicate in Rusyn, this
            is a poor choice, as (with the amount of transliteration and approximation options there
            are) some people will be confused by what you are saying - especially some natives who
            do not speak a language which uses the Latin alphabet!
        </p>

        <v-container id="the-alphabet">
            <v-row>
                <v-flex class="pl-3 pb-3" v-for="letter in alphabet" :key="letter" xs1>
                    <v-card class="" outlined>
                        <v-card-text class="text-center text-body-1">
                            <p>{{ letter.cyrillic }}</p>
                            <p>{{ letter.name }}</p>
                            <p>{{ letter.romanisation }}</p>
                            <p>{{ letter.ipa }}</p>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-row>
        </v-container>

        <v-container id="similar-to-latin">
            <p class="text-h5">Similar to Latin</p>
            <p class="body-1">
                These letters are all the same or similar to their
                Latin alphabet counterparts. These will be the easiest for a
                native English speaker to learn.
            </p>
            <v-row>
                <v-flex class="pl-3 pb-3" v-for="letter in same" :key="letter" xs1>
                    <v-card class="" outlined>
                        <v-card-text class="text-center text-body-1">
                            <p>{{ letter.cyrillic }}</p>
                            <p>{{ letter.name }}</p>
                            <p>{{ letter.romanisation }}</p>
                            <p>{{ letter.ipa }}</p>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-row>
        </v-container>

        <v-container id="same-but-different">
            <p class="text-h5">Same but different</p>
            <p class="body-1">
                These letters exist in Latin and will likely be
                the most annoying for you! However, it's good to
                begin learning these early, so that you consolidate
                their differences against their counterparts in the
                Latin script.
            </p>
            <v-row>
                <v-flex class="pl-3 pb-3" v-for="letter in sameButDifferent" :key="letter" xs1>
                    <v-card class="" outlined>
                        <v-card-text class="text-center text-body-1">
                            <p>{{ letter.cyrillic }}</p>
                            <p>{{ letter.name }}</p>
                            <p>{{ letter.romanisation }}</p>
                            <p>{{ letter.ipa }}</p>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-row>
        </v-container>

        <v-container id="english-sound-rusyn-letter">
            <p class="text-h5">English sound, Rusyn letters</p>
            <p class="body-1">
                These sounds are present in English, and you'll likely not struggle
                too much with learning how to pronounce these phonemes. However,
                don't think this is easy, as the letters are nothing
                like things you'll have seen in English!<br>
                P.S. Some of these have little tricks for you to use to learn the letters
                more easily!
            </p>
            <v-row>
                <v-col justify="center" align="center" cols="2">
                    <p style="font-size: 5em;">Гг</p>
                </v-col>
                <v-col cols="3">
                    <p class="text-body-1">
                        This letter is one of the harder ones to remember, but at least
                        it has a sound which English speakers are already familiar with:
                        it makes the same sound as "h" in English.<br>
                        However, some people confuse this with the Russian Гг, which makes
                        a "g" sound.
                    </p>
                </v-col>

                <v-col justify="center" align="center" cols="2">
                    <p style="font-size: 5em;">Ґґ</p>
                </v-col>
                <v-col cols="3">
                    <p class="text-body-1">
                        This letter is very similar to the last one (see left).
                        Therefore, if you learn the one before, you can just learn
                        that the flick on the right side just makes the "h" sound harder - 
                        making it into a "g".
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col justify="center" align="center" cols="2">
                    <p style="font-size: 5em;">Дд</p>
                </v-col>
                <v-col cols="3">
                    <p class="text-body-1">
                        I used a trick to allow me to remember this letter more easily.
                        If you already are familiar with certain Slavic languages, then
                        you may know that the word "dom/дом" means house. Helpfully, this 
                        letter looks a little bit like a short house with a very tall roof.
                    </p>
                </v-col>

                <v-col justify="center" align="center" cols="2">
                    <p style="font-size: 5em;">Зз</p>
                </v-col>
                <v-col cols="3">
                    <p class="text-body-1">
                        This sound is present in English, which may make it easier to learn - 
                        think of common words like "is" and "use".
                        To add, it looks like a number 3, so it may help you to associate
                        the number 3 with the sound z/з.
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col justify="center" align="center" cols="2">
                    <p style="font-size: 5em;">Ии</p>
                </v-col>
                <v-col cols="3">
                    <p class="text-body-1">
                        A reasonably common sound in English, (present in words like
                        "ship", "sit" or "if") this should be reasonably memorable.
                        However, it looks like a backwords capital N, which makes it a
                        little bit harder for you to remember.
                    </p>
                </v-col>

                <v-col justify="center" align="center" cols="2">
                    <p style="font-size: 5em;">Йй</p>
                </v-col>
                <v-col cols="3">
                    <p class="text-body-1">
                        This sound is a little less common in English (used in words 
                        like jab and jungle), but is easy enough to remember if you 
                        link it with the Ии. This is a little bit like an Ии sound, 
                        but still quite different, as it is a semivowel, not a vowel.
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col justify="center" align="center" cols="2">
                    <p style="font-size: 5em;">Лл</p>
                </v-col>
                <v-col cols="3">
                    <p class="text-body-1">
                        This "L" sound is a very common one in English, and is very common
                        if you use the word "like" as a filler word!
                        The way I learned this letter was to think of the left side
                        of the letter as a backwards L.
                    </p>
                </v-col>

                <v-col justify="center" align="center" cols="2">
                    <p style="font-size: 5em;">Пп</p>
                </v-col>
                <v-col cols="3">
                    <p class="text-body-1">
                        This letter, which makes a "p" sound is often forgotten
                        by learners, who forget that it makes a "p" sound as they
                        have naturally associated the "Рр" with that sound - which
                        is incorrect!
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col justify="center" align="center" cols="2">
                    <p style="font-size: 5em;">Фф</p>
                </v-col>
                <v-col cols="3">
                    <p class="text-body-1">
                        The "f" sound is very commonly used in English, as part
                        of a particular intensifier! (Hint: "f***").
                        I remembered this one in a rather vulgar manner - something
                        which I'd rather not share on this website!
                        All I will say is that imagine it is a stick going through
                        a doughnut.
                    </p>
                </v-col>

                <v-col justify="center" align="center" cols="2">
                    <p style="font-size: 5em;">Чч</p>
                </v-col>
                <v-col cols="3">
                    <p class="text-body-1">
                        The "ch" sound isn't the easiest to remember, but learning
                        this one will make learning "Цц" easier, as you can think
                        of them being similar, comparable to how both the Rusyn
                        "с" and the English "ch" contain the letter c.
                    </p>
                </v-col>
            </v-row>
        </v-container>

        <v-container id="compound-sounds">
            <p class="text-h5">Compound sounds</p>
            <p class="body-1">
                These sounds are a combination of two other sounds: usually Й and a vowel.
            </p>
            <v-row>
                <v-col justify="center" align="center" cols="2">
                    <p style="font-size: 5em;">Єє</p>
                </v-col>
                <v-col cols="3">
                    <p class="text-body-1">
                        This sound is like the "ye" in "yes", and is quite easy
                        to remember. One of the ways that I remembered it is by
                        thinking of it as a Euro (€), and thinking about how
                        some Slavic languages call the Euro a "yevro/євро".
                    </p>
                </v-col>

                <v-col justify="center" align="center" cols="2">
                    <p style="font-size: 5em;">Ёё</p>
                </v-col>
                <v-col cols="3">
                    <p class="text-body-1">
                        Pronounced like the "yo" in "your". This one is quite
                        difficult, as this letter is ommitted, and typed as
                        Ее instead - mostly because natives are too lazy to
                        reach for the Ёё key!
                        To add to this, some people dispute its use entirely,
                        but that's a conversation for another day.
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col justify="center" align="center" cols="2">
                    <p style="font-size: 5em;">Її</p>
                </v-col>
                <v-col cols="3">
                    <p class="text-body-1">
                        A combination of "й" and "і" (Rusyn) or "y" and "ee" (English),
                        this sound is rather uncommon in English. However,
                        like all the other letters, it is important to learn
                        this one. I learned this by thinking of it as similar
                        a regular "Іі", but different (as denoted by the two
                        dots above the letter).
                    </p>
                </v-col>

                <v-col justify="center" align="center" cols="2">
                    <p style="font-size: 5em;">Щщ</p>
                </v-col>
                <v-col cols="3">
                    <p class="text-body-1">
                        Pronounced as a "ш/sh" followed by a "ч/ch" in quick
                        succession, this letter is easily remembered if you
                        already know the "ш" sound.
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col justify="center" align="center" cols="2">
                    <p style="font-size: 5em;">Юю</p>
                </v-col>
                <v-col cols="3">
                    <p class="text-body-1">
                        This one is pronounced exactly how a foreigner
                        may pronounce the word "you"! I don't have any
                        tricks for learning this one, though it isn't
                        very similar to any others, so at least it is
                        not as easily confused as some of the other letters.
                    </p>
                </v-col>

                <v-col justify="center" align="center" cols="2">
                    <p style="font-size: 5em;">Яя</p>
                </v-col>
                <v-col cols="3">
                    <p class="text-body-1">
                        Pronounced <a href="https://www.youtube.com/shorts/mdsDeAozuhM">"ya",</a>
                        this one is harder to remember as this compounded
                        sound is not present in English. However, you will
                        have no choice but to learn it quickly - as this
                        is quite a commonly-used pronoun, meaning the same
                        as the English word "I".
                    </p>
                </v-col>
            </v-row>
        </v-container>

        <v-container id="rusyn-sound-rusyn-letter">
            <p class="text-h5">Rusyn sound, Rusyn letters - good luck!</p>
            <p class="body-1">
                These sounds will likely be the most difficult ones for you,
                especially if you are a native English speaker.
                You probably haven't seen these letters before, never mind
                tried to pronounce them!
            </p>
            <v-row>
                <v-col justify="center" align="center" cols="2">
                    <p style="font-size: 5em;">Жж</p>
                </v-col>
                <v-col cols="3">
                    <p class="text-body-1">
                        This is a sound which is present in English in words
                        like "measure" and "decision". Note where your tongue
                        is when you're saying the "s" in the above words, and
                        remember that position for when you need to say the
                        Rusyn "Жж".
                    </p>
                </v-col>

                <v-col justify="center" align="center" cols="2">
                    <p style="font-size: 5em;">Ыы</p>
                </v-col>
                <v-col cols="3">
                    <p class="text-body-1">
                        This sound is not present in English, so may be quite
                        hard to learn for a native English speaker.
                        To learn it quickly, start with your tongue at the
                        front of your mouth, at the roof. Then, while making
                        an "ee" sound, move your tongue backwards until you
                        notice that you're making the ы sound! Here is a
                        <a href="https://www.youtube.com/watch?v=AAQXIm_3eew">YouTube Tutorial.</a>
                    </p>
                </v-col>
            </v-row>

            <v-row>
                <v-col justify="center" align="center" cols="2">
                    <p style="font-size: 5em;">Хх</p>
                </v-col>
                <v-col cols="3">
                    <p class="text-body-1">
                        If you're from the UK, you've likely heard some mad
                        Scouser use this sound when ordering chicken wings
                        from a kebab shop.
                        If you're familiar with the Scottish word "loch"
                        (a Scottish word for "lake") then just remember the
                        "Хх" as just being the same as the "ch" in that word.
                    </p>
                </v-col>
            </v-row>
        </v-container>

        <v-container>
            <p class="text-h5">"Orthographic Devices"</p>
            <p class="body-1">
                These characters aren't even sounds! They serve a different
                purpose - to alter the sound of the preceding letter.
            </p>
            <v-row>
                <v-col justify="center" align="center" cols="2">
                    <p style="font-size: 5em;">Ьь</p>
                </v-col>
                <v-col cols="3">
                    <p class="text-body-1">
                        This is called the "soft sign", as it makes the
                        preceding letter sound "soft". It effectively
                        paletalises the sound before.<br>
                        Read more about paletalisation <a href="https://en.wikipedia.org/wiki/Palatalization_(phonetics)">here.</a>
                    </p>
                </v-col>

                <v-col justify="center" align="center" cols="2">
                    <p style="font-size: 5em;">Ъъ</p>
                </v-col>
                <v-col cols="3">
                    <p class="text-body-1">
                        This is the opposite of the "soft sign".
                        It is called the "hard sign", and prevents
                        paletalisation, which would have occurred had
                        the "hard sign" not been there, such as if
                        a consonant like "Тт" is followed by a
                        compound sound.
                    </p>
                </v-col>
            </v-row>
        </v-container>

        <h2 class="text-h5 px-9">Resources:</h2>
        <v-flex>
        <v-layout>
            <v-flex md8 class="ml-6 pl-3 pt-2 mb-16" :key="resource" v-for="resource in resources">
            <v-card :href="resource.link" width="25%">
                <v-card-title>{{resource.name}}</v-card-title>
                <v-card-subtitle>{{resource.description}}</v-card-subtitle>
                <v-card-actions>
                <v-spacer />
                <v-btn :href="resource.link" depressed rounded>
                    Visit <v-icon class="pl-2">mdi-exit-to-app</v-icon>
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-flex>
        </v-layout>
        </v-flex>
    </div>
</template>

<script>
export default {
    name: "CyrillicLesson",
    data () {
        const alphabet = [
            {
                cyrillic: "Аа",
                name: "а",
                romanisation: "a",
                ipa: "[a]"
            },
            {
                cyrillic: "Бб",
                name: "бы",
                romanisation: "b",
                ipa: "[b]"
            },
            {
                cyrillic: "Вв",
                name: "вы",
                romanisation: "v",
                ipa: "[v]"
            },
            {
                cyrillic: "Гг",
                name: "гы",
                romanisation: "h",
                ipa: "[ɦ]"
            },
            {
                cyrillic: "Ґґ",
                name: "ґы",
                romanisation: "g",
                ipa: "[ɡ]"
            },
            {
                cyrillic: "Дд",
                name: "ды",
                romanisation: "d",
                ipa: "[d]"
            },
            {
                cyrillic: "Ее",
                name: "е",
                romanisation: "e",
                ipa: "[e]"
            },
            {
                cyrillic: "Єє",
                name: "є",
                romanisation: "je",
                ipa: "[je]"
            },
            {
                cyrillic: "Ёё",
                name: "ё",
                romanisation: "jo",
                ipa: "[jo]"
            },
            {
                cyrillic: "Жж",
                name: "жы",
                romanisation: "zh",
                ipa: "[ʐ]"
            },
            {
                cyrillic: "Зз",
                name: "зы",
                romanisation: "z",
                ipa: "[z]"
            },
            {
                cyrillic: "Іі",
                name: "і",
                romanisation: "i",
                ipa: "[i]"
            },
            {
                cyrillic: "Її",
                name: "ї",
                romanisation: "ji",
                ipa: "[ji]"
            },
            {
                cyrillic: "Ии",
                name: "и",
                romanisation: "i",
                ipa: "[ɪ]"
            },
            {
                cyrillic: "Ыы",
                name: "ы",
                romanisation: "y",
                ipa: "[ɨ]"
            },
            {
                cyrillic: "Йй",
                name: "йы",
                romanisation: "j",
                ipa: "[j]"
            },
            {
                cyrillic: "Кк",
                name: "кы",
                romanisation: "k",
                ipa: "[k]"
            },
            {
                cyrillic: "Лл",
                name: "лы",
                romanisation: "l",
                ipa: "[l]"
            },
            {
                cyrillic: "Мм",
                name: "мы",
                romanisation: "m",
                ipa: "[m]"
            },
            {
                cyrillic: "Нн",
                name: "ны",
                romanisation: "n",
                ipa: "[n]"
            },
            {
                cyrillic: "Оо",
                name: "о",
                romanisation: "o",
                ipa: "[ɔ]"
            },
            {
                cyrillic: "Пп",
                name: "пы",
                romanisation: "p",
                ipa: "[p]"
            },
            {
                cyrillic: "Рр",
                name: "ры",
                romanisation: "r",
                ipa: "[r]"
            },
            {
                cyrillic: "Сс",
                name: "сы",
                romanisation: "s",
                ipa: "[s]"
            },
            {
                cyrillic: "Тт",
                name: "ты",
                romanisation: "t",
                ipa: "[t]"
            },
            {
                cyrillic: "Уу",
                name: "у",
                romanisation: "u",
                ipa: "[u]"
            },
            {
                cyrillic: "Фф",
                name: "фы",
                romanisation: "f",
                ipa: "[f]"
            },
            {
                cyrillic: "Хх",
                name: "хы",
                romanisation: "kh",
                ipa: "[x]"
            },
            {
                cyrillic: "Цц",
                name: "цы",
                romanisation: "c",
                ipa: "[t͡s]"
            },
            {
                cyrillic: "Чч",
                name: "чы",
                romanisation: "ch",
                ipa: "[t͡ʃ]"
            },
            {
                cyrillic: "Шш",
                name: "шы",
                romanisation: "sh",
                ipa: "[ʃ]"
            },
            {
                cyrillic: "Щщ",
                name: "щы",
                romanisation: "shch",
                ipa: "[ʃt͡ʃ]"
            },
            {
                cyrillic: "Юю",
                name: "ю",
                romanisation: "ju",
                ipa: "[ju]"
            },
            {
                cyrillic: "Яя",
                name: "я",
                romanisation: "ja",
                ipa: "[ja]"
            },
            {
                cyrillic: "Ьь",
                name: "мякый знак",
                romanisation: "'",
                ipa: "[ʲ]"
            },
            {
                cyrillic: "Ъъ",
                name: "твардый знак",
                romanisation: "\"",
                ipa: ""
            }
        ];
        return {
            alphabet: alphabet,
            same: [alphabet[0], alphabet[1], alphabet[6], alphabet[11], alphabet[16], alphabet[18], alphabet[19], alphabet[20], alphabet[22]],
            sameButDifferent: [alphabet[2], alphabet[19], alphabet[22], alphabet[23], alphabet[25], alphabet[27], alphabet[30]],
            resources: [
                {
                    name: "Anki deck",
                    description: "Rusyn Cyrillic script flashcards",
                    link: "https://ankiweb.net/shared/info/719683895"
                }
            ]
        };
    }
}
</script>