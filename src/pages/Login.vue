<template>
  <div
    class="
      surface-0
      flex
      align-items-center
      justify-content-center
      min-h-screen min-w-screen
      overflow-hidden
    "
    @keyup.enter="verificarUsuario()"
  >
    <div class="form-content">
      <Toast />
      <div class="grid justify-content-center p-2 lg:p-0">
        <div class="col-12 mt-1 text-center">
          <img
            src="@/assets/images/upea_logo.png"
            alt="UPEA logo"
            style="width: 150px"
          />
        </div>
        <div
          class="col-12"
          style="
            border-radius: 56px;
            padding: 0.3rem;
            background: linear-gradient(
              180deg,
              var(--primary-color),
              rgba(33, 150, 243, 0) 30%
            );
          "
        >
          <div
            class="h-full w-full m-0 py-7 px-4"
            style="
              border-radius: 53px;
              background: linear-gradient(
                180deg,
                var(--surface-50) 38.9%,
                var(--surface-0)
              );
            "
          >
            <div class="text-center">
              <img
                src="@/assets/images/avatar-male.png"
                alt="Image"
                height="50"
              />
              <div class="text-900 text-3xl font-medium mb-3">Bienvenido!</div>
              <span class="text-600 font-medium"
                >Inicie sesion para continuar</span
              >
            </div>

            <div class="w-full md:w-10 mx-auto">
              <label
                for="username"
                class="block text-900 text-xl font-medium mb-2"
                >Usuario</label
              >
              <InputText
                id="username"
                v-model="username"
                type="text"
                class="w-full mb-3"
                placeholder="Nombre de usuario"
                style="padding: 1rem"
              />

              <label
                for="password1"
                class="block text-900 font-medium text-xl mb-2"
                >Contraseña</label
              >
              <InputText
                id="password1"
                v-model="password"
                type="password"
                class="w-full mb-3"
                placeholder="Ingrese su contraseña"
                style="padding: 1rem"
              />
              <div class="flex align-items-center justify-content-end mb-5">
                <a
                  class="
                    font-medium
                    no-underline
                    ml-2
                    text-right
                    cursor-pointer
                  "
                  style="color: var(--primary-color)"
                  >¿Olvidaste tu contraseña?</a
                >
              </div>
              <Button
                label="Iniciar sesion"
                class="w-full p-3 text-xl"
                @click="verificarUsuario()"
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="@/assets/images/Fondo2.jpg" alt="Fondo UPEA" class="bg_upea" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "Juan Pablo Valencia",
      password: "JuanPa#1998",
      checked: false,
    };
  },
  methods: {
    async getAdminData(data) {
      try {
        let adminData = await axios.get(
          `/DatosUsuarioAdmin/${data.credentialP}`,
          {
            headers: {
              Authorization: "Bearer " + data.token,
            },
          }
        );
        localStorage.setItem("userAdminData", JSON.stringify(adminData.data));
      } catch (error) {
        console.log("error: " + error);
      } finally {
        location.reload()
      }
    },
    async iniciarSesion() {
      let authJSON = {
        username: this.username,
        password: this.password,
      };
      try {
        let res = await axios.post(
          "/Login-Api/",
          authJSON
        );
        localStorage.setItem("auth", res.data.authentication);
        localStorage.setItem("userAuth", JSON.stringify(res.data));
        this.getAdminData(res.data);
      } catch (error) {
        console.log("error: " + error);
      }
    },
    verificarUsuario() {
      if (this.username != "") {
        if (this.password != "") {
          this.iniciarSesion();
        } else {
          this.showError("Contraseña", "Debe ingresar su contraseña");
        }
      } else {
        this.showError("Usuario", "Debe ingresar el nombre de usuario");
      }
    },
    resetPassword() {
      this.password = "";
    },
    showWarn(summary, detail) {
      this.$toast.add({
        severity: "warn",
        summary: summary,
        detail: detail,
        life: 3000,
      });
    },
    showError(summary, detail) {
      this.$toast.add({
        severity: "error",
        summary: summary,
        detail: detail,
        life: 3000,
      });
    },
    showSuccess(summary, detail) {
      this.$toast.add({
        severity: "success",
        summary: summary,
        detail: detail,
        life: 3000,
      });
    },
  },
  computed: {},
  created() {
    if (localStorage.getItem("auth") == "true") {
      this.$router.push("/");
    }
    axios.defaults.baseURL = 'https://serviciopagina.upea.bo/api/'
  },
};
</script>

<style scoped>
.pi-eye {
  transform: scale(1.6);
  margin-right: 1rem;
}

.pi-eye-slash {
  transform: scale(1.6);
  margin-right: 1rem;
}
.bg_upea {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  object-fit: cover;
  object-position: left;
}
.form-content {
  z-index: 1;
  width: 90%;
  max-width: 500px;
  background-color: #ffffffdd;
  border-radius: 25px;
  padding-top: 25px;
}
</style>