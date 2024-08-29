<script setup>
    import { ref, provide } from 'vue'
    import { checkForm, showNotice } from '/src/functions.js'
    import InputBlock from './InputBlock.vue'
    import InputText from './InputText.vue'
    import ChangeBlock from './ChangeBlock.vue'
    import FileInput from './FileInput.vue'

    const props = defineProps({
        mode: String,
    })

    const data = ref({
        name: '',
        price: '',
        type: '', 
        subject: '',
        description: '',
        file: '',
        orderOrOffer: '',
    })
    provide('data', data)

    function sendForm(mode) {
        if (mode === 'Выложить') {
            data.value.orderOrOffer = 'offer'
        }
        if (mode === 'Запросить') {
            data.value.orderOrOffer = 'order'
        }
        const isCorrect = checkForm(data.value)
        if (isCorrect) {
        } else {
            showNotice()
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
    <FileInput value="Фото"></FileInput>
    <div class="submit">
        <button class="btn-default submit-btn" @click="sendForm(mode)">{{ mode }}</button>
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