<template>
    <div class="flex justify-between items-center">
        <base-title>Payments</base-title>

        <base-btn icon="heroicons:plus" @click="$router.push('/payment/add-field')">Add</base-btn>
    </div>

    <div class="grid grid-cols-2 gap-4 mt-8">
        <payment-total></payment-total>
        <payment-total></payment-total>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <payment-card v-for="(field, index) in fields" :field="field" :value="50"></payment-card>
    </div>

    <div class="flex justify-between items-center mt-8">
      <base-subtitle>Regular</base-subtitle>
      <base-btn icon="heroicons:plus" primary @click="$router.push('/payment/add-amount')">Add</base-btn>
    </div>
    <div class="mt-8">
        <payment-table :payments="payments"></payment-table>
    </div>

    <NuxtPage />
</template>

<script setup lang="ts">

const paymentStore = usePaymentStore()
const paymentFieldStore = usePaymentFieldStore()

const { payments } = storeToRefs(paymentStore)
const { fields } = storeToRefs(paymentFieldStore)


const { pending } = useLazyAsyncData(() => paymentStore.list())
const { pending: fieldsLoading } = useLazyAsyncData(() => paymentFieldStore.list())


definePageMeta({
  layout: "test",
});
</script>
