import * as yup from 'yup';

export const flashcardValidationSchema = yup.object().shape({
  question: yup.string().required(),
  answer: yup.string().required(),
  user_id: yup.string().nullable(),
});
