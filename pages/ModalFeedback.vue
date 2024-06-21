<template>
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="absolute inset-0 bg-black opacity-50" @click="$emit('close')"></div>
        <div class="bg-white p-6 rounded-lg z-10">
            <header class="mb-4">
                <slot name="header"></slot>
            </header>
            <main>
                <slot name="body"></slot>
            </main>
            <footer class="mt-4 flex justify-end">
                <button @click="$emit('close')" class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Закрыть</button>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        showModal: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style scoped>
.fixed {
    position: fixed;
}

.inset-0 {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.z-50 {
    z-index: 50;
}

.z-10 {
    z-index: 10;
}

.opacity-50 {
    opacity: 0.5;
}
</style>
