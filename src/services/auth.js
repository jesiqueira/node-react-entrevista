import bcrypt from "bcryptjs";

export const createPasswordHash = async (password) => bcrypt.hash(password, 8);

export const checkPassword = async (user, password) => bcrypt.compare(password, user.password)

// export const createPasswordHash = async (password) => {
//   try {
//     const hash = await bcrypt.hash(password, 8);
//     return hash;
//   } catch (error) {
//     console.error(error);
//   }
// };
