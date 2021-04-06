app.component('coursedisplay', {
    data() {
        return {
            course: 'Intro to Vue with Vue 3',
            description: 'This is an introductory course to Vue fundamentals!',
            price: '$19.99',
            available: true,
            imgURL: 'https://catalins.tech/img',
            imgDescription: 'An image with a desktop computer',
            tags: [
                { id: 1, name: 'Vue' },
                { id: 2, name: 'Front-end' },
                { id: 3, name: 'JavaScript' },
            ]
        }
    },
    computed: {
        hasImageDescription() {
            return this.imgDescription.length > 0 ? this.imgDescription : 'This is an automated image description!'
        }
    },
    template: 
    /*html*/
    `
        <img v-bind:src="imgURL" v-bind:alt="hasImageDescription" width="500" height="350">
        <h1>{{ course }}</h1>
        <p>{{ description }}</p>
        <p>{{ price }}</p>
        <button @click="available = !available">Buy now</button>
        <ul>
            <li v-for="tag in tags" :key="tag.id">
                {{ tag.name }}
            </li>
        </ul>
        <p v-if="available">You can buy the course!</p>
        <p v-else>The course is not available to buy!</p>
    `
})