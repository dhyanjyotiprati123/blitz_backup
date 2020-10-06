import React, { Suspense } from "react"
import { useRouter, BlitzPage } from "blitz"
import Layout from "app/layouts/Layout"
import { LoginForm } from "app/auth/components/LoginForm"
import Header from "app/posts/components/Header"
import Footer from "app/posts/components/Footer"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <br />
      <br />
      <br />
      <div className="loginS">
        <LoginForm onSuccess={() => router.push("/author")} />
      </div>
      <br />
      <br />
      <br />
      <Footer />
     <style jsx>{`
      .loginS{
        padding:50px 0;
        display: grid;
        place-items: center;
        background:url(https://cdn.pizap.com/pizapfiles/images/photo_backgrounds_textures_app05.jpg) center no-repeat;
        background-size:100%;
      }`}
      </style>
    </div>
  )
}

LoginPage.getLayout = (page) => <Layout title="Log In">{page}</Layout>

export default LoginPage
