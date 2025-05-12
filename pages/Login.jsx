'use client'
import Logo from '../images/divasLogo.png'
import React from 'react'
import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Separator } from "../components/ui/separator"

const Login = () => {
    return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* esquerda gradiente*/}
      <div className="bg-gradient-to-br from-pink-300 to-purple-400 md:w-1/2"></div>

      {/* direita formulario*/}
      <div className="flex flex-1 flex-col justify-between bg-white p-8 md:w-1/2">
        <div className="mx-auto flex w-full max-w-md flex-col items-center">
          {/* Logo */}
          <div className="mb-12 mt-8">
            <img src={Logo}/>
          </div>

          {/* formluario */}
          <form className="w-full space-y-6">
            <div className="space-y-2">
              <label htmlFor="login" className="text-sm font-normal">
                login:
              </label>
              <Input
                id="login"
                onChange={(e) => setUsername(e.target.value)}
                className="rounded-md border-gray-200"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-normal">
                Password:
              </label>
              <Input
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-md border-gray-200"
              />
            </div>

            <div className="flex justify-end">
              <Button variant="link" className="h-auto p-0 text-blue-500">
                Forgot password?
              </Button>
            </div>

            <Button type="submit" className="w-full bg-green text-black hover:bg-mint-green/90">
              login
            </Button>
          </form>

          <div className="my-6 w-full">
            <Separator className="my-4" />
            <Button variant="outline" className="flex w-full items-center justify-center gap-2 border-gray-200">
              Login with Google
            </Button>
            <Separator className="my-4" />
          </div>

          <Button
            variant="outline"
            className="w-full bg-mint-green border-mint-green text-black hover:bg-mint-green/90"
          >
            Create account
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-auto flex w-full flex-col justify-between pt-8 md:flex-row">
          <div className="flex flex-col space-y-1 md:flex-row md:space-x-4 md:space-y-0">
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Help
            </a>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Copyright Policy
            </a>
          </div>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <a href="#" aria-label="Facebook">
              face
            </a>
            <a href="#" aria-label="Instagram">
              insta
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Login;