"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import GooogleIcon from "../../public/google.svg"

export default function GoogleSignInButton() {
    return (
        <Button variant="outline" size="icon">
          <Image src={GooogleIcon} alt="Google icon" className="w-6 h-6 cursor-not-allowed" />
        </Button>
    )
}