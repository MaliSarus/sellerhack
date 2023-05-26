import { reactive, ref } from 'vue';
import { FormInstance } from 'element-plus';
import {
  emailRule,
  nameRule,
  passwordConfirmRule,
  passwordRule,
  phoneRule,
  codeRule,
  agreementRule,
  lastNameRule
} from '~/assets/libs';

interface RulesObject {
  [key: string]: any;
}

export default function () {
  //Правила валидации для полей форм
  const rules = reactive<RulesObject>({
    name: [...nameRule],
    lastName: [...lastNameRule],
    password: [...passwordRule],
    passwordConfirm: [...passwordConfirmRule],
    email: [...emailRule],
    phone: [...phoneRule],
    code: [...codeRule],
    agreement: [...agreementRule]
  });

  //Реф для формы
  const ruleFormRef = ref<FormInstance>();

  //Сброс валидации для отдельного поля формы
  const resetValidationForField = (fieldName: string) =>
    ruleFormRef.value?.clearValidate(fieldName);
  const validateForm = () => {
    return new Promise<void>((resolve, reject) => {
      ruleFormRef.value?.validate((valid, fields) => {
        valid ? resolve() : reject(fields);
      });
    });
  };
  return {
    rules,
    ruleFormRef,
    resetValidationForField,
    validateForm
  };
}
