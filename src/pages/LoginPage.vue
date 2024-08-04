<template>
  <div class="absolute-center">
    <q-card class="bg-grey">
      <q-card-section class="flex flex-center">
        <q-chip color="secondary" disable text-color="white" icon="event">
          {{ Utils.formatDate(date, "DD/MM/YYYY - hh:mm:ss") }}
        </q-chip>
      </q-card-section>
      <q-card-section>
        <q-form @submit="onSubmit" class="q-ma-md">
          <q-input clearable color="primary" :rules="[Utils.cpfRule]" outlined v-model="form.cpf" type="text"
            mask="###.###.###-##" unmasked-value label="CPF" class="q-ma-md full-width" />
          <q-btn label="login" :loading="loading" color="primary" class="q-ma-md full-width" type="submit" rounded
            size="md" />
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "src/stores/store.js";
import { useRouter, useRoute } from "vue-router";
import { Utils } from 'src/components/utils/utils';

const store = useAuthStore();
const router = useRouter();
const route = useRoute();
const form = ref({ cpf: "" });
const date = ref(new Date());
const loading = ref(false);

const onSubmit = () => {
  loading.value = true;
  store.login();
  setTimeout(() => {
    router.push(route.query.redirect ?? '/');
    loading.value = false;
  }, 1500);
};

onMounted(() => {
  setInterval(() => {
    date.value = Date.now();
  }, 1000);
});

</script>
