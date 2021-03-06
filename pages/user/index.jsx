import React from 'react'
import { useRouter } from 'next/router'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { firestore } from '../../firebase'
import { useEffect } from 'react'
import { useState } from 'react'
import BaseLayout from '../../components/BaseLayout'
import Image from 'next/image';
import Link from 'next/link';


const User = () => {
  const router = useRouter()
  const { uid } = router.query

  const [user, setUser] = useState()
  const [allImages, setAllImages] = useState()


  useEffect(() => {
    const q = query(collection(firestore, "users"), where("uid", "==", uid));
    const imageQuery = query(collection(firestore, "images"), where("userId", "==", uid));

    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    }),

      getDocs(imageQuery).then((querySnapshot) => {
        let images = [];
        querySnapshot.forEach((doc) => {
          images.push({ ...doc.data(), id: doc.id })
          setAllImages(images);
        });
      })
  }, [uid])

  return (
    <BaseLayout>
      {user && <p>{user.email}</p>}
      {user && <p>{user.displayName}</p>}
      {user && <p>{user.bio}</p>}
      {user && <p>{user.website}</p>}
      {
        allImages && allImages.map((image, index) => {
          return <Link key={index} href={`preview?image=${image.image}`}>
            <a>
              <Image src={image.image} alt='image' height={300} width={300} priority />
            </a>
          </Link>
        })
      }
    </BaseLayout>
  )
}

export default User