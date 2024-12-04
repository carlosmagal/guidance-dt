import * as Yup from "yup";

export const clothingValidationSchema = Yup.object({
  name: Yup.string().required("O nome é obrigatório"),
  size: Yup.string().required("O tamanho é obrigatório"),
  color: Yup.string().required("A cor é obrigatória"),
  material: Yup.string().required("O material é obrigatório"),
  type: Yup.string().required("O tipo é obrigatório"),
  brand: Yup.string().required("A marca é obrigatória"),
  price: Yup.number()
    .min(0, "O preço deve ser maior ou igual a 0")
    .required("O preço é obrigatório"),
  stock: Yup.number()
    .min(0, "O estoque deve ser maior ou igual a 0")
    .required("O estoque é obrigatório"),
  image: Yup.string()
    .url("Deve ser uma URL válida")
    .required("A imagem é obrigatória"),
  releaseDate: Yup.string().required("A data de lançamento é obrigatória"),
  gender: Yup.string().required("O gênero é obrigatório"),
  season: Yup.string().required("A estação é obrigatória"),
});
