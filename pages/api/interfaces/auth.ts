export interface Sesion {
    exp?:              number;
    numero_de_control: number;
    nombre:            string;
    apellido:          string;
    nombre_tutor:      string;
    apellido_tutor:    string;
    turno:             string;
    semestre:          string;
    grupo:             string;
    especialidad:      string;
    iat?:              number;
}