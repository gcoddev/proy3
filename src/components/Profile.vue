<template>
  <div class="grid">
    <div class="col-12 md:col-6">
      <div class="card">
        <h5>Datos de usuario</h5>
        <div class="p-fluid">
          <div class="grid">
            <div class="col-6"><b>Id:</b> {{ userAuth.id }}</div>
            <div class="col-6">
              <img
                src="@/assets/images/avatar-male.png"
                alt="foto_perfil"
                width="75"
              />
            </div>
            <div class="col-6">
              <b>Nombre de usuario:</b> {{ userAuth.username }}
            </div>
            <div class="col-6">
              <input type="file" name="avatar" id="avatar" style="width: 90%; box-sizing: border-box;" />
            </div>
          </div>
        </div>
        <hr />
        <h5>Datos Personales</h5>
        <div class="p-fluid">
          <div class="grid">
            <div class="col-6">
              <b>Apellido paterno:</b> {{ userAuth.paterno }}
            </div>
            <div class="col-6">
              <b>Apellido materno:</b> {{ userAuth.materno }}
            </div>
            <div class="col-6"><b>Nombres:</b> {{ userAuth.nombres }}</div>
          </div>
        </div>
        <hr />
        <h5>Roles</h5>
        <div class="p-fluid">
          <div class="grid">
            <div class="col-6" v-for="(rol, id) of userAuth.roles" :key="id">
              <b style="text-transform: capitalize">{{ id }}:</b> {{ rol }}
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
    ...mapState(["userAuth"]),
  },
};
</script>