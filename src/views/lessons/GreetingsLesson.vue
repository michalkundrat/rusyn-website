<template>
    <div>
        <h1 class="text-center text-h4 pt-4">Rusyn Greetings</h1>
        <h2 class="text-h5 px-9 pb-6"><b>On this page:</b></h2>
        <v-row>
            <!-- <v-btn @click="$vuetify.goTo('#what-are-greetings')" rounded class="grey lighten-2 ml-12 mb-3">What are greetings?</v-btn> -->
            <v-btn @click="$vuetify.goTo('#why-to-learn-greetings')" rounded class="grey lighten-2 ml-12 mb-3">Why should I learn greetings?</v-btn>
        </v-row>
        <!-- <h4 id="what-are-personal-pronouns" class="text-subtitle-1 mt-1 pt-3 px-9">A greeting is a polite word or sign of welcome or recognition.</h4> -->
        <p id="why-to-learn-greetings" class="text-body-1 mt-1 pt-3 px-9">
            Greetings are among the most commonly-used words and phrases
            in a given language, as they are used almost any time that
            you want to start a conversation with somebody else.
        </p>
        <p class="text-body-1 px-9">
            In this lesson, we'll begin with the most commonly-used
            greetings, and work our way down towards the more complex
            and lesser-used greetings.
        </p>

        <v-container v-for="category of greetingsList.categories" :key="category">
            <p class="text-h5">{{ category.name }}</p>
            <p class="body-1">{{ category.description }}</p>

            <!-- Need to make a makeColumn() or I can hard-code and just use row[0] -->
            <v-row v-for="myrow of makeRows(category)" :key="myrow">
                <v-col justify="center" align="center" cols="2">
                    <p class="pt-6" style="font-size: 2em;">{{ myrow[0].name }}</p>
                    <p>{{ myrow[0].formality.toString().replace(/,/g, ', ') }}</p>
                </v-col>
                <v-col cols="4">
                    <p class="text-body-1">{{ myrow[0].description }}</p>
                </v-col>

                <v-col justify="center" align="center" cols="2">
                    <p class="pt-6" style="font-size: 2em;">{{ myrow[1].name }}</p>
                    <p>{{ myrow[1].formality.toString().replace(/,/g, ', ') }}</p>
                </v-col>
                <v-col cols="4">
                    <p class="text-body-1">{{ myrow[1].description }}</p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "GreetingsLesson",
    data: function() {
        const formalityList = ["Intimate", "Casual", "Consultative", "Formal", "Frozen"];
        return {
            formalityList,
            itemsInRow: 0,
            greetingsList: {
                categories: [
                    {
                        name: "The simple ones",
                        description:
                            `These greetings are used quite commonly, and are
                            a quick way to say "hi" to someone. Some of these
                            are less formal than others, so be careful to not
                            use these incorrectly.`,
                        greetings: [
                            {
                                name: "Агой/Агойте",
                                formality: [formalityList[0], formalityList[1]],
                                description:
                                    `This is a helpful greeting which you can
                                    use to communicate with friends and family.
                                    Though you could use it in more formal
                                    situations, it is not advised, besides when
                                    talking to a teacher which knows you well and
                                    similar such situations.
                                    You should use Агойте in these more formal
                                    situations, or when talking to a family member
                                    who is more than a few years older than you.`
                            },
                            {
                                name: "Вітай/Вітайте",
                                formality: [formalityList[0], formalityList[1]],
                                description:
                                    `A greeting which can be used to greet friends,
                                    family or other visitors. Its direct meaning is
                                    "welcome", so if you greet someone with this,
                                    it's likely that they will reply with "Дякую"
                                    or "Дякуєме" depending on their status or how
                                    many of them there are. These replies mean "thank
                                    you".`
                            }
                        ]
                    }
                ]
            }
        };
    },
    methods: {
        makeRows: function(cat) {
            var mylist = cat.greetings;
            let rows = [];
            let count = 0;
            var row = [];
            let item = {};
            for (item of mylist) {
                console.log(`Name: ${item.name}`);
                console.log(`Formality: ${item.formality}`);
                console.log(`Description: ${item.description}`);
                if (count < 2) {
                    console.log("count less than 2");
                    row.push(item);
                    count++;
                } else {
                    count = 1;
                    rows.push(row);
                    console.log("row: " + row.length);
                    row = [];
                    row.push(item);
                    console.log("item" + item);
                }
            }
            if (rows.length == 0) {
                rows.push(row);
            }
            console.log(rows);
            return rows;
        },
    },
    computed: {
        handleRow: function() {
            if (this.itemsInRow < 2) {
                this.itemsInRow++;
                return false;
            } else {
                this.itemsInRow = 0;
                return true;
            }
        }
    }
}
</script>