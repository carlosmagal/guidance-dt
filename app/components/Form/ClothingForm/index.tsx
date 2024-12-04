import { Formik, Form } from "formik";
import FormInput from "../fields/FormInput";
import { clothingValidationSchema } from "./validation";
import { sizes, genders, seasons } from "./constants";

const initialValues = {
  name: "",
  size: "",
  color: "",
  material: "",
  type: "",
  brand: "",
  price: 0,
  stock: 0,
  image: "",
  releaseDate: "",
  gender: "",
  season: "",
};

const ClothingForm = () => {
  const handleSubmit = (values: typeof initialValues) => {
    console.log("Dados do formulário:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={clothingValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-100 rounded-lg">
          <FormInput
            type="text"
            name="name"
            label="Nome"
            placeholder="Digite o nome"
          />
          <FormInput
            type="select"
            name="size"
            label="Tamanho"
            placeholder="Selecione o tamanho"
            options={sizes}
          />
          <FormInput
            type="text"
            name="color"
            label="Cor"
            placeholder="Digite a cor"
          />
          <FormInput
            type="text"
            name="material"
            label="Material"
            placeholder="Digite o material"
          />
          <FormInput
            type="text"
            name="type"
            label="Tipo"
            placeholder="Digite o tipo"
          />
          <FormInput
            type="text"
            name="brand"
            label="Marca"
            placeholder="Digite a marca"
          />
          <FormInput
            type="number"
            name="price"
            label="Preço"
            placeholder="Digite o preço"
          />
          <FormInput
            type="number"
            name="stock"
            label="Estoque"
            placeholder="Digite o estoque"
          />
          <FormInput
            type="text"
            name="image"
            label="URL da Imagem"
            placeholder="Cole a URL da imagem"
          />
          <FormInput
            type="date"
            name="releaseDate"
            label="Data de Lançamento"
            placeholder="Selecione a data"
          />
          <FormInput
            type="select"
            name="gender"
            label="Gênero"
            placeholder="Selecione o gênero"
            options={genders}
          />
          <FormInput
            type="select"
            name="season"
            label="Estação"
            placeholder="Selecione a estação"
            options={seasons}
          />
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#e05937] text-white py-2 rounded-lg hover:scale-105 transition-transform"
            >
              Salvar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ClothingForm;
