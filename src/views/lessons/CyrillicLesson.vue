<template>
    <div>
        <h1 class="text-center text-h4 pt-4">Rusyn Cyrillic Alphabet</h1>
        <h2 class="text-h5 px-9 pb-6"><b>On this page:</b></h2>
        <v-row>
            <v-btn @click="$vuetify.goTo('#what-is-cyrillic')" rounded class="grey lighten-2 ml-12 mb-3">What is Cyrillic?</v-btn>
            <v-btn @click="$vuetify.goTo('#why-to-learn-cyrillic')" rounded class="grey lighten-2 ml-2 mb-3">Why should I learn Cyrillic?</v-btn>
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

        <v-container>
            <v-row>
                <v-flex class="pl-3 pb-3" v-for="letter in alphabet" xs1>
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
    </div>
</template>

<script>
export default {
    name: "CyrillicLesson",
    data () {
        return {
            alphabet: [
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
                },
            ]
        }
    }
}
</script>