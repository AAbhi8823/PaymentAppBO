import { Path, UseFormReturn } from "react-hook-form";

export const resetFormByTouchedFields = <ObjType extends object>(
  form: UseFormReturn<ObjType>
) => {
  const fields = Object.keys(form.formState.touchedFields);

  fields.forEach((field) => form.resetField(field as Path<ObjType>));
};
