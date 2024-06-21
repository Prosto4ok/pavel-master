<template>
    <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <div class="flex justify-between items-center border-b pb-2 mb-4">
                <h2 class="text-xl font-bold">{{ direction.title }}</h2>
                <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">&times;</button>
            </div>
            <div>
                <p class="mb-2"><strong>Форма обучения:</strong> {{ direction.form }}</p>
                <p class="mb-4"><strong>Профили:</strong>
                    <span v-for="(profile, index) in direction.profiles" :key="index">
                        <a :href="direction.profileLinks[profile]" class="text-blue-500 hover:underline">{{ profile
                            }}</a>
                        <span v-if="index < direction.profiles.length - 1">, </span>
                    </span>
                </p>
                <a :href="direction.link"
                    class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-indigo-400">Подробнее</a>
                <!-- <button @click="showMoreInfo"
                    class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-indigo-400">Подробнее</button> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        },
        direction: {
            type: Object,
            required: true
        }
    },
    methods: {
        showMoreInfo() {
            // Обработчик для кнопки "Подробнее"
            console.log("Показать больше информации о направлении:", this.direction.title);
        }
    }
};
</script>

<style scoped>
.bg-opacity-50 {
    background-color: rgba(0, 0, 0, 0.5);
}
</style>
