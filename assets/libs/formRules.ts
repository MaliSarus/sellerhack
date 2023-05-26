const emailPattern =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

//Правило валидации для поля Имя
export const nameRule: Array<object> = [
  {
    required: true,
    trigger: 'change',
    message: 'Обязательное поле'
  },
  {
    min: 2,
    trigger: 'change',
    message: 'Минимальная длина 2 символа'
  },
  {
    max: 255,
    trigger: 'change',
    message: 'Максимальная длина 255 символов'
  }
];

//Правило валидации для поля Фамилия
export const lastNameRule: Array<object> = [
  {
    required: true,
    trigger: 'change',
    message: 'Обязательное поле'
  },
  {
    min: 2,
    trigger: 'change',
    message: 'Минимальная длина 2 символа'
  },
  {
    max: 255,
    trigger: 'change',
    message: 'Максимальная длина 255 символов'
  }
];

//Правило валидации для поля Пароль
export const passwordRule: Array<object> = [
  {
    required: true,
    min: 8,
    message: `Минимальная длина 8 символов`,
    trigger: 'change'
  },
  {
    max: 25,
    message: `Максимальная длина 25 символов`,
    trigger: 'change'
  },
  {
    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i,
    trigger: 'change',
    message: 'Пароль должен состоять из цифр и символов'
  }
];

//Правило валидации для поля Подтвердите пароль
export const passwordConfirmRule: Array<object> = [
  {
    required: true,
    min: 8,
    message: `Минимальная длина 8 символов`,
    trigger: 'change'
  },
  {
    max: 25,
    message: `Максимальная длина 25 символов`,
    trigger: 'change'
  },
  {
    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i,
    trigger: 'change',
    message: 'Пароль должен состоять из цифр и символов'
  }
];

//Правило валидации для поля E-mail
export const emailRule: Array<object> = [
  {
    required: true,
    trigger: 'change',
    message: 'E-mail не может быть пустым'
  },
  {
    min: 6,
    message: 'Минимальная длина 6 символов',
    trigger: 'change'
  },
  {
    max: 314,
    message: 'Максимальная длина 314 символов',
    trigger: 'change'
  },
  {
    pattern: emailPattern,
    trigger: 'change',
    message: 'Некорректный E-mail'
  }
];

//Правило валидации для поля Телефон
export const phoneRule: Array<object> = [
  { required: true, message: 'Введите номер', trigger: 'change' }
];
//Правило валидации для поля Телефон
export const agreementRule: Array<object> = [
  {
    type: 'boolean',
    validator: (rule: any, value: any, callback: any) => {
      if (value === false) {
        callback(new Error());
      }
      callback();
    },
    trigger: 'change'
  }
];

//Правило валидации для поля Код(при регистрации или обновлении пароля)
export const codeRule: Array<object> = [
  {
    required: true,
    min: 7, //Кол-во цифр(6) + отступ
    trigger: 'change',
    message: 'Длинна кода должна составлять 6 символов'
  }
];
