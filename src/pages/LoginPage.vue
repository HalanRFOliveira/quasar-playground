<template>
  <div class="row absolute-center fit items-center justify-center">
    <q-form @submit="onSubmit">
      <div class="row">
        <div class="row justify-center items-center col-xs-12 col-md-12 q-mb-lg q-pa-lg">
          <q-card
            class="bg-secondary q-px-xl overflow-auto"
            bordered
          >
            <q-card-section class="flex flex-center">
              <q-img
                src="images/h-logo.png"
                style="height: 12dvh; width: 15dvh"
              />
            </q-card-section>
            <q-card-section>
              <div class="row q-gutter-md flex justify-center full-width q-mt-none">
                <q-btn
                  label="Entrar"
                  :loading="loading"
                  color="primary"
                  class="q-ma-md full-width"
                  type="submit"
                  rounded
                  size="md"
                  no-caps
                />
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "src/stores/store.js";
import { useRouter, useRoute } from "vue-router";
import { useUtils } from 'src/composables/UseUtils';

const store = useAuthStore();
const router = useRouter();
const route = useRoute();
const { formatDate } = useUtils();
const form = ref({ email: "" });
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
