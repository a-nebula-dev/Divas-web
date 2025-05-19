"use client";

import React from "react";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import { login } from "../../lib/auth";
import { useRouter } from "next/router";

const Login = () => {
  const handleLogin = () => {
    login(); // salva no localStorage
    router.push("Perfil.jsx"); // redireciona pra página protegida
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* esquerda gradiente*/}
      <div className="bg-gradient-to-br from-pink-300 to-purple-400 md:w-1/2">
        <a href="">voltar</a>
      </div>

      {/* direita formulario*/}
      <div className="flex flex-1 flex-col justify-between bg-white p-8 md:w-1/2">
        <div className="mx-auto flex w-full max-w-md flex-col items-center">
          {/* Logo */}
          <div className="mb-12 mt-8">
            <img src={"divasLogo.png"} alt="logo divas" />
          </div>

          {/* formluario */}
          <form className="w-full space-y-6 mx-auto flex max-w-md flex-col">
            <div className="space-y-2">
              <label htmlFor="login" className="text-l font-normal">
                login:
              </label>
              <Input
                id="login"
                onChange={(e) => setUsername(e.target.value)}
                className="rounded-xl border-black p-3"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-l font-normal">
                Senha:
              </label>
              <Input
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-xl border-black"
              />
            </div>

            <div className="flex justify-end">
              <Button variant="link" className="h-auto p-0 text-blue-500">
                Esqueceu a senha?
              </Button>
            </div>

            <Button
              type="submit"
              onClick={handleLogin}
              className="mx-auto w-50 bg-emerald-200 text-black hover:bg-emerald-800 hover:text-white hover:cursor-pointer transition-all duration-300"
            >
              Entrar
            </Button>
          </form>

          <div className="my-6 w-full">
            <Separator className="my-4" />
            <Button
              variant="outline"
              className="flex w-full items-center justify-center gap-2 border-gray-200"
            >
              Entrar com Google
            </Button>
            <Separator className="my-4" />
          </div>

          <Button
            variant="outline"
            className="w-50 bg-emerald-200 text-black hover:bg-emerald-800 hover:text-white hover:cursor-pointer transition-all duration-300"
          >
            Criar conta
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-auto flex w-full flex-col justify-between pt-8 md:flex-row">
          <div className="flex flex-col space-y-1 md:flex-row md:space-x-4 md:space-y-0">
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Ajuda
            </a>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Termos
            </a>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Privacidade
            </a>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Politica de Direitos Autorais
            </a>
          </div>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <a href="#" aria-label="Facebook">
              icon face
            </a>
            <a href="#" aria-label="Instagram">
              icon insta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
