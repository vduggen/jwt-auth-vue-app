export default class User {
    constructor(
      cd_cliente = "uc",
      ds_login = "",
      ds_senha = "",
      perfil = 0
    ) {
      this.cd_cliente = cd_cliente;
      this.ds_login = ds_login;
      this.ds_senha = ds_senha;
      this.perfil = perfil;
    }
  }