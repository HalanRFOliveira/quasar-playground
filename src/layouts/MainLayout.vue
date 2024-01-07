<template>
  <q-layout view="hHh Lpr fff">
    <q-header reveal elevated class="q-ma-md bg-secondary rounded-borders">
      <q-toolbar>
        <div class="q-pa-xm fit row justify-between items-center">
          <q-avatar
          size="50px"
          >
            <img
              src="images/h-logo.png"
              alt="Halan Logo"
            />
          </q-avatar>

          <q-tabs dense no-caps v-if="!$q.platform.is.mobile">
            <q-route-tab to="/" name="home" label="Home" />
            <q-route-tab to="/about" name="sobre" label="Sobre" />
            <q-route-tab to="contacts" name="contato" label="Contato" />
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

    <q-footer class="q-pa-md bg-secondary">
      <div class="flex flex-center q-pa-md">
        <q-btn
          class="q-pa-sm"
          target="_blank"
          href="https://wa.me/+5551990193912"
          size="md"
          flat
          icon="fa-brands fa-whatsapp"
        />
        <q-btn
          class="q-pa-sm"
          target="_blank"
          href="https://instagram.com/halan_oliveira"
          size="md"
          flat
          icon="fa-brands fa-instagram"
        />
        <q-btn
          class="q-pa-sm"
          target="_blank"
          href="https://github.com/HalanRFOliveira"
          size="md"
          flat
          icon="fa-brands fa-github"
        />
        <q-btn
          class="q-pa-sm"
          target="_blank"
          href="https://linkedin.com/in/oliveirahalan"
          size="md"
          flat
          icon="fa-brands fa-linkedin"
        />
      </div>
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
