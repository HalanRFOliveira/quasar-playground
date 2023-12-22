<template>
  <q-layout view="hHh Lpr fff">
    <q-header elevated>
      <q-toolbar>
        <div
          class="q-pa-xm fit row justify-between items-center"
        >
          <span class="text-h6">Oliveira Software</span>

          <q-tabs dense no-caps v-if="!$q.platform.is.mobile">
            <q-tab name="Produtos" label="Produtos" />
            <q-tab name="Sobre" label="Sobre" />
            <q-tab name="Contato" label="Contato" />
          </q-tabs>

          <q-btn-dropdown
            dropdown-icon="menu_open"
            flat
            v-if="$q.platform.is.mobile"
          >
            <q-list class="bg-grey-2">
              <q-item clickable @click="onItemClick()">
                <q-item-section>
                  <q-item-label>Produtos</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable @click="onItemClick()">
                <q-item-section>
                  <q-item-label>Sobre</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable @click="onItemClick()">
                <q-item-section>
                  <q-item-label>Contato</q-item-label>
                </q-item-section>
              </q-item>

            </q-list>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="q-pa-md">
      <p class="flex flex-center">E-mail: halannalah@gmail.com</p>
      <p class="flex flex-center">Telefone: (51) 9 9019-3912</p>
      <q-tabs class="q-pa-md">
        <q-tab name="facebook" icon="fa-brands fa-facebook" />
        <q-tab name="instagram" icon="fa-brands fa-instagram" />
        <q-tab name="github" icon="fa-brands fa-github" />
        <q-tab name="linkedin" icon="fa-brands fa-linkedin" />
      </q-tabs>
      <p class="flex flex-center">
        Oliveira Software © 2023 | Todos os direitos reservados.
      </p>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
