const app = Vue.createApp({
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
    }
})

app.mount('#app');