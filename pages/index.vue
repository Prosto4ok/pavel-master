<template>
    <div :class="theme">
        <header :class="[theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-indigo-400 text-white']">
            <div class="bg-sky-10 py-4 flex items-center justify-between">
                <div class="flex items-center ml-4">
                    <img src="~/assets/css/img/logo.png" alt="Колледж ВятГУ" class="w-32 h-32 mr-4">
                    <div class="text-left">
                        <h2 class="text-lg font-bold">Колледж онлайн</h2>
                        <p>Дистанционное обучение в колледже</p>
                        <p class="mt-2">Также хочешь учиться в ногу со временем, то вступай к нам?!</p>
                        <button @click="showModal = true"
                            class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-indigo-400">Заполнить
                            анкету</button>

                        <button @click="showModal = true"
                            class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-indigo-400">Зарегистрироваться</button>
                    </div>
                </div>
                <div class="mr-4">
                    <img src="~/assets/css/img/logo1.png" alt="Другая фотография" class="w-80 h-80 mr-4">
                </div>
            </div>
        </header>

        <main>
            <router-view />
        </main>
        <div class="px-10 py-6" :class="theme === 'dark' ? 'bg-gray-800 text-white' : ''">
            <!-- <div v-for="profile in profiles.results" :key="profile.ProfileId"
                class="bg-indigo-400 p-4 rounded-lg w-48 h-60">
                <div class="flex flex-col items-center justify-center h-full text-center">
                    <h3 class="text-md font-semibold text-white">{{ profile.NamePosition }}</h3>
                </div>
            </div> -->
            <h3 class="text-center text-lg font-semibold mb-4">Направления подготовки</h3>



            <div class="flex flex-col items-center space-y-8">

                <div class="grid grid-cols-4 gap-4">
                    <!-- Дошкольное образование -->
                    <div class="bg-indigo-400 p-4 rounded-lg w-48 h-60">
                        <div class="flex flex-col items-center justify-center h-full text-center">
                            <img src="~/assets/css/img/logo2.png" alt="Дошкольное образование" class="w-24 h-24 mb-2" />
                            <h3 class="text-md font-semibold text-white">Дошкольное образование</h3>
                            <button @click="showDirectionModal('Дошкольное образование')"
                                class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-indigo-400">Подробнее</button>
                        </div>
                    </div>
                    <!-- Информационные системы и программирование -->
                    <div class="bg-indigo-400 p-4 rounded-lg w-48 h-60">
                        <div class="flex flex-col items-center justify-center h-full text-center">
                            <img src="~/assets/css/img/logo3.png" alt="Информационные системы и программирование"
                                class="w-24 h-24 mb-2" />
                            <h3 class="text-md font-semibold text-white">Информационные системы и программирование</h3>
                            <button @click="showDirectionModal('Информационные системы и программирование')"
                                class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-indigo-400">Подробнее</button>
                        </div>
                    </div>
                    <!-- Финансы -->
                    <div class="bg-indigo-400 p-4 rounded-lg w-48 h-60">
                        <div class="flex flex-col items-center justify-center h-full text-center">
                            <img src="~/assets/css/img/logo4.png" alt="Финансы" class="w-24 h-24 mb-2" />
                            <h3 class="text-md font-semibold text-white">Финансы</h3>
                            <button @click="showDirectionModal('Финансы')"
                                class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-indigo-400">Подробнее</button>
                        </div>
                    </div>
                    <!-- Физическая культура -->
                    <div class="bg-indigo-400 p-4 rounded-lg w-48 h-60">
                        <div class="flex flex-col items-center justify-center h-full text-center">
                            <img src="~/assets/css/img/logo5.png" alt="Физическая культура" class="w-24 h-24 mb-2" />
                            <h3 class="text-md font-semibold text-white">Физическая культура</h3>
                            <button @click="showDirectionModal('Физическая культура')"
                                class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-indigo-400">Подробнее</button>
                        </div>
                    </div>
                </div>
                <div class="flex space-x-4">
                    <button
                        class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded w-12 h-12 flex items-center justify-center">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded w-12 h-12 flex items-center justify-center">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <ModalDirection v-if="showDirection" :show="showDirection" :direction="selectedDirection"
            @close="showDirection = false" />

        <div class="flex justify-center items-center mt-8">
            <div class="w-3/4 relative">
                <div class="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none"
                    style="background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 49%, #667EEA 50%, rgba(0, 0, 0, 0) 51%);">
                </div>
                <div class="p-10 rounded-lg text-center bg-indigo-400 relative z-10">
                    <h4 class="text-xl font-semibold mb-4 text-white">Дистанционное образование в колледже - самое
                        верное решение в
                        получении среднего профессионального образования в XXI веке</h4>
                    <div class="bg-white text-black p-7 rounded-lg" style="text-align: justify; margin: 0 2em;">
                        <p style="text-indent: 1.5em;">Дистанционное образование является современным подходом к
                            обучению, который
                            предоставляет студентам возможность получать качественное образование, не покидая комфорт
                            собственного дома. В
                            последние годы оно стало особенно популярным благодаря развитию технологий и
                            интернет-инфраструктуры.
                            Дистанционное образование имеет множество преимуществ, которые делают его привлекательным
                            для студентов
                            колледжей.</p>
                        <p style="text-indent: 1.5em;">Одним из основных преимуществ дистанционного образования является
                            гибкость.
                            Студенты могут сами выбирать время и место для занятий, что позволяет им более эффективно
                            планировать свой
                            день. Это особенно важно для тех, кто совмещает учебу с работой или семейными обязанностями.
                            Гибкий график
                            позволяет студентам учиться в удобное для них время, не жертвуя при этом своими личными или
                            профессиональными
                            обязательствами.</p>
                        <p style="text-indent: 1.5em;">Одним из значимых преимуществ дистанционного образования является
                            возможность
                            обучения у лучших преподавателей и экспертов из разных уголков мира. Важным аспектом
                            дистанционного образования
                            является его доступность. Многие онлайн-курсы и программы стоят значительно дешевле
                            традиционного обучения в
                            колледже.</p>
                        <p style="text-indent: 1.5em;">Однако дистанционное образование имеет и свои вызовы. Студенты
                            могут испытывать
                            недостаток мотивации и чувства изоляции из-за отсутствия непосредственного общения с
                            однокурсниками и
                            преподавателями. Чтобы преодолеть эти трудности, многие онлайн-программы предлагают
                            интерактивные элементы,
                            такие как форумы, чаты и видеоконференции, которые способствуют созданию виртуального
                            сообщества и поддержанию
                            мотивации.</p>
                        <p style="text-indent: 1.5em;">Таким образом, дистанционное образование предоставляет множество
                            преимуществ и
                            возможностей для студентов колледжей. Оно позволяет учиться более гибко и удобно, сочетая
                            учебу с другими
                            жизненными обязательствами, и предоставляет доступ к широкому спектру образовательных
                            ресурсов. Дистанционное
                            образование способствует развитию важных навыков и цифровой грамотности, а также делает
                            образование более
                            доступным и доступным для широкого круга людей.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-center items-center mt-10">
            <div class="w-3/4 flex">
                <div class="w-1/2 pr-6">
                    <h4 class="text-xl font-semibold mb-10 text-gray-900">Легкое поступление в одно касание</h4>
                    <p class="text-justify text-lg">- Весь процесс дистанционный и занимает всего несколько часов.</p>
                    <p class="text-justify text-lg">- Специалисты службы поддержки оперативно помогут решить любые
                        учебные вопросы.</p>
                    <button @click="showModal = true"
                        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-indigo-400">Заполнить
                        анкету</button>
                </div>
                <div class="w-1/2 pl-6">
                    <img src="~/assets/css/img/logo6.png" alt="Изображение"
                        class="w-full h-full object-cover rounded-lg">
                </div>
            </div>
        </div>

        <<footer
            :class="[theme === 'dark' ? 'bg-gray-800 text-white border-gray-700' : 'bg-indigo-400 text-white border-gray-300']"
            class="mt-8 relative">
            <div class="flex justify-between items-center px-6 py-4 bg-sky-10 text-white">
                <div></div>
                <div>
                    <p>610000, г.Киров, ул. Пушкина 21 - 7 корпус</p>
                    <p>Почта: ycheba.svet@yandex.ru</p>
                    <p>Телефон: 8 (914) 834 12-12 (директор)</p>
                    <p>Телефон: 8 (777) 777 77-77 (учебная часть)</p>
                </div>
            </div>
            <p class="text-center text-white">&copy; 2024 Колледж онлайн обучение</p>
            <div class="absolute bottom-4 left-4 flex items-center space-x-2">
                <button @click="toggleTheme" aria-label="Toggle theme" :class="[
                    'h-6 w-12 rounded-full transition-colors',
                    theme === 'light' ? 'bg-gray-200 dark:bg-gray-700' : 'bg-gray-900 dark:bg-gray-300'
                ]">
                    <div :class="[
                        'h-5 w-5 rounded-full bg-white shadow-md transition-transform',
                        theme === 'light' ? 'translate-x-1' : 'translate-x-6'
                    ]"></div>
                </button>
                <span class="text-sm font-medium">{{ theme === 'light' ? 'Light' : 'Dark' }} Mode</span>
            </div>
            </footer>
            <ModalComponent :showModal="showModal" @close="showModal = false">
                <template v-slot:header>
                    <h2 class="text-center font-bold mt-2 mb-6"> Анкета</h2>
                </template>
                <template v-slot:body>
                    <form @submit.prevent="handleSubmit">
                        <label for="name">ФИО:</label>
                        <input v-model="formData.name" type="text" id="name" class="block w-full mb-2">

                        <label for="phone">Телефон:</label>
                        <input v-model="formData.phone" type="text" id="phone" class="block w-full mb-2">

                        <label for="email">Email:</label>
                        <input v-model="formData.email" type="email" id="email" class="block w-full mb-2">

                        <label for="message">Сообщение:</label>
                        <input v-model="formData.message" type="text" id="message" class="block w-full mb-2">

                        <button type="submit"
                            class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-indigo-400">Отправить</button>
                    </form>
                </template>
            </ModalComponent>
    </div>
