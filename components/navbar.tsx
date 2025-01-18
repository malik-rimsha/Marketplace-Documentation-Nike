import Link from "next/link";
import { Input } from "./ui/input";
import { Heart, Menu, Search, ShoppingBagIcon } from "lucide-react";
import { Button } from "./ui/button";
import * as React from "react";
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Sheet } from "./ui/sheet";

export default function Navbar() {
    return (
        <nav className="w-full h-16  border-b-2 bg-[#FFFFFF] p-4">
            <div className="max-w-7xl  mx-auto flex items-center justify-between">
                <img className="h-11 w-14 ml-4" src="2logo.png" alt="Logo" />

                <div className="hidden  md:flex gap-4 font-bold">
                    <Link href={'featured'} className="text-black text-xs font-semibold mb-3">New and Featured</Link>
                    <Link href={'men'} className="text-black text-xs font-semibold mb-3">Men</Link>
                    <Link href={'/'} className="text-black text-xs font-semibold mb-3">Women</Link>
                    <Link href={'/'} className="text-black text-xs font-semibold mb-3">Kids</Link>
                    <Link href={'/'} className="text-black text-xs font-semibold">Sale</Link>
                    <Link href={'/'} className="text-black text-xs font-semibold mb-3">SNKRS</Link>
                </div>

                <div className="hidden md:flex gap-4">
                    <div className="relative">
                        <Input placeholder="search" className="bg-[#f5f5f5] rounded-full" />
                        <Search className="absolute right-2 top-2" />
                    </div>
                    <Button variant={"outline"} size={"icon"} className="rounded-full">
                        <Heart />
                    </Button>
                    <Button variant={"outline"} size={"icon"} className="rounded-full">
                        <ShoppingBagIcon />
                    </Button>
                </div>

                {/* Sheet Component without nested buttons */}
                <Sheet>
                    <SheetTrigger asChild>
                        {/* Ensuring that SheetTrigger is used correctly and the Button is the root element */}
                        <Button variant={"outline"} size={"icon"} className="rounded-full">
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>
                                <img className="h-9 w-12" src="2logo.png" alt="Logo" />
                            </SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col gap-6 mt-6">
                            <Link href={"/"} className="text-black text-xs font-semibold">Find a Store </Link>
                            <Link href={"/"} className="text-black text-xs font-semibold">Help</Link>
                            <Link href={'Join'} className="text-black text-xs font-semibold">Join Us</Link>
                            <Link href={"sign"} className="text-black text-xs font-semibold">Sign In </Link>
                            <Link href={'featured'} className="text-black text-xs font-semibold">New and Featured</Link>
                            <Link href={'men'} className="text-black text-xs font-semibold">Men</Link>
                            <Link href={'/'} className="text-black text-xs font-semibold">Women</Link>
                            <Link href={'/'} className="text-black text-xs font-semibold ">Kids</Link>
                            <Link href={'/'} className="text-black text-xs font-semibold">Sale</Link>
                            <Link href={'/'} className="text-black text-xs font-semibold">SNKRS</Link>
                        </div>
                        <div className="mt-4">
                            <div className="relative">
                                <Input placeholder="search" className="bg-[#f5f5f5] rounded-full" />
                                <Search className="absolute right-2 top-2" />
                            </div>
                        </div>
                        <div className="mt-4 space-x-2">
                            <Button variant={"outline"} size={"icon"} className="rounded-2xl">
                                <Heart />
                            </Button>
                            <Button variant={"outline"} size={"icon"} className="rounded-full">
                                <ShoppingBagIcon />
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}
