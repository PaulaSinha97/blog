import * as bcrypt from 'bcrypt';

// const saltOrRounds = 10;
// const password = 'random_password';
// const hash = await bcrypt.hash(password, saltOrRounds);

export async function  hashPasswordWithBcrypt(userGivenPassword: string) {
    console.log("userGivenPassword",userGivenPassword)
  const saltOrRounds = bcrypt.genSaltSync();
  console.log("saltOrRounds",saltOrRounds)
  return await bcrypt.hash(userGivenPassword, saltOrRounds);
}

export function comparePasswords(userGivenPassword:string, hash:string){
  return bcrypt.compareSync(userGivenPassword,hash)
}