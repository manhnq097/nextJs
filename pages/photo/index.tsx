import { NextPage } from 'next'
import React from 'react'
import Layout from 'components/Layout'
import Photo from 'apps/photo'

const PhotoPage: NextPage = () => {
  return (
    <Layout title="Photo" fullWidth={false}>
      <Photo />
    </Layout>
  )
}

export default PhotoPage
