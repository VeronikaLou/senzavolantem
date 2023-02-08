import directus from '../../lib/directus';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { Layout } from 'src/components/layout';

export default function Reservation({ reservation }) {
  return (
    <Layout>
      <h1 className='mb-5 text-xl'>{`Rezervace - ${reservation.id}`}</h1>
      <h2>{`Jméno: ${reservation.name}`}</h2>
      <h2>{`E-mail: ${reservation.mail}`}</h2>
      <h2>{`Datum vyjížďky: ${reservation.date}`}</h2>
      <h2>{`Datum rezervace: ${reservation.created}`}</h2>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await directus.items('reservations').readByQuery({
    filter: { id: params.id },
  });

  return {
    props: {
      reservation: res.data[0],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await directus.items('reservations').readByQuery({
    limit: -1,
  });

  return {
    paths: res.data.map((reservation) => ({
      params: {
        id: reservation.id,
      },
    })),
    fallback: false,
  };
};
