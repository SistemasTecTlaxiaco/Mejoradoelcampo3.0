
export const POINT_ONE = '100000000000000000000000';

export class Usuario {
nombres: boolean;
apellidos: string;
direccion: string;
telefono: string;

  constructor({  nombres, apellidos, direccion, telefono  }: Usuario) {
   
    this.nombres = nombres;
    this. apellidos = apellidos;
    this.direccion = direccion;
    this.telefono = telefono;

  }
}
export class recompensatokens {
  idevento: boolean;
 idtiporecompensa: string;
 idtoken: string;
 idtransaccion: string;

  constructor({  idevento, idtoken, idtiporecompensa, idtransaccion  }: recompensatokens) {
   
    this.idevento = this.idevento;
    this. idtiporecompensa = this.idtiporecompensa;
    this.idtoken = this.idtoken;
    this.idtransaccion = this.idtransaccion;

  }
}
export class conferencias {
  idalfanumerico: boolean;
 idgeneradorautomaticamente: string;
 idnumericosecuencial: string;
 idtipo: string;

  constructor({  idgeneradorautomaticamente, idalfanumerico, idnumericosecuencial, idtipo  }: conferencias) {
   
    this.idalfanumerico = this.idalfanumerico;
    this. idgeneradorautomaticamente = this.idgeneradorautomaticamente;
    this.idnumericosecuencial = this.idnumericosecuencial;
    this.idtipo = idtipo;

  }
}

export class equipodetrabajo {
  nombres: boolean;
 apellidos: string;
 direccion: string;
 telefono: string;

  constructor({  nombres, apellidos, direccion, telefono  }: Usuario) {
   
    this.nombres = nombres;
    this. apellidos = apellidos;
    this.direccion = direccion;
    this.telefono = telefono;

  }
}
export class ventas {
  nombres: boolean;
 apellidos: string;
 direccion: string;
 telefono: string;

  constructor({  nombres, apellidos, direccion, telefono  }: Usuario) {
   
    this.nombres = nombres;
    this. apellidos = apellidos;
    this.direccion = direccion;
    this.telefono = telefono;

  }
}
export class materiales {
  nombres: boolean;
 apellidos: string;
 direccion: string;
 telefono: string;

  constructor({  nombres, apellidos, direccion, telefono  }: Usuario) {
   
    this.nombres = nombres;
    this. apellidos = apellidos;
    this.direccion = direccion;
    this.telefono = telefono;
 }
}