<script setup>
    import { ref, provide, inject } from 'vue'
    import { checkForm, showNotice, sendForm } from '/src/functions.js'
    import InputBlock from './InputBlock.vue'
    import InputText from './InputText.vue'
    import ChangeBlock from './ChangeBlock.vue'
    import FileInput from './FileInput.vue'

    const props = defineProps({
        mode: String,
    })

    const notices = inject('notices')
    const user = inject('user')
    const data = ref({
        name: '',
        price: '',
        type: '', 
        subject: '',
        description: '',
        file: '',
        date: '',
        orderOrOffer: '',
        author: ''
    })
    provide('data', data)
    
    async function handleSendForm(mode) {
        if (mode === 'Выложить') {
            data.value.orderOrOffer = 'offer'
        }
        if (mode === 'Запросить') {
            data.value.orderOrOffer = 'order'
        }
        data.value.author = user.value.user_id
        data.value.date = JSON.stringify({year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate()})
        const isCorrect = checkForm(data.value)
        if (isCorrect === true) {
            let response = await sendForm(data.value)
            if (response.title === 'Успех!') {
                for (key in data.value) {
                    data.value.key = ''
                }
            } 
            showNotice(response.title, response.content, notices.value)
        } else {
            showNotice(isCorrect.title, isCorrect.content, notices.value)
        }
    }
</script>

<template>
    <InputBlock value="название" input="название" :isSlot="false"></InputBlock>
    <InputBlock value="цена" input="цену" :isSlot="true">
        <p class="shard">Sh</p>
    </InputBlock>
    <ChangeBlock name="Тип" mode="type"></ChangeBlock>
    <ChangeBlock name="Предмет" mode="subject"></ChangeBlock>
    <InputText value="Описание"></InputText>
    <FileInput value="Фото" :mode="mode"></FileInput>
    <div class="submit">
        <button class="btn-default submit-btn" @click="handleSendForm(mode)">{{ mode }}</button>
    </div>
</template>

<style scoped>
.shard {
	position: absolute;
	right: .5vw;
	color: #5C6973 !important;
	font-size: 1vw !important;	
}
.submit-btn {
    height: fit-content;
    width: fit-content;
    padding: .4vw 1.6vw;
    font-size: 1vw;
    margin-left: auto;
}
.submit {
    display: flex;
    margin-top: 1vw;
    width: 100%;
    height: fit-content;
}
</style>