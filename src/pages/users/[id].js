import axios from "axios"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { Spinner } from '@chakra-ui/react'
import useUser from "@/lib/useUser"


export default function Profile() {


    return (
        <div>
            <h1>Profile</h1>
            {user.username}
        </div>
    )
}