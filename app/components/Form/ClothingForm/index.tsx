/* eslint-disable react-hooks/exhaustive-deps */
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useEffect } from "react";

import { ServiceFactory } from "~/service/Clothing";

import { validationSchema } from "./validation";
import { sizes, genders, seasons, initialValues } from "./constants";

import { ClothingModel } from "~/types/Clothing";

import FormInput from "../FormInput";
import Button from "~/components/Button";

const clothingService = ServiceFactory.createClothingService();

type ClothingFormProps = {
  onFinish: () => void;
  updateData: ClothingModel | undefined;
};

const ClothingForm = ({ onFinish, updateData }: ClothingFormProps) => {
  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values: typeof initialValues) => {
      await handleSaveData(values);
      form.resetForm();
      onFinish();
    },
  });

  const handleSaveData = async (data: typeof initialValues) => {
    if (updateData) {
      await clothingService.update(updateData.id, data);
      toast.success("Roupa atualizada com sucesso!");
    } else {
      await clothingService.save(data);
      toast.success("Roupa cadastrada com sucesso!");
    }
  };

  useEffect(() => {
    const inialData = updateData || initialValues;
    form.setValues(inialData);
  }, [updateData]);

  return (
    <form
      onSubmit={form.handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-100 rounded-lg"
    >
      <FormInput
        type="text"
        name="name"
        label="Nome"
        placeholder="Digite o nome"
        value={form.values.name}
        error={form.errors.name}
        touched={!!form.touched.name}
        onChange={form.handleChange}
      />

      <FormInput
        type="select"
        name="size"
        label="Tamanho"
        placeholder="Selecione o tamanho"
        options={sizes}
        value={form.values.size}
        error={form.errors.size}
        touched={!!form.touched.size}
        onChange={form.handleChange}
      />
      <FormInput
        type="text"
        name="color"
        label="Cor"
        placeholder="Digite a cor"
        value={form.values.color}
        error={form.errors.color}
        touched={!!form.touched.color}
        onChange={form.handleChange}
      />
      <FormInput
        type="text"
        name="material"
        label="Material"
        placeholder="Digite o material"
        value={form.values.material}
        error={form.errors.material}
        touched={!!form.touched.material}
        onChange={form.handleChange}
      />
      <FormInput
        type="text"
        name="type"
        label="Tipo"
        placeholder="Digite o tipo"
        value={form.values.type}
        error={form.errors.type}
        touched={!!form.touched.type}
        onChange={form.handleChange}
      />
      <FormInput
        type="text"
        name="brand"
        label="Marca"
        placeholder="Digite a marca"
        value={form.values.brand}
        error={form.errors.brand}
        touched={!!form.touched.brand}
        onChange={form.handleChange}
      />
      <FormInput
        type="currency"
        name="price"
        label="Preço"
        placeholder="Digite o preço"
        value={form.values.price}
        error={form.errors.price}
        touched={!!form.touched.price}
        onChange={(value) => form.setFieldValue("price", value)}
      />
      <FormInput
        type="number"
        name="stock"
        label="Estoque"
        placeholder="Digite o estoque"
        value={form.values.stock}
        error={form.errors.stock}
        touched={!!form.touched.stock}
        onChange={form.handleChange}
      />
      <FormInput
        type="text"
        name="image"
        label="URL da Imagem"
        placeholder="Cole a URL da imagem"
        value={form.values.image}
        error={form.errors.image}
        touched={!!form.touched.image}
        onChange={form.handleChange}
      />
      <FormInput
        type="date"
        name="releaseDate"
        label="Data de Lançamento"
        placeholder="Selecione a data"
        value={form.values.releaseDate}
        error={form.errors.releaseDate}
        touched={!!form.touched.releaseDate}
        onChange={form.handleChange}
      />
      <FormInput
        type="select"
        name="gender"
        label="Gênero"
        placeholder="Selecione o gênero"
        value={form.values.gender}
        error={form.errors.gender}
        touched={!!form.touched.gender}
        onChange={form.handleChange}
        options={genders}
      />
      <FormInput
        type="select"
        name="season"
        label="Estação"
        placeholder="Selecione a estação"
        value={form.values.season}
        error={form.errors.season}
        touched={!!form.touched.season}
        onChange={form.handleChange}
        options={seasons}
      />
      <div className="md:col-span-2">
        <Button type="submit" className="w-full">
          Salvar
        </Button>
      </div>
    </form>
  );
};

export default ClothingForm;
