<template>
    <UContainer class="grid place-content-center h-screen">
        <div class="flex-col px-6">
            <img src="~/assets/img/logo.png" class="sm:w-64 mx-auto w-32 animate__animated animate__swing" alt="" />

            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 class="my-3 text-center text-3xl font-bold leading-9 tracking-tight">
                    Зарегистрируйте свой личный аккаунт
                </h2>
            </div>
            <div class="sm:mx-auto sm:w-full sm:max-w-sm mb-10">
                <UForm :schema="schema" :state="state" class="space-y-4" @submit="handleSubmit($event, state)">
                    <UFormGroup label="ФИО" name="name">
                        <UInput v-model="state.name" placeholder="Иван Иванов" color="pale-sky" class="font-bold" />
                    </UFormGroup>

                    <UFormGroup label="Сообщение" name="message">
                        <UInput v-model="state.message" placeholder="Ваше сообщение" color="pale-sky"
                            class="font-bold" />
                    </UFormGroup>

                    <UFormGroup label="Электронная почта" name="email">
                        <UInput v-model="state.email" placeholder="example@domain.com" color="pale-sky"
                            class="font-bold" />
                    </UFormGroup>

                    <UFormGroup label="Пароль" name="password">
                        <UInput v-model="state.password" type="password" placeholder="" color="pale-sky"
                            class="font-semibold" />
                    </UFormGroup>

                    <div class="flex flex-row">
                        <button
                            class="text-white active:bg-pale-sky-900 hover:bg-pale-sky-800 bg-pale-sky-900 my-auto shadow-lg dark:shadow-neutral-700/50 grow text-black-700 font-semibold h-9 border-2 border-pale-sky-900 dark:border-neutral-100 hover:dark:bg-neutral-200 dark:bg-neutral-50 dark:text-black active:dark:bg-neutral-50 rounded-lg">
                            Зарегистрироваться
                        </button>
                    </div>
                </UForm>
                <div class="mt-4 flex flex-row">
                    <div class="font-semibold my-auto">
                        <NuxtLink href="login">Уже есть аккаунт?</NuxtLink>
                    </div>
                    <NuxtLink to="login"
                        class="text-center bg-transparent grow hover:bg-mountain-500 text-black-700 font-bold hover:font-medium hover:text-white p-px border-4 border-mountain-500 hover:border-transparent rounded-lg ml-3">
                        Войти</NuxtLink>
                </div>
            </div>
        </div>
    </UContainer>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import { z } from "zod";

definePageMeta({
    middleware: "already-logged-in",
})

useHead({ title: "Registration" });

type Schema = z.output<typeof schema>;

const schema = z.object({
    name: z.string().min(3, "Имя должно быть не менее 3 символов").max(50, "Имя не может быть длиннее 50 символов"),
    message: z.string().min(10, "Сообщение должно быть не менее 10 символов").max(300, "Сообщение не может быть длиннее 300 символов"),
    email: z.string().email("Некорректный email"),
    password: z.string().min(6, "Пароль должен быть не менее 6 символов"),
});

const state = reactive({
    name: '',
    message: '',
    email: '',
    password: '',
});

const { register } = actions();

const handleSubmit = async (event: FormSubmitEvent<any>, state: any) => {
    try {
        await register(state.email, state.password, state.name, state.message);
    } catch (error) {
        console.log(error);
    }
};
</script>
