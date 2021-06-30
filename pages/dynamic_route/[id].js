import React from 'react';
import { useRouter } from 'next/router'
const dynamic_route = () => {
 const router = useRouter()
 const pathData = router.query
 return (
 <h1 style={{ color: "blueviolet", textAlign: "center" }}>
 animal name: {pathData.id}<br/>
 type: {pathData.code}
 </h1>
 )
}
export default dynamic_route