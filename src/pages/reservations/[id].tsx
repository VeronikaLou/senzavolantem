import { reservations } from '../../lib/directus';
import { Reservation as ReservationType } from '../../models/reservation';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { Layout } from 'src/components/layout';

export default function Reservation({ reservation }: { reservation: ReservationType }) {
  return (
    <Layout>
      <div className='flex flex-col'>
        <h1 className='mb-5 text-xl'>{`Rezervace - ${reservation.id}`}</h1>
        <label>{`Jméno: ${reservation.firstName}`}</label>
        <label>{`Příjmení: ${reservation.lastName}`}</label>
        <label>{`Datum narození: ${reservation.birthDate}`}</label>
        <label>{`Adresa: ${reservation.address}`}</label>
        <label>{`E-mail: ${reservation.mail}`}</label>
        <label>{`Telefon: ${reservation.phone}`}</label>
        <label>{`Datum vyjížďky: ${reservation.from} - ${reservation.to}`}</label>
        <label>{`Datum rezervace: ${reservation.created}`}</label>
        <label>{`Status: ${reservation.status}`}</label>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await reservations.readByQuery({
    filter: { id: params?.id },
  });

  return {
    props: {
      reservation: res?.data?.[0],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await reservations.readByQuery({
    limit: -1,
  });

  return {
    paths:
      res?.data?.map((reservation) => ({
        params: {
          id: reservation.id,
        },
      })) ?? [],
    fallback: false,
  };
};
