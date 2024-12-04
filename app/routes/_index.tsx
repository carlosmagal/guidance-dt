import type { MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";

import Background from "../assets/images/login.jpg";

import Input from "~/components/Form/fields/Input";
import Button from "~/components/Button";

export const meta: MetaFunction = () => {
  return [{ title: "Login" }];
};

export default function Index() {
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    navigate("/home");
  }

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#e05937]">Bem-vindo!</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 py-4">
            <Input type="text" name="email" placeholder="Email" />
            <Input type="password" name="password" placeholder="Senha" />
            <Button type="submit">Login</Button>
          </form>
        </div>

        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src={Background} alt="" />
        </div>
      </div>
    </section>
  );
}
