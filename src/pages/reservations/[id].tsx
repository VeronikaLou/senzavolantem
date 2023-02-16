import { reservations } from '../../lib/directus';
import { Reservation as ReservationType } from '../../models/reservation';
import { formatDate } from '../../utils/date';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { Button } from 'src/components/buttons';

export default function Reservation({ reservation }: { reservation: ReservationType }) {
  return (
    <div className='flex flex-col'>
      <h1 className='mb-5 text-xl'>{`Rezervace - ${reservation.id}`}</h1>
      <label>{`Jméno: ${reservation.firstName}`}</label>
      <label>{`Příjmení: ${reservation.lastName}`}</label>
      <label>{`Datum narození: ${reservation.birthDate}`}</label>
      <label>{`Adresa: ${reservation.address}`}</label>
      <label>{`E-mail: ${reservation.mail}`}</label>
      <label>{`Telefon: ${reservation.phone}`}</label>
      <label>{`Datum vyjížďky: ${formatDate(reservation.from)} - ${formatDate(
        reservation.to,
      )}`}</label>
      <label>{`Datum rezervace: ${reservation.created}`}</label>
      <label>{`Status: ${reservation.status}`}</label>
      <Button label='Zaplatit' />
    </div>
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
