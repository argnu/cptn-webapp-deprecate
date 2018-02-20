import { Entidad } from '@/model/Entidad';

export class Beneficiario {
  constructor() {
    this.dni = '';
    this.apellido = '';
    this.nombre = '';
    this.fechaNacimiento = '';
    this.vinculo = '';
    this.invalidez = false;
  }
}

export class Subsidiario {
  constructor() {
    this.dni = '';
    this.apellido = '';
    this.nombre = '';
    this.porcentaje = '';
  }
}

export class Formacion {
  constructor() {
    this.titulo = '';
    this.fechaEmision = '';
    this.fechaEgreso = '';
    this.institucion = '';
    this.tipo = '';
    this.tiempoEmision = '';
  }
}

export class CajaPrevisional {
  constructor() {
    this.nombre = '';
  }
}

export class Profesional extends Entidad {
  constructor() {
    super();
    this.tipo = 'profesional';
    this.apellido = '';
    this.dni = '';
    this.sexo = '';
    this.estadoCivil = '';
    this.lugarNacimiento = '';
    this.fechaNacimiento = '';
    this.nacionalidad = '';
    this.observaciones = '';
    this.formaciones = [];
    this.relacionDependencia = false;
    this.independiente = false;
    this.empresa = '';
    this.serviciosPrestados = '';
    this.cajas_previsionales = [];
    this.beneficiarios = [];
    this.subsidiarios = [];
    this.publicarEmail = false;
    this.publicarCelular = false;
    this.publicarDireccion = false;
    this.publicarAcervo = false;
  }
}
