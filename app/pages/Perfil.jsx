"use client";
import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { cn } from "../../lib/utils";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { isAuthenticated } from "../../lib/auth";

export default function Perfil() {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    }
  }, []);
  return (
    <div className="flex min-h-screen bg-white">
      {/* Main content */}
      <div className="flex-1">
        {/* Profile section */}
        <div className="border-b pb-6">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile image */}
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Profile picture"
                  width={160}
                  height={160}
                  className="rounded-full object-cover border-4 border-white shadow-sm"
                  priority
                />
              </div>

              {/* Profile info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h1 className="text-2xl font-semibold mb-2 md:mb-0">
                    Alessandro Silva
                  </h1>
                  <div className="flex items-center justify-center md:justify-end gap-2">
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-bell"
                      >
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                      </svg>
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-more-horizontal"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-center md:justify-start space-x-8 mb-4">
                  <div className="text-center">
                    <p className="font-semibold text-lg">1653</p>
                    <p className="text-sm text-gray-500">Following</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-lg">594</p>
                    <p className="text-sm text-gray-500">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-lg">153</p>
                    <p className="text-sm text-gray-500">Designs</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-lg">265</p>
                    <p className="text-sm text-gray-500">Likes</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-gray-700 max-w-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean ac turpis porta, elementum velit vitae, blandit dolor.
                  Nunc blandit aliquet erat nec auctor. Nam lobortis purus sed
                  neque accumsan ultamcorper. Vivamus dolor felis, viverra a
                  porta id, blandit eget magna. Cras ornare, ipsum id blandit
                  porttitor.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs section */}
        <div className="container mx-auto px-4">
          <Tabs defaultValue="looks" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-12 bg-transparent">
              <TabsTrigger
                value="likes"
                className={cn(
                  "data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none h-12 px-6",
                  "data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:text-pink-500"
                )}
              >
                Likes
              </TabsTrigger>
              <TabsTrigger
                value="looks"
                className={cn(
                  "data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none h-12 px-6",
                  "data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:text-pink-500"
                )}
              >
                Looks
              </TabsTrigger>
              <TabsTrigger
                value="collections"
                className={cn(
                  "data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none h-12 px-6",
                  "data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:text-pink-500"
                )}
              >
                Collections
              </TabsTrigger>
              <TabsTrigger
                value="groups"
                className={cn(
                  "data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none h-12 px-6",
                  "data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:text-pink-500"
                )}
              >
                Groups
              </TabsTrigger>
            </TabsList>

            <div className="py-4">
              <Tabs defaultValue="published" className="w-full">
                <TabsList className="w-full justify-start bg-transparent mb-6">
                  <TabsTrigger
                    value="published"
                    className={cn(
                      "data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none",
                      "data-[state=active]:text-pink-500 data-[state=active]:underline data-[state=active]:underline-offset-8"
                    )}
                  >
                    Published
                  </TabsTrigger>
                  <TabsTrigger
                    value="drafts"
                    className={cn(
                      "data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none",
                      "data-[state=active]:text-pink-500 data-[state=active]:underline data-[state=active]:underline-offset-8"
                    )}
                  >
                    Drafts
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="published" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Content items */}
                    {[1, 2, 3, 4].map((item) => (
                      <ContentCard key={item} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="drafts" className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <p className="text-gray-500">No drafts yet</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <TabsContent value="likes" className="mt-0">
              <div className="py-4">
                <p className="text-gray-500">No likes yet</p>
              </div>
            </TabsContent>

            <TabsContent value="collections" className="mt-0">
              <div className="py-4">
                <p className="text-gray-500">No collections yet</p>
              </div>
            </TabsContent>

            <TabsContent value="groups" className="mt-0">
              <div className="py-4">
                <p className="text-gray-500">No groups yet</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

function ContentCard() {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <div className="aspect-square bg-gray-100 overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=400"
          alt="Content"
          width={400}
          height={400}
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
        />
      </div>
      <div className="absolute bottom-2 left-2 flex items-center gap-2">
        <button className="bg-white/80 backdrop-blur-sm p-1.5 rounded-md hover:bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-heart"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </button>
        <div className="bg-white/80 backdrop-blur-sm p-1.5 rounded-md text-xs">
          2
        </div>
      </div>
    </div>
  );
}
