import React, { useEffect } from 'react'
import { useRouter } from "next/router";
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const router = useRouter()
    const { user } = useAuth()

  return <div>This route is protected</div>
}

export default Dashboard