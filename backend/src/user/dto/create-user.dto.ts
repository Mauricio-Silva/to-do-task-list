export class CreateUserDto {
  id: string;
  name: string;
  email: string;
  password: string;
  token: string;
  createAt: Date;
  updateAt: Date;
  auth_code: string;
}
