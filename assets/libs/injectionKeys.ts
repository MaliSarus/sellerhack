import { UploadFiles } from 'element-plus';
import { WritableComputedRef } from 'nuxt/dist/app/compat/capi';
import { InjectionKey } from 'vue';

export const authFormDataKey = Symbol() as InjectionKey<{
  phone: string;
  phoneCode: string;
  code: string;
}>;
export const authCurrentStepKey = Symbol() as InjectionKey<Ref<number>>;
export const signUpFormDataKey = Symbol() as InjectionKey<{
  phone: string;
  code: string;
  phoneCode: string;
}>;
export const signUpCurrentStepKey = Symbol() as InjectionKey<Ref<number>>;

export const signUpThreeStepFormDataKey = Symbol() as InjectionKey<{
  name: string;
  lastName: string;
  email: string;
  country: string;
  organizationForm: string;
  inn: string;
  ogrn: string;
  organizationName: string;
  documents: UploadFiles;
  storeName: string;
  productCategory: string;
  stockCity: string;
  catalogItemsCount: string;
  site: string;
  bankBik: string;
  bankName: string;
  rBill: string;
  kBill: string;
}>;

export const TheStepsCurrentStepKey = Symbol() as InjectionKey<
  WritableComputedRef<number>
>;
