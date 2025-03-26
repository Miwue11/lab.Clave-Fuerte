import { ValidacionClave } from "./model";

export const tieneLetrasMayusculasYMinusculas = (
  clave: string
): ValidacionClave => {
  if (clave !== clave.toLowerCase() && clave !== clave.toUpperCase()) {
    return { esValida: true };
  }
  return {
    esValida: false,
    error: "La clave debe tener letras mayúsculas y minúsculas",
  };
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  for (let i = 0; i < clave.length; i++) {
    if (!isNaN(parseInt(clave[i]))) {
      return { esValida: true };
    }
  }
  return { esValida: false, error: "La clave debe tener números" };
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const especiales = ["!", "@", "#", "$", "%", "&", "*"];
  for (let i = 0; i < clave.length; i++) {
    const char = clave[i];
    if (especiales.indexOf(char) !== -1) {
      return { esValida: true };
    }
  }
  return {
    esValida: false,
    error: "La clave debe tener caracteres especiales",
  };
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (clave.length >= 8) {
    return { esValida: true };
  }
  return {
    esValida: false,
    error: "La clave debe tener al menos 8 caracteres",
  };
};

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  if (clave.includes(nombreUsuario)) {
    return {
      esValida: false,
      error: "La clave no puede contener el nombre de usuario",
    };
  }
  return { esValida: true };
};

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  if (commonPasswords.includes(clave)) {
    return {
      esValida: false,
      error: "La clave no puede ser una contraseña común",
    };
  }
  return { esValida: true };
};

export const recorrerValidaciones = (validaciones: ValidacionClave[]) => {
  for (let i = 0; i < validaciones.length; i++) {
    if (!validaciones[i].esValida) {
      return validaciones[i];
    }
  }
  return { esValida: true };
};
export const comprobarValidaciones = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
) => {
  const validaciones = [
    tienePalabrasComunes(clave, commonPasswords),
    tieneLetrasMayusculasYMinusculas(clave),
    tieneNumeros(clave),
    tieneCaracteresEspeciales(clave),
    tieneLongitudMinima(clave),
    tieneNombreUsuario(nombreUsuario, clave),
  ];
  return validaciones;
};
