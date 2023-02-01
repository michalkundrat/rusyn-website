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

        <v-container v-for="category in this.greetingsList.categories" :key="category">
            <p class="text-h5">{{ category.name }}</p>
            <p class="body-1">{{ category.description }}</p>

            <!-- Need to make a makeColumn() or I can hard-code and just use row[0] -->
            <v-row v-for="myrow in this.makeRows(category)" :key="row">
                <v-col v-for="item in row" :key="item" justify="center" align="center" cols="2">
                    <p style="font-size: 2em;">{{ item.name }}</p>
                </v-col>
                <v-col cols="3">
                    <p class="text-body-1">{{ item.description }}</p>
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
                            }
                        ]
                    }
                ]
            }
        };
    },
    methods: {
        makeRows: function(cat) {
            console.log("entered");
            var mylist = cat.greetings;
            let rows = [];
            let count = 0;
            var row = [];
            let item = 0;
            for (item in mylist) {
                if (count > 2) {
                    row.push(item);
                    count++;
                } else {
                    count = 1;
                    rows.push(row);
                    row = [];
                    row.push(item);
                }
            }
            console.log(rows);
            return rows;
        },
    },
    computed: {
        handleRow: function() {
            if (itemsInRow < 2) {
                itemsInRow++;
                return false;
            } else {
                itemsInRow = 0;
                return true;
            }
        }
    }
}
</script>