</template>


<script>
import { ref, onMounted } from 'vue';
import ModalComponent from '~/pages/ModalFeedback.vue';
import ModalDirection from '~/pages/modal1.vue';
import { API } from '~/plugins/axios.js';

export default {
    components: {
        ModalComponent,
        ModalDirection
    },
    setup() {
        const profiles = ref({
            count: 0,
            results: []
        });
        const getProfilesData = () => {
            API.get('profiles')
                .then(response => {
                    profiles.value = response.data;
                    console.log(profiles.value); 
                })
                .catch(error => {
                    console.error('Ошибка при выполнении запроса:', error);
                });
        };

        onMounted(() => {
            getProfilesData(); 
        });

        return {
            profiles,
            showModal: ref(false),
            theme: ref('light'),
            showDirection: ref(false),
            selectedDirection: ref(null),
            formData: {
                name: '',
                phone: '',
                email: '',
                message: '',
            },
            directions: {
                'Информационные системы и программирование': {
                    title: 'Информационные системы и программирование',
                    form: 'Очная/Заочная',
                    profiles: ['Программирование', 'Сетевые технологии'],
                    profileLinks: {
                        'Программирование': 'https://vk.com',
                        'Сетевые технологии': 'https://vk.com'
                    },
                    link: 'https://new.vyatsu.ru/admission/admission_special/?on_site_level=Бакалавриат%2FСпециалитет&on_site_form_ob=Очно-заочная+%28дистанционно%29&on_base=СПО&other=&on_site_fpodr%5B%5D=437'
                },
                'Дошкольное образование': {
                    title: 'Дошкольное образование',
                    form: 'Очная/Заочная',
                    profiles: ['Педагогика', 'Психология'],
                    profileLinks: {
                        'Педагогика': 'https://new.vyatsu.ru/admission/admission_special/?on_site_level=Бакалавриат%2FСпециалитет&on_site_form_ob=Очно-заочная+%28дистанционно%29&on_base=СПО&other=&on_site_fpodr%5B%5D=437',
                        'Психология': 'https://new.vyatsu.ru/admission/admission_special/?on_site_level=Бакалавриат%2FСпециалитет&on_site_form_ob=Очно-заочная+%28дистанционно%29&on_base=СПО&other=&on_site_fpodr%5B%5D=437'
                    },
                    link: 'https://new.vyatsu.ru/admission/admission_special/?on_site_level=Бакалавриат%2FСпециалитет&on_site_form_ob=Очно-заочная+%28дистанционно%29&on_base=СПО&other=&on_site_fpodr%5B%5D=437'
                },
                'Финансы': {
                    title: 'Финансы',
                    form: 'Очная/Заочная',
                    profiles: ['Педагогика', 'Психология'],
                    profileLinks: {
                        'Педагогика': 'https://new.vyatsu.ru/admission/admission_special/?on_site_level=Бакалавриат%2FСпециалитет&on_site_form_ob=Очно-заочная+%28дистанционно%29&on_base=СПО&other=&on_site_fpodr%5B%5D=437',
                        'Психология': 'https://new.vyatsu.ru/admission/admission_special/?on_site_level=Бакалавриат%2FСпециалитет&on_site_form_ob=Очно-заочная+%28дистанционно%29&on_base=СПО&other=&on_site_fpodr%5B%5D=437'
                    },
                    link: 'https://new.vyatsu.ru/admission/admission_special/?on_site_level=Бакалавриат%2FСпециалитет&on_site_form_ob=Очно-заочная+%28дистанционно%29&on_base=СПО&other=&on_site_fpodr%5B%5D=437'
                },
                'Физическая культура': {
                    title: 'Физическая культура',
                    form: 'Очная/Заочная',
                    profiles: ['Педагогика', 'Психология'],
                    profileLinks: {
                        'Педагогика': 'https://new.vyatsu.ru/admission/admission_special/?on_site_level=Бакалавриат%2FСпециалитет&on_site_form_ob=Очно-заочная+%28дистанционно%29&on_base=СПО&other=&on_site_fpodr%5B%5D=437',
                        'Психология': 'https://new.vyatsu.ru/admission/admission_special/?on_site_level=Бакалавриат%2FСпециалитет&on_site_form_ob=Очно-заочная+%28дистанционно%29&on_base=СПО&other=&on_site_fpodr%5B%5D=437'
                    },
                    link: 'https://new.vyatsu.ru'
                }
            }
        };
    },
    methods: {
        toggleTheme() {
            this.theme = this.theme === 'dark' ? 'light' : 'dark';
        },
        handleSubmit() {
            const postData = new URLSearchParams();
            postData.append('fio', this.formData.name);
            postData.append('telephone', this.formData.phone);
            postData.append('email', this.formData.email);
            postData.append('soobsh', this.formData.message);

            API.post('anketa', postData)
                .then(response => {
                    console.log('Form submitted successfully:', response.data);
                    this.showModal = false; 
                    this.formData.name = '';
                    this.formData.phone = '';
                    this.formData.email = '';
                    this.formData.message = '';
                    this.submitMessage = 'Form submitted successfully!';

                    setTimeout(() => {
                        this.submitMessage = '';
                    }, 5000);
                })
                .catch(error => {
                    console.error('Error submitting form:', error);
                });
        },
        showDirectionModal(direction) {
            this.selectedDirection = this.directions[direction];
            this.showDirection = true;
        }
    }
};
</script>



<style>
.bg-gray-800 {
    background-color: #2d3748;
}

.text-white {
    color: #fff;
}

.bg-gray-900 {
    background-color: #1a202c;
}
</style>