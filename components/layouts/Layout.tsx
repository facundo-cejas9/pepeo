import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'
import { Sidebar } from '../ui';
import Navbar from '../ui/Navbar'



interface Props {
  title: string;
  description: string;
}

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title> {title} </title>
        <meta name='description' content={description}></meta>
        <meta name='og:title' content={title}></meta>
        <meta name='og:description' content={description}></meta>
      </Head>

      <Navbar />

      <Sidebar />
      

      <main className='menu'>
        {children}
      </main>

      <footer>
        {/*footer*/}
      </footer>

    </>
  )
}
