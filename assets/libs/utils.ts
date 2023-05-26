// import { v4 as uuidv4 } from 'uuid';

// export const fileAsBinary = (file: File) => {
//   const reader = new FileReader();
//   return new Promise((resolve, reject) => {
//     reader.onerror = function () {
//       reject(new DOMException('Problem parsing input file.'));
//     };

//     reader.onload = function (e) {
//       resolve(e.target?.result);
//     };
//     reader.readAsBinaryString(file);
//   });
// };
// export const fileToPython = (file: File) => {
//   const reader = new FileReader();
//   return new Promise((resolve, reject) => {
//     reader.onerror = function () {
//       reject(new DOMException('Problem parsing input file.'));
//     };

//     reader.onload = function (e) {
//       const img = new Image();
//       img.src = e.target?.result as string;
//       resolve({
//         img: img.src,
//         uuid: uuidv4(),
//         id: null,
//         status: 'loading',
//         progress: 0,
//         rotate: 0,
//         file: file,
//       });
//     };
//     reader.readAsDataURL(file);
//   });
// };

//Удаление символов
export function removeSymbols(string: string) {
  return string.replace(/[\s-()]/g, '');
}

//Регулярка для проверки email
export const emailPattern =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
