/* eslint-disable */
<template>
  <v-app>
    <v-app-bar class="grey lighten-2" flat app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Learn</span>
        <v-divider />
        <span>Rusyn</span>
      </v-toolbar-title>
      <!-- <v-toolbar-title>Русиньскый - Rusyn Learning Website</v-toolbar-title> -->
      <v-spacer />
      <v-btn text class="mr-2" v-for="topitem in topitems" :key="topitem.title" rounded :to="topitem.route">{{topitem.title}}</v-btn>
      <v-spacer />
      <!-- <span>Made by Мiхал К</span> -->
      <div id="userImage">
        <v-menu
          open-on-hover
          offset-y
          rounded="b-xl"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-avatar @click="openUser()" v-on="on" v-bind="attrs" v-if="user != null"><img :src="user.image" alt="User"></v-avatar>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-title>{{ user.name }}</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>{{ user.reputation }} reputation</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>{{ user.age }} days old</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
    <v-navigation-drawer absolute v-model="drawer" app clipped>
      <v-list dense nav rounded>
        <v-list-item v-for="item in items" :key="item.title" :to="item.route">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Where the fun starts.... -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
.hide {
  display: none;
}
profile:hover + hide {
  display: block;
}

#userImage:hover {
  animation: slideLeft 1s ease 0s 1 normal forwards;
}
@keyframes slideLeft {
  0%    {left:0px}
  100%  {left: -150px}
}
</style>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false,
    group: null,
    user: {
      name: "John Doe",
      reputation: 0,
      age: 1,
      link: "https://www.google.co.uk/",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFhYZGRgaHB0dGhwcHRgaHh8fISEaHBwZHBocIS4nHh4rIRwcJjgmKy8xNTU1HSQ7QDs0Py40NTEBDAwMEA8QHhISHzQsJCs0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAP8AxQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgEAB//EADsQAAECAwYEBAUEAgIBBQEAAAECEQADIQQSMUFRYQVxgZEiobHwEzJCwdEGYuHxFHIjUpJTorLC4hX/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAnEQACAgICAQQBBQEAAAAAAAAAAQIRITEDQRIyUWGBoQQicZHwE//aAAwDAQACEQMRAD8A2qJ6x8obkIgiWsqBLs8K/wCUtWHlHZSZl5JL0McllbNE3hheXBx8sASKwstnTD0kRgYHIFBEipgfSAS5pA/qEGsbSYko7QqZ0RE46d4YVsdvCImF/idoIpbQyQrYVeFImk+/fKAJm0gZmEe+cMkAYnAY+UAlzRgYGqb5/wAwC+5ocPdYNAHJwfmIUNRTlE1TgaCseSM/fukLQbCInYD7Q2g0Dwk4BB6/aGJk7wuIVqhkwpIj0KCdg/vnBgqAMmTXHDHXiLwAnCIWmmGVGF5hgMwuoCPRxRjsAICSlQJKXrjDCULJDk4wn8WadY7IlzL6SoEh2MWOOzQhVIEgVjvxhXWBXzi0LLZeLweKhWADD7QVRekKTzdx6QA2eUBHFpB5Ql/l1LVbtHF2key0ZGGOR5V9dIKuZTN394RWm3pwIbf7OIkbQMX9YZAZYpVSnNnp00gUycpsG2LewYDKtI2p/fvlElzUKqT2YP1doohGFkAkbO4bLbvALQq456wIWgB2S1Wox6090jirSFBlAu3tn9IbxBYaVOok4v79TDfxMnqWioROSk0PhNfyO8MotIJId9d3+0ajWPS1g4ZQVKyYSCi1KDaDyks6tfQQriN5BFrpQRJC1KqMGhdKwqmQzhpEwJSwyickMhhB1iOMdCo8IUoeUaQvMMGmQvMMKzAVmPR4xyAEgqbOrRtGEclypqiCokNXH3WFzMmqo5eDyZMxgVUO5xizZyIukEEViC+cDTljHKQGyq0em0wDdIUWEqDVgkyZ2hSfNOAIHr5wBhC2EILANCwWcvfaCWmUSaVJ0L9TC61hGJrtBSNZ1SXy8j5R1Bb5j09iFZ05wSl6jCldg/vCEUTl3ipS2SBUFg2uGeXurKIrZpELF2jh9gffKOEhIc45Ej84Rj7TxkJa6K601NA9eu0Lr4wtqE1zUX7CKJCbNPauIITnrg3kH9tjC6uMoCS5fQHmDnzy0jIzJy1Gp7MN4ihBd89YZB8TRK4wlZNGfA6nEe/zBUcQvMQrmz4D8abxl1l84lImqS5B335iMBqj6hYZjoAAyrl2hpa1M2Qz1jO/pueVIHjdmBw/MXqpgDYVwGPfaMwJhpSSYipLM8RlrZwTXT8xxZJIrSJSRRMs5MwEQRUVV1qhRixkrvJB1iY6Z4mArEGVC0wwrGQNSo9A1GPQAnUWdbvnmYMhCiCSa5V7wALXcvMalgI9L+IcQa+UVbOWJYpLUIrEFL5mOvrjnAC7msK2VRCenbpCExWIhtazi/aFFk4kCsYIssqI0B8+gDmK6dZQS7uevpFhbJwTQmutKbCF5KLxYO2ZJq2u0OoitiFtWUodI12Zsoy061qLgddzqdTG2t0oXFKIF0YD0D7Cvc6RhpialsHpyh0hQaECGpcsHP1HrCoW2EFRPIxbre/MOkaxkSw2Pr+IncpiegI+0Rkznxugcj+YKLQnC90b+DDozYlOkl/784EpJHv8Q+q1A5+RH2hWYq9GaQLLP9MWooXdYXVd+kbW/QVNcKV7gRjv05ZVKN7IUHN3fp942qkOA1FZ4NtjCtYF7JJQxqT4g5Jx8oklACWDbfmAmdRnqMgK0yrBwgEUAGo/jKJSQ6YaSBQO57dofSQ0VpYZ4RKXaatlE2h0x5ULrg6S4eALhRkLzMY9HlGPQKGHWWQH1/Eevn8QiZiwUpLvoe8SlImPXn/HvWKN2c0cB1Hn75QJYrDL0BgC30bmYVoqmBti7oF3H3i8IzZhzZ4bUguSWf3lAJyRVsOkFI1iaLC7qNS7uYFPnBIYfx26Q3NtIuACgHcn2/nCJUFGtAmuQHM6CKREZX/qm0KQkIfJzjmSO7jtGRnzGh39QW0rWQkuAwfVq+rmKKfMUBr7ziiEbG0TwMQ8WEi0SzlGfTKWoPlr4QK4fOoP0iKEEP4vt0OkEEZOzVy5iFMLrXj5QSahFWYB2HOKWwrvEZXecDtM8i8ncs2Dv5RrY9otp0tDfM3vTCEZsxKcFOIpVzFlX4eOfGKSygQeUMI37H0X9JcRSELQznFo0kqc1WpkQatXLCPnn6UmkWhISXCgRtrm2hxzjZy1AE3WuuS2YfY4QGZFgLRewL+UcTNL6aiBmV9Qx7eWcS+G/iZ2iUh0NfFdmpSojzs1M9oHICjizAxZypIGT9IkyiJ2cG7EFmGmpCdoMAKAKj0RmCsehRxgyS4JIJGbxO4oZim8VyLFM9mJpsqxUxZnImWCF/3AZ5YPnX+PP1idmBaugBha0rJ++2kKVRH4gum9vzz+8VMyYpmGuYhq0l6VZq/YPCtpWw6BusBBE57sceeGf4EJWxYQlk+IteV3ASPN+kQXOU+LPi38wukF5ijkBvXAD1MViIzPmu+pGZ1iSU7dYkJdWbT+omA1Wh0BKxVSA/yg/noRHZqEl1FwpqChBgqpijgGgCqlhU7fmGszRGSLhxB3/MRC7yy5AcnvtHZdnOkeXZVJIJDAxkBk0SiPC6UvibqTexGKwSKHIgbQOfYE3j4gx+lIp2FB0AEMpFBeS6DmC8T+EPpSw5n7waBRHgyri6YjA8iD6PGxVa0llYvlSnpTGMnJlOtI1Le9IuRMTeqaUNKUIDiA9G0zS2K1AoYF0k0JywcbNTvDqF4jP3T3+YzMq2MlgaEg4cotZFqSUgk1BbfJoi2Oi5kIBrg/KLWUzCM2i0PT35RdcOU6QXd4myiGlQCYIMowGZAYRaYKx6Orj0AYCgkIe+K4B+gjqEmniHeK2dw8pcEjZoYHDltiO8Wo4rLKSk4DIY0r7pEFoL156QThqCGBxAgluSQoN64QkkXhlFZaxgGHvSKW2PvkIvLWigJqfdYrpg7xhyinSyo3RrE12YgbOGAdycNM3x35Q9PSlPzKFQfMEdYPYpKCSbwKEDCo8WIfSjxSJNmPtMooWoZ0+7n7QFM9IcRp+N8NvXlOyrjgMz3a1zwLD22MMokJSMTifecMBM7aLTfomiczmdgYF/llDBKG3Eabg/AHuqWyQK3S+AGefSnMCDzuEIZx4gDiQkOagAAOAGrrUszQ9AbM5K4owFA/vWF7dxMrIB6BvKkXM3giL2GKiAAqpIvXn0+XrF3YeDJSpSVS0KRRNCxJBe9XHBX/AInaMkwNmKslpuKYh0LFRofbQ8uYkCmEH/UXChLmKufIFNukkPXV6GmuUU6Lxo1XZt9ozCmPWdJvFYqEs50fPpWH5K3WbzVwfPVvJotbFwm7IFfE14kYEsabiocbxWoszXn1YZ9SdoEsAWWEkCrH5X9ItbHJJccj10hCVZF3kn6NM31O0bLhvDbqUkHEAv7yiEmVSFrHZWO9e8X1nlgCkRRZU3WaDIQAANNYA55cAXB1QtMNYDMLzBWPRxeMehRgSij/ALipgt1BLXw0JL4QD9YpWOJ4Yoiik946DjLewhlAAuGNYatKajrFdw1BQQDk8McXtyJSb61XUjzOgGZhGslYekDbboSSsgJZySwA1c5RgeN/qJnTZnA+pag4G6Ek+vaG+K8RXaRV0SxgjM6FWvp6xjeIXnMtP9CLQ4e5Ep8vSLKwSjNmXlrWvVwDUE0051OWEbThhJS5uuReYEEYkkAimBZuWpjHcKSEMglic8nY/N+2opyjZ8PmIQi6m6hCQxwo4fCodwSX05wZYNEZnWYMFEUL3nALg1agwAAHQYxnbVYRJTeBZa3JVR0hQUPDoQWJO7CNgiWmYCCBcKW7e8NorOKWVwEkuxcEtpjhrWjCFTGZhLTxVaJpSDeQQygHAIoyXI0fapMG/wD6doWEgm5WgbEMRd88aY7xG2MhRvID3gQ76HPE1cdIJNTfIUCQ5okgZsLqb1NaO8OKkBmT5yncpJJvO5o7DDkfR4LN4zMHzsfmwLllYjBgwYdI7L4ctK3URd8TvQh3N07sWfDCA2iyqZQPhuByai84xqR066xgjlk44FlXxFBToF8q+bwm6HGrsR/sWctD3CuGIK74qHBGDVDqYAOCw7tqIzKuGfEWn4YoxrvuHoK4H8Ru+B2QoABJBDDxO5G2tGHSDYqGOKKCEEir4a4gDyBO0UkmzurqfZ2jQcVReSwBdi4D98MRodoUsXD1qGBfs0SmysEWNlsQUE03qBjg0X0iWEpAaISpLJA00pBoiWOGOR5UReMY8swtMhhRhdcKYVMejxEejDEBaZRDXjEBNR/3it4oJcpI8TqVQD7naKqYVLSWUwxJwpqNnjqjxylo4HKjTK4lKl+IrCgAXap5bdYobRb1WhRXMDAUQjIDT/bBz7CFhmXzcFAPmO/M/UcvZgnFZZKRLlhjmNtPuYtHiUcgc2/2lTxK03Sbhc6jLYRTyUG/fan1faHrWsIQRirB9YUs6VhDgG8W7DAdS3aHeBd4GFSl3VLBzZvM05mL7gM4koQcboUoVck+Iqywdoq5kpaZKUXRfViC4YHF+fpF9+lbC3jViCQDtTy5E+sc82isU7NfZZYQahhWmif7ziE6RfyZqj84RxU4nDAh3ptQVrp0hgqZ8HZ+WLRNFDG8W4IpZANDXk70qNgOgziptNimSwEhagSbpDqAfIUzLtWNzxYODXEAcnP4hC2FJSCwKvBQ1q4Ytse7Q6YDHIscxHhKDiOWdX1r5xBdmKgA5AJYA1INKNy2jYTpYYLZyApnbUgAnenYaR2wWBCQksSXBIrQkAt7zMMmAW/S/DihBKwAbzehB8ovlSw908mO2ej4QWUitCG19PUxy3EAJKizO59O9R0GkDZtFFxniBkgLRRRvaeIgFgX0ID9od4N+r5UxLTR8NQxNbhycHEDn3jBfrLiN+YlSAbqVKcPqQT4dcfOOyZgWkFBF4jL3QxRcKksk/8Aq4vB9glLCgFJUFJNQQXBGxGMTMfMrDxGdJS8pwzX0ZDL5Tn5xr+AfqATmQtNxbUq6VagaHaIT4JRztF48qlgvCI4Y7HFREqQVC8yDqgCzGCLGOR4x6FCYidbErmKvEli2RJGoORfpA5SlrXWkp8gWfYHE7w0eHylJvDuMCeX9QghU5Dh3T9JrQ6DSmRj11FxpP8AB5ikndfkt5t1CWQBeOA10J1+/LBdS/hoN8+I4nN9IDwq3SwT8Q+MOTQuHzAwPvqS3yzON4EXRQa6toTyeFk7drfsZKsPXuUcqWFzCtfy5bB8dzFkichK8GAYBnvlQyJarQjMWoG4kOXb7AMdDXoIMLRdNWvUA3JeofD+onJdDRLcz0UWtBDVF/Gjts/5j1j4rfUUpeocPnzagTU+EAdXitmWceBD1NK1cvXHWvaJ2AFMwhIYKukt8zCrk43jRsgMKvEJRrZaMr0biUfp/aAPz1G8H+JdBBIKiSzDAAMOv3ios08I3YFRONQzgO3TDCJptqVkFLgAtliANMjTpCFA9pF5TK+XEh2wY1O5YcnivtKy6sPCe+KWGpxpDnEJtxYUPrNa5JCqg6P3ittMwEOAaYYAlueh1Ys+MEAe1OoISMEsDvr+eUWEmWcmOD1xzJ5xWy1lRSCPDQBm6uMmYp6iLND+Eg1II7ffEdTBs1DstWPJh3dusZv9XWspFxJqQ5wpUJGOlTFwi0pN8AuQcHwJ/mM/xwFaCX8RNXYXcWD6BhBh6hJ6MuqzeB1VvUPMCnOnpFfwqYqWorAdIOGm/wDMWshCloUgfQaaM7jnRx2hK0ug4UXTkf5jr6TOeui+VM+IEqlHxDF8/wBqvz+IKhLfIShaWdPKt4ZvC1ishlC+nTxDQZjlDd3/ACGWhwpOGv8AqefvOKU3vYuOtGz4FxQzUXV0WkOcrwyWB6xaGPn9otjhk3kzAQ5TQp2Ct/4qI3FkmAy0EKK3SPEWc0xIFHjh5+JQdrTOzh5HJU9oIuFppgyjC8wiOVl0Lkx6PKMcgBMTPsqwr/iUeWf4Ig9ntqWuqACsGOCuhwO39RCyT1oIEwHxYGjtq/1esQt8pE4+EjZQ+/t49tYVrb6PLecPXuDPC3UZiMQcN9vxFdN4iu+Aiin+U1SdVAZHlFqi1KlpCF4YA49XzHvaFuJ2VKZqFlgSWJyY4HnXGJyVXX2FO9/RCwPeKludDmTgVGPJkiZNKwRdTgcjv702ixnTpaZZQQyi6bhSCf8AYLxZmc7wgizFAKQogqY6NkEg+6mE6of5JFKr6SD4cFPXUDHNifZixnTUIWFEMKErrho71JrFZKtpWi7ioU/B+0U/EZirovGqFhsMPFtrEZrI8H7mhtHF3BCKOKZnHBtGqx0G8WnCQQlKSmruaYaBRwahbE12jH2SY5Sw8TjfDADTzizn2+4hIR9Obk+Ijxq0dzQ9olRei047xMKUUIwDJeruGvMwwokvUcoWTxAlaVFRIatCA1B3cEgRm5hKi6j6wQJrRRGGG3P+Y1BSNzw2beWoOLoReruCa7etNIJZ+IAILVILAmjvpo2NYyvD+IqQsY3WunYNQtmRTmzQZfECoUVQByMidcMat7pkjNDsjiCUg1N4A3k4FwcSat6wnK4ssgByU0bA03oKMCWOZEVNotDAkUfH3pBv09NCmKv+oGGdMexw1ivHG5US5XSLJc9l+H6ga0xx/MKLsZIKVCh8SScmy2aveHg1wrFLizdJpRxgO3R9I5OJmoFweIV5HEp97R11g5iFgtKlH4aqBOCjhtePpDs1Jlv8BiW8QOAOh+wxhCXMKjdWAAzpIxODuehg1mtKELKRgvBsAf79YaKxbYJbpIEifSWSo3yo3zrgz7bbRr/0xaFXVy1geAuhs0n+fWMoUATEJU3iUFMaYlmGgd+8XthtIlzSWF0kDHAEOfz/AFE+WHlFoeElGSZqFmFp0HUYWnGPKZ6CFlrj0BnKYxyFCZ+12pC0JDVLBjyxBG0KybEuWCtBcHEHTcZ8x5RFUpEyUhYNxQIHzAC9m41pkYZPEW8C/Ct2r4e+QMe2mmrZ5VNYX2gNntCJxu6HDMN9Q1rnFb+oryElBqDnl031EPTLKZP/ACoDG8XDUzHbaGZslM1BvAgtVJqoPS9/MK0267CqStaKSzW5YSkqAUtIACjoNgKn+IsLRLVMSFGg8Jrk7A+RMUllm3VXDUNRttNf4jTS1lcoBIxQwzLig8wIWKTtfgaTaplXw6VcWXNVAnzqAObxX8eHiLBgplfnzeLOWlV9KluwLtmygCR/8olx6QLhIZx6e2hPG0xrpoo7JNIDCmpz5PpDcIWYvDyTHPR1R0QUiPBOFYI0caDQbInSCpoI6lDR5QjUEStxZCou+EWdIsyTndvbilPt3imtyCUEa070i9tkkhCUIxLUzYadfSK8SptnNzZaRyTaQlAlqAqEhsiGryP5iw4TaUS1XHYKBCFEYFwz9KdssKbiEi8oXT4kpSnCLEq+FKKZyHKcN1nRTVAbyjoabIppfYL9RSVFZWjwovXgMGdvp0vAltwI9JkJu3tPEHy197R1ZWQQsuuYAov9NGSGGjQHhEhZWUrLNljsQ3P1hkvHFbA5Xn2H0ITOnoW58KHJycE17kGA2mekqUU18bE/tAIDc69oghFyeZYcAkBzpW6e5aPWlAKlIQMTU/uAB9fUxqbVs1pOlo30qY6EnVIPkIFNMA4QsmRLfEIAPQNBJpjx+RVJo9GLtIVmJj0eUY9ExzHWNafgKSf/AFEGubuPtBbatJmIS4oxLEB659B5wCXw0oRJSokLWoLXsBRA6C8+8EmWUfGxwTps2u8e1lrR5eE9+47Z5gvoQ4IZRxDsGYOOsD4nLSVhKWALEgGmJ0yaIWOzPNVWiUNhm4Ou8QtFlJmkvg/klvWMrfXZlXv0UtosrTUM9GfuftGo4atKUkOzF2G+3TzihFmWZuPn+0xY8JkspicQQ3mK9BCptSbS7C0mqb6BWoKKlpS9C4bFsRyoo9oJJs9+WyjkUkDsHPL0hy2rShSVAPqBti5/1JptFfImG+pCcCKeqSTlR+8DxSlk1trBm7HhFghoUQhlKGiiOxhiOZ4OyGgl6OpgJJjoURACHMeaApUYm7xrGBzA5QnVaR5iLqxTFKmEq+VOHon89IoJsxlo2J9CI1VkuiU+ZF4//X7d4vwq2cvM6FUIJnlQqMW3TQedekc4vbQtYlOWSHI1NIJwglC1OHGvVzXmIXVLSViYR86VH/3BUdSt/wBkJUn9YCrtpE1LIKioAGqUtXrHFWxaZyLqVeMXSynzTXDr0hC3TlC0eEOABkWwJyjsu1H4yHGDHz/iEb3nsyWsdDFpK1zi1LqwH0o5LnlHbLaQJ6kY4qprz5Hyj1smkzRVkklhqS4f0iEuWELv5kFnxzB8oZ2sr3NHKp+xq/01aiuWoH6T/H2EWay8Z3glpAnKQMFB++PnF4TSPM/URqZ3cEriBWY9A1mPRylrM3PWtVozISCNcA2PMwOUpalrUxxCRTTH0ETslqSy1l/bk58o5w6ekIcgu5Jw2/Ee0qSWTzHecfBLhilus1+YDDdW3KI2e0KK1qLZ65lx5CC8MtCQh6u5J6AR7hc1JQqv1DXIf/qBDayaXeCv/wAtppca57NHjPUVhKKFr2Ohz8oMqakzV1H1erfeATFpC6EOlJwbctAksXfYy3rov5shJl3icAFjQEV65iKu1TkoShaThRhqKpfmPSLTgJvy6hJIWQoKLAILEEVq5vgs58I1rXTbAkX5TlTE3cHo5Q+5TT8QW/LKQqVYbM7a5g+KsigUQodQD94KhcL29DLDUoPvHErLRyy9TOuGkNqUIEuaBAAXMdMssHxAJ2xb8QjKWMpmECtMo8qZEUq8JBq7HkaiBLwjGsNwtAmWgJNQBXlTzp5xoeJ0Zv8AYjYYdCfSKL9NWcqUtebhI9TXqI0FhlmZfUtQSkKQm8Q58RKUBv3EY7R1cdRhns5J3KeOgnCrQgS1KVQ1JOIpQD1ivkSnQgk/UexKk/cdos+NShLlLRQqHhcZkYncGveKaXfUiWkUdQ7VMXvreCXz8itvtATPZqJDY/thmTaE/wCQkVw02J+8ctMorWpSWIqOZZqesCQofEUu6aJIwIAYBy/QwHaf2FJfgBxBa1qBFBeO2bj0i9XZUpCTi17zSfxFHZbQpcu8E5AjPY+sXllcoQVmhADdCPsYOG38gdpIIhYQtCxiSQeviHnGkv8Ah5xlUG8lX7aDmioPUGL+wz78sKjj/VRuKkdPA6bRycqsegc41j0cB2FBIQlSBKCfGquNK1c1wYeUTtCEypbLAc3hQnN68oAj4iCVFRceEV5OR/4ikJHihWvxMQCAxAY1oOuJEe2knH5PLzfwXNmso+CaMbqqPqC32iPD7KAg/MBergck7RW223ELCEENmWGOh2EWS+KpQijPgAWqcz9/KAoq/wCANuv5EJVnHxFOSCcjjUghoDaLNdnXi4RmSKfK2MMyPD/yOLxqMXD/AFdYTtHFStQSA6QcQFNTOnl/MLKOKf0Nbu0WtgtrLKBVwQ+ApUc6A94lbgu+lYcOK5B017kForbFbXWpdwJIW6XfAM2PLKLriNpCkEprgtOWFe7OI0cxywPElS+DKcVk3F83I5Go9YEnlDHFZl9SDohuylD7CAZRyzS8sHVBvxyevQULdIY1DnR2yGkJzV5CJoLA8qdYQY8icrMR2bMpAkTBA7TMoYAxd8EnFEndai3UkP2HnF/weYb61IVS6EnBjjddJ6l211ihkrT8NCHqlAcblqiLyxWe5LvbXy++FeUdnGrpbSOOTq+mwfEWM+6VOLpKicQTiXzJpCy5iQhVw1Cro7EAQnYbYlalrqrF6El3fwnMZBoHagoJSsAsFXllqAl7oPY9jFo+4rXQraLWqSoIfAY41zUPekctNoQlF1NVKcK649hFUq3XlqWptgfL8wxYLMpV6YoEJFEg0JJo/IOYnKVul9fBqrZd8Knp+DdFaEfj1EM2OYpaEk0CVj35mK7hC0JUpFKddvxD4dYmIFACFP3PpBzS/o2LZYJmAKUkYMFdqFof4dPAUqXteTy06RXrmJSEKGJoetK8jBrMtKKqopGf7cOzekLyx8oNDccvGSY5alVjkVFo4okrVdWGDYNvHo8nxZ3+SCzLMVqEx2QcttE5ddo9xGxywgKuClQAHJ357wS22kN8MfMmhOQ0bpCVhsqwr/kUa1AeuxJGAOgryj01h0uzz3lW+hKyyEzFeBF3J3JHUnPYRYWjhklCQoi82tSeQfyiXF+JJlN82jAsNR/PPnELBOXON5RIGTFn2Ay5/wBxRY/a8sVu15LCBWGWZqqouIGBbyOp8h6u8YlpRKLBiB4U68z988OU+JTAgUHiagqzanz55xWWZClspZcn5f50AyH8Q6w/Hv3M8ry6EJCSAkLNSBpgXod40FhCQi7jdOdaGvq8Vs+WhSqCjDbNUR4WpSiqtKeRIoOsJFeLrYb8kyqtinUC/wBIgRUwj3ExdW2YDHm5hJU0mgjln6mdEWqJrWHjypjUiFykDCDCMZElTehji1uQNSB3McuwKQnxoH7h6wDN0aVUm+tN04qYEbMB6xZca4gpEoAlrxataaAiK7gR8ZJqEs3M5+sR/Ua0zKgEBJZuVCfOOuHpbRzy3TBWCbdICAS+wP3p1ixm8OCqrmDXTo/4iFmmpEsBA8RamAB31gaZQQXnEqPVgdmh6X+0hbDWG47ISlIB+cir6C9nvAeNqAQU1AKkN3p1xPURC1JvXZhDS0F0ppVWRLQpxxZMkk43klXM1A5ADzgOVRYat2TsCAJqCXIND6fiLyWt1rQkM4FdsPvGZsqb0tCzQg+z5RoJ1qTdC0PeDdQdX5w0Hj8gkFs0u6hSSfGk/dw3V4KicmbVQYpcMdwXG+sKLllab6gymcEE9RyhqS0xlMwQUvu9CG6+sNX+9zFRO4ch8I5FnaLGhRdjnnvHo81wdnVa9j//2Q=="
    },
    items: [
      {title: "Basics", route: "/basics"},
      {title: "Grammar", route: "/grammar"},
      {title: "Subjects", route: "/subjects"},
      {title: "Dictionary", route: "/dictionary"},
      {title: "More coming soon!"},
    ],
    topitems: [
      {title: "Home", route: "/"},
      {title: "Lesson Hub", route: "/lessons"},
      {title: "About", route: "/about"},
      {title: "Contact", route: "/contact"},
      {title: "Credits", route: "/credits"}
    ]
  }),
  watch: {
    group () {
      this.drawer = false
    },
  },
  methods: {
    openUser: function() {
      window.location.href = this.user.link;
    },
    createCookie: function(name, value, time) {
      this.$cookies.set(name, value, time)
    },
    getCookie: function(name) {
      this.$cookies.get(name)
    },
    checkCookie: function(name) {
      this.$cookies.isKey(name)
    },
    readCookie: function(cookie) {
      return JSON.parse(cookie)
    }
  }
};
// eslint-disable-next-line
</script>