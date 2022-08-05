<template>
  <el-form ref="ruleFormRef" :model="props.book" status-icon label-width="120px" class="demo-ruleForm">
    <el-form-item
      label="Book Name"
      prop="merchName"
      :rules="[{ required: true, message: 'Please input merchName', trigger: 'blur' }]"
    >
      <el-input v-model="props.book.merchName" />
    </el-form-item>
    <el-form-item label="Author" prop="author">
      <el-input v-model="props.book.author" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm"> Submit </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

const emit = defineEmits(['onUpdateBookInfo'])

const props = defineProps({
  book: {
    required: true,
    type: Object,
    default: () => {}
  }
})

const ruleFormRef = ref()

function submitForm() {
  ruleFormRef.value.validate((valid: boolean) => {
    if (valid) {
      emit('onUpdateBookInfo', props.book)
      ElMessage.success('submit success!')
    } else {
      ElMessage.error('error submit!')
      return false
    }
  })
}
</script>
