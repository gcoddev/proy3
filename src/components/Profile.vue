<template>
  <div class="grid">
    <div class="col-12 md:col-6">
      <div class="card">
        <h5>Datos Personales</h5>
        <div class="p-fluid">
          <div class="grid">
            <div class="col-12">
              <b>Apellido:</b> {{ userAdminData.apellido }}
            </div>
            <div class="col-12">
              <b>Apellido materno:</b> {{ userAdminData.nombre }}
            </div>
            <div class="col-12">
              <b>Celular:</b> {{ userAdminData.celular }}
            </div>
            <div class="col-12"><b>email:</b> {{ userAdminData.gmail }}</div>
            <div class="col-12"><b>roles:</b> {{ userAdminData.roles }}</div>
            <div class="col-12">
              <img src="userAdminData.imagen" alt="userAdminData.imagen" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="card">
        <div class="p-fluid formgrid grid">
          <div class="field col-12 md:col-6">
            <label for="firstname2">Firstname</label>
            <InputText id="firstname2" type="text" />
          </div>
          <div class="field col-12 md:col-6">
            <label for="lastname2">Lastname</label>
            <InputText id="lastname2" type="text" />
          </div>
          <div class="field col-12">
            <label for="address">Address</label>
            <Textarea id="address" rows="4" />
          </div>
          <div class="field col-12 md:col-6">
            <label for="city">City</label>
            <InputText id="city" type="text" />
          </div>
          <div class="field col-12 md:col-3">
            <label for="state">State</label>
            <Dropdown
              id="state"
              v-model="dropdownItem"
              :options="dropdownItems"
              optionLabel="name"
              placeholder="Select One"
            ></Dropdown>
          </div>
          <div class="field col-12 md:col-3">
            <label for="zip">Zip</label>
            <InputText id="zip" type="text" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <h5>Roles</h5>
      <div class="card" v-for="(item, id) of userAdminData.rutas" :key="id">
        <div class="p-fluid">
          <div class="grid">
            <div class="col-12">
              <p>privi_estado: {{ item.privi_estado }}</p>
              <p>tab_descripcion: {{ item.tab_descripcion }}</p>
              <p>tab_link_funcion: {{ item.tab_link_funcion }}</p>
              <p>tab_nombre: {{ item.tab_nombre }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      dropdownItems: [
        { name: "Option 1", code: "Option 1" },
        { name: "Option 2", code: "Option 2" },
        { name: "Option 3", code: "Option 3" },
      ],
      dropdownItem: null,
    };
  },
  computed: {
    ...mapState(["userAdminData"]),
  },
};
</script>