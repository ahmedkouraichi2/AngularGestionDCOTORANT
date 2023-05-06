import { Role } from "./role.model";

export interface User {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  activated: boolean;
  birthdDay: Date;
  etablissement: string;
  grade: string;
  tel: string;
  specialite: string;
  themeDeRecherche: string;
  roles: Role[];
}

