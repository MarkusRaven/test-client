import { UserGender } from './../entities/user.entity';
export class UpdateUserDto {
  name: string;
  age: number;
  gender: UserGender;
  email: string;
}